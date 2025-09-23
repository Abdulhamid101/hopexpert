import React, { useMemo, useState } from "react";
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
  "$25,000 – $100,000",
  "$100,000+",
];

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    type: "Cryptocurrency",
    amount: AMOUNTS[0],
    name: "",
    email: "",
    phone: "",
    country: "",
    summary: "",
  });

  const pct = useMemo(() => Math.round((step / 3) * 100), [step]);

  const next = () => setStep((s) => Math.min(3, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    // Replace with your API call
    // fetch("/api/leads",{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify(form)})
    alert("Submitted! Check console for payload.");
    console.log("Lead payload", form);
  };

  return (
    <form className={s.card} onSubmit={submit}>
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
            <button type="button" onClick={next} className={s.next}>
              Continue
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

          <label className={s.label}>Phone</label>
          <input
            className={s.input}
            value={form.phone}
            onChange={update("phone")}
            placeholder="+234 800 000 0000"
          />

          <label className={s.label}>Country</label>
          <input
            className={s.input}
            value={form.country}
            onChange={update("country")}
            placeholder="Nigeria"
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
            <button type="submit" className={s.submit}>
              Get Free Evaluation
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
