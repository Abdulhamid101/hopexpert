import React, { useEffect, useState, useMemo } from "react";
import s from "./LeadHero.module.css";

const SCAM_TYPES = [
  "Cryptocurrency",
  "Credit/Debit Card",
  "Bank Transfer",
  "Forex",
  "Romance",
  "Investment",
  "Other",
];

const AMOUNTS = [
  "Less than $5,000",
  "$5,000 – $25,000",
  "$25,000 – $100,000",
  "$100,000+",
];

// Dev uses Vite proxy (""), prod uses VITE_API_URL
const API = import.meta.env.DEV
  ? ""
  : (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
const COUNTRIES_URLS = [`${API}/api/countries`, `${API}/countries.json`];

const emailOk = (v) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
// Replace/insert dial code at the start of the phone field
function applyDial(phone, dial) {
  const p = String(phone || "");
  const rest = p.replace(/^\s*\+\d{1,4}[\s-]?/, ""); // strip any existing +code
  return dial ? `${dial} ${rest}`.trim() : rest.trim();
}

export default function LeadHero({
  title = "Reclaim Your Scammed Money",
  onSubmit,
  coinImg = "/art/coin.png",
  personImg = "/art/person.png",
}) {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    country: "",
    type: SCAM_TYPES[0],
    amount: AMOUNTS[0],
    summary: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [countries, setCountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);

  // Load countries (route first, then static fallback)
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        let items = [];
        for (const u of COUNTRIES_URLS) {
          try {
            const r = await fetch(u);
            if (r.ok) {
              const list = await r.json();
              items = Array.isArray(list) ? list : [];
              if (items.length) break;
            }
          } catch {}
        }
        if (!items.length) {
          // minimal fallback so UI still works
          items = [
            { name: "Nigeria", code: "NG", dial: "+234" },
            { name: "United States", code: "US", dial: "+1" },
            { name: "United Kingdom", code: "GB", dial: "+44" },
            { name: "Canada", code: "CA", dial: "+1" },
          ];
        }
        items.sort((a, b) => String(a.name).localeCompare(String(b.name)));
        if (!alive) return;
        setCountries(items);

        // default to Nigeria if present, else first
        const def = items.find((c) => c.name === "Nigeria") || items[0];
        setForm((f) => ({
          ...f,
          country: f.country || def?.name || "",
          phone: applyDial(f.phone, def?.dial || ""),
        }));
      } finally {
        if (alive) setLoadingCountries(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const change = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onCountryChange = (e) => {
    const name = e.target.value;
    const c = countries.find((x) => x.name === name);
    setForm((f) => ({
      ...f,
      country: name,
      phone: applyDial(f.phone, c?.dial || ""),
    }));
  };

  const selected = countries.find((c) => c.name === form.country);
  const dial = selected?.dial || "+___";

  const submit = async (e) => {
    e.preventDefault();
    if (honeypot) return; // bot

    // backend requires first, last, email
    if (!form.first.trim() || !form.last.trim())
      return alert("Please enter your first and last name.");
    if (!emailOk(form.email))
      return alert("Please enter a valid email address.");

    const payload = { ...form, createdAt: new Date().toISOString() };

    setSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(payload);
      } else {
        const res = await fetch(`${API}/api/leads`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json().catch(async () => await res.text());
        if (!res.ok || data?.ok === false) {
          throw new Error(
            (data && (data.error || data)) || `Request failed (${res.status})`
          );
        }
      }

      alert("Your case has been submitted. We’ll contact you via email.");
      setForm({
        first: "",
        last: "",
        email: "",
        phone: applyDial("", dial), // keep dial for current country
        country: form.country || "",
        type: SCAM_TYPES[0],
        amount: AMOUNTS[0],
        summary: "",
      });
    } catch (err) {
      console.error(err);
      alert(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={s.wrap} id="lead-hero" aria-labelledby="lead-title">
      <div className="container">
        <h1 className={s.h1} id="lead-title">
          {title}
        </h1>

        <div className={s.grid}>
          <form className={s.card} onSubmit={submit} noValidate>
            {/* Honeypot (hidden from humans) */}
            <label className={s.honey} aria-hidden>
              Do not fill this
              <input
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </label>

            <div className={s.row2}>
              <Field label="First Name" required>
                <input
                  className={s.input}
                  placeholder="Name"
                  value={form.first}
                  onChange={change("first")}
                  required
                />
              </Field>
              <Field label="Last Name" required>
                <input
                  className={s.input}
                  placeholder="Name"
                  value={form.last}
                  onChange={change("last")}
                  required
                />
              </Field>
            </div>

            <div className={s.row2}>
              <Field label="Email" required>
                <input
                  className={s.input}
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={change("email")}
                  required
                />
              </Field>
              <Field label="Phone Number">
                <input
                  className={s.input}
                  placeholder={`${dial} 800 000 0000`}
                  value={form.phone}
                  onChange={change("phone")}
                />
              </Field>
            </div>

            <div className={s.row2}>
              <Field label="Country" required>
                <select
                  className={s.input}
                  value={form.country}
                  onChange={onCountryChange}
                  disabled={loadingCountries}
                  required
                >
                  {countries.map((c) => (
                    <option key={c.code || c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Scam Type" required>
                <select
                  className={s.input}
                  value={form.type}
                  onChange={change("type")}
                >
                  {SCAM_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="The amount you invested" required>
              <select
                className={s.input}
                value={form.amount}
                onChange={change("amount")}
              >
                {AMOUNTS.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Brief us about your case" required>
              <textarea
                className={s.input}
                rows="5"
                value={form.summary}
                onChange={change("summary")}
                required
              />
            </Field>

            <button
              className={s.submit}
              disabled={submitting || loadingCountries}
            >
              {submitting ? "Submitting..." : "Get Free Case Evaluation"}
            </button>
          </form>

          <figure className={s.visual} aria-hidden>
            <img className={s.coin} src={coinImg} alt="" />
            <img className={s.person} src={personImg} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }) {
  return (
    <label className={s.field}>
      <span className={s.label}>
        {label} {required && <span className={s.req}>*</span>}
      </span>
      {children}
    </label>
  );
}
