import React, { useState } from "react";
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
  const [submitting, setSubmitting] = useState(false);

  const change = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const payload = { ...form, createdAt: new Date().toISOString() };

    try {
      if (onSubmit) {
        await onSubmit(payload);
      } else {
        // replace with your API endpoint
        // await fetch("/api/leads", { method:"POST", headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
        console.log("Lead submitted:", payload);
        alert("Submitted! Check console for payload.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
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
          <form className={s.card} onSubmit={submit}>
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
                  placeholder="Email"
                  value={form.email}
                  onChange={change("email")}
                  required
                />
              </Field>
              <Field label="Phone Number" required>
                <input
                  className={s.input}
                  placeholder="+1"
                  value={form.phone}
                  onChange={change("phone")}
                  required
                />
              </Field>
            </div>

            <div className={s.row2}>
              <Field label="Country" required>
                <input
                  className={s.input}
                  placeholder="Type your country"
                  value={form.country}
                  onChange={change("country")}
                  required
                />
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
                placeholder=""
                value={form.summary}
                onChange={change("summary")}
                required
              />
            </Field>

            <button className={s.submit} disabled={submitting}>
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
