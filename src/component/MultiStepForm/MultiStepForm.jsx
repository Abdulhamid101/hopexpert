import React, { useEffect, useMemo, useState } from "react";
import s from "./MultiStepForm.module.css";

const SCAM_TYPES = [
  "Cryptocurrency",
  "Credit/Debit Card",
  "Bank Transfer",
  "Romance",
  "Investment",
  "Others",
];

const AMOUNTS = [
  "Less than $5,000",
  "$5,000 – $25,000",
  "$5,000 – $100,000",
  "$100,000+",
];

// Use Vite proxy in dev, VITE_API_URL in prod
const API = import.meta.env.DEV
  ? ""
  : (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
const COUNTRIES_URL_1 = `${API}/api/countries`; // your backend route
const COUNTRIES_URL_2 = `${API}/countries.json`; // static fallback if you prefer

const emailOk = (v) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());

// Replace/insert dial code at start of phone field
function applyDial(phone, dial) {
  const p = String(phone || "");
  const rest = p.replace(/^\s*\+\d{1,4}[\s-]?/, ""); // strip any existing +code
  return dial ? `${dial} ${rest}`.trim() : rest.trim();
}

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const [form, setForm] = useState({
    type: "Cryptocurrency",
    amount: AMOUNTS[0],
    name: "",
    email: "",
    phone: "",
    country: "",
    summary: "",
  });

  const [countries, setCountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);

  // Load countries from your backend; try two URLs (route then static)
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const urls = [COUNTRIES_URL_1, COUNTRIES_URL_2];
        let items = [];
        for (const u of urls) {
          try {
            const r = await fetch(u);
            if (r.ok) {
              const list = await r.json();
              items = Array.isArray(list) ? list : [];
              if (items.length) break;
            }
          } catch {}
        }
        if (!items.length) throw new Error("No countries source responded");

        items.sort((a, b) => String(a.name).localeCompare(String(b.name)));

        if (!alive) return;
        setCountries(items);

        // Default to Nigeria if present, else first
        const def = items.find((c) => c.name === "Nigeria") || items[0];
        setForm((f) => {
          const chosen = f.country
            ? items.find((x) => x.name === f.country) || def
            : def;
          return {
            ...f,
            country: chosen?.name || "",
            phone: applyDial(f.phone, chosen?.dial || ""),
          };
        });
      } catch (e) {
        console.error("Failed to load countries:", e);
        // Minimal fallback so UI still works
        const fallback = [
          { name: "Nigeria", code: "NG", dial: "+234" },
          { name: "United States", code: "US", dial: "+1" },
          { name: "United Kingdom", code: "GB", dial: "+44" },
          { name: "Canada", code: "CA", dial: "+1" },
        ];
        if (alive) {
          setCountries(fallback);
          setForm((f) => ({
            ...f,
            country: f.country || "Nigeria",
            phone: applyDial(f.phone, "+234"),
          }));
        }
      } finally {
        if (alive) setLoadingCountries(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const pct = useMemo(() => Math.round((step / 3) * 100), [step]);

  const next = () => setStep((s) => Math.min(3, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onCountryChange = (e) => {
    const name = e.target.value;
    const c = countries.find((x) => x.name === name);
    setForm((f) => ({
      ...f,
      country: name,
      phone: applyDial(f.phone, c?.dial || ""),
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    if (honeypot) return;

    if (!form.name.trim()) return alert("Please enter your full name.");
    if (!emailOk(form.email))
      return alert("Please enter a valid email address.");

    const parts = form.name.trim().split(/\s+/);
    const first = parts[0] || "";
    const last = parts.slice(1).join(" ") || "-";

    const payload = {
      first,
      last,
      email: form.email.trim(),
      phone: (form.phone || "").trim(),
      country: (form.country || "").trim(),
      type: form.type,
      amount: form.amount,
      summary: (form.summary || "").trim(),
      createdAt: new Date().toISOString(),
    };

    setSubmitting(true);
    try {
      const res = await fetch(`${API}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data, text;
      try {
        data = await res.json();
      } catch {
        try {
          text = await res.text();
        } catch {}
      }
      if (!res.ok || data?.ok === false) {
        throw new Error(
          data?.error || text || `Request failed (${res.status})`
        );
      }

      alert("Your case has been submitted. We’ll contact you via email.");
      const keep = countries.find((c) => c.name === form.country);
      setForm({
        type: "Cryptocurrency",
        amount: AMOUNTS[0],
        name: "",
        email: "",
        phone: applyDial("", keep?.dial || ""),
        country: keep?.name || "",
        summary: "",
      });
      setStep(1);
    } catch (err) {
      console.error(err);
      alert(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const selected = countries.find((c) => c.name === form.country);
  const dial = selected?.dial || "+___";

  return (
    <form className={s.card} onSubmit={submit} noValidate>
      {/* Honeypot */}
      <label
        aria-hidden
        style={{
          position: "absolute",
          left: "-9999px",
          height: 0,
          overflow: "hidden",
        }}
      >
        Do not fill this
        <input
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </label>

      <div className={s.header}>
        <h3>Free Case Evaluation</h3>
        <div
          className={s.progress}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className={s.bar} style={{ width: `${pct}%` }} />
        </div>
        <div className={s.steps}>
          <span className={`${s.dot} ${step >= 1 ? s.on : ""}`} />
          <span className={`${s.dot} ${step >= 2 ? s.on : ""}`} />
          <span className={`${s.dot} ${step >= 3 ? s.on : ""}`} />
        </div>
      </div>

      {step === 1 && (
        <div className={s.body}>
          <label className={s.label}>Scam Type</label>
          <select
            className={s.input}
            value={form.type}
            onChange={update("type")}
          >
            {SCAM_TYPES.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>

          <label className={s.label}>Amount Involved</label>
          <select
            className={s.input}
            value={form.amount}
            onChange={update("amount")}
          >
            {AMOUNTS.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>

          <div className={s.row}>
            <button
              type="button"
              onClick={next}
              className={s.next}
              disabled={loadingCountries}
            >
              {loadingCountries ? "Loading countries…" : "Continue"}
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className={s.body}>
          <label className={s.label}>Full Name</label>
          <input
            className={s.input}
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Doe"
            required
          />

          <label className={s.label}>Email</label>
          <input
            className={s.input}
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@email.com"
            required
          />

          <label className={s.label}>Country</label>
          <select
            className={s.input}
            value={form.country}
            onChange={onCountryChange}
            required
          >
            {countries.map((c) => (
              <option key={c.code || c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <label className={s.label}>Phone</label>
          <input
            className={s.input}
            value={form.phone}
            onChange={update("phone")}
            placeholder={`${dial} 800 000 0000`}
          />

          <div className={s.row}>
            <button type="button" onClick={prev} className={s.ghost}>
              Back
            </button>
            <button type="button" onClick={next} className={s.next}>
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className={s.body}>
          <label className={s.label}>Brief your case</label>
          <textarea
            className={s.input}
            rows="5"
            value={form.summary}
            onChange={update("summary")}
            placeholder="Tell us what happened..."
          />

          <div className={s.row}>
            <button type="button" onClick={prev} className={s.ghost}>
              Back
            </button>
            <button type="submit" className={s.submit} disabled={submitting}>
              {submitting ? "Submitting..." : "Get Free Evaluation"}
            </button>
          </div>

          <p className={s.fine}>
            By submitting you agree to our <a href="#">Terms</a> and{" "}
            <a href="#">Privacy</a>. We’ll contact you within 24h.
          </p>
        </div>
      )}
    </form>
  );
}
