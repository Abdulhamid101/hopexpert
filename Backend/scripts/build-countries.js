// scripts/build-countries.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readJSON = (p) => JSON.parse(fs.readFileSync(p, "utf8"));

// package files
const libMetaPath = path.join(
  __dirname,
  "..",
  "node_modules",
  "libphonenumber-js",
  "metadata.full.json"
);
const i18nCountriesPath = path.join(
  __dirname,
  "..",
  "node_modules",
  "i18n-iso-countries",
  "langs",
  "en.json"
);

// read data
const metadata = readJSON(libMetaPath); // has country_calling_codes
const ccMap = metadata.country_calling_codes || {};

const i18nEn = readJSON(i18nCountriesPath); // has { countries: { "US": "United States", ... } }
const iso2ToNameRaw = (i18nEn && i18nEn.countries) || {};

// normalize a “name” to a string
const toName = (val) => {
  if (typeof val === "string") return val;
  if (val && typeof val === "object" && typeof val.name === "string")
    return val.name;
  try {
    return String(val || "").trim();
  } catch {
    return "";
  }
};

function buildList() {
  // invert calling codes → ISO2 -> +code
  const iso2ToDial = {};
  for (const callingCode of Object.keys(ccMap)) {
    const isoList = Array.isArray(ccMap[callingCode]) ? ccMap[callingCode] : [];
    for (const iso2 of isoList) {
      const k = String(iso2 || "").toUpperCase();
      if (k) iso2ToDial[k] = `+${callingCode}`;
    }
  }

  // merge names and dial codes
  const items = Object.entries(iso2ToNameRaw)
    .map(([iso2, rawName]) => {
      const code = String(iso2 || "").toUpperCase();
      const name = toName(rawName);
      const dial = iso2ToDial[code] || null;
      return { code, name, dial };
    })
    .filter(
      (x) => x.code && x.dial && typeof x.name === "string" && x.name.length
    )
    .sort((a, b) =>
      String(a.name).localeCompare(String(b.name), undefined, {
        sensitivity: "base",
      })
    );

  return items;
}

const outDir = path.join(__dirname, "..", "public");
fs.mkdirSync(outDir, { recursive: true });

const list = buildList();
const outFile = path.join(outDir, "countries.json");
fs.writeFileSync(outFile, JSON.stringify(list, null, 2), "utf8");
console.log(`Wrote ${list.length} countries → ${outFile}`);
