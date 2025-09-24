import React, { useEffect, useRef, useState } from "react";
import s from "./Contact.module.css";
// import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState("");
  const [err, setErr] = useState("");
  const [copied, setCopied] = useState("");

  // put the current URL into a hidden field for EmailJS template context
  useEffect(() => {
    const f = formRef.current;
    if (f) f.website_url.value = window.location.href;
  }, []);

  const copy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(`${label} copied`);
      setTimeout(() => setCopied(""), 1200);
    } catch {}
  };

  const validate = (fd) => {
    const name = fd.get("user_name")?.trim();
    const email = fd.get("user_email")?.trim();
    const message = fd.get("message")?.trim();
    const botTrap = fd.get("company"); // honeypot (should stay empty)

    if (botTrap) return "Spam detected.";
    if (!name) return "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Please enter a valid email.";
    if (!message || message.length < 10)
      return "Message should be at least 10 characters.";
    return "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setOk("");
    setErr("");

    const fd = new FormData(formRef.current);
    const v = validate(fd);
    if (v) {
      setErr(v);
      return;
    }

    try {
      setLoading(true);
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        formRef.current,
        {
          publicKey:
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
        }
      );
      setOk(
        "Thanks! We’ve received your message and will get back to you shortly."
      );
      formRef.current.reset();
    } catch (e) {
      setErr("Couldn’t send right now. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  // demo contact details — replace with yours
  const EMAIL = "support@recoverthefunds.example";
  const PHONE = "+234 801 234 5678";
  const ADDRESS = "Magboro, Ogun / Lagos, Nigeria";

  return (
    <main className={s.shell}>
      {/* HERO */}
      <section className={s.hero}>
        <div className={s.container}>
          <p className={s.kicker}>Contact</p>
          <h1>Let’s talk about your case</h1>
          <p className={s.sub}>
            Send us a message and we’ll review your details. Most cases get a
            response within 24–72 hours.
          </p>
          <div className={s.heroCtas}>
            <a className={s.primary} href="/#start">
              Free Case Review
            </a>
            <Link className={s.ghost} to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* GRID: INFO + FORM */}
      <section className={s.main}>
        <div className={`${s.container} ${s.grid2}`}>
          {/* INFO CARD */}
          <aside className={s.infoCard}>
            <h2>Reach us directly</h2>
            <div className={s.infoItem}>
              <div>
                <p className={s.label}>Email</p>
                <a href={`mailto:${EMAIL}`} className={s.link}>
                  {EMAIL}
                </a>
              </div>
              <button className={s.copy} onClick={() => copy(EMAIL, "Email")}>
                Copy
              </button>
            </div>

            <div className={s.infoItem}>
              <div>
                <p className={s.label}>Phone / WhatsApp</p>
                <a href={`tel:${PHONE.replace(/\s+/g, "")}`} className={s.link}>
                  {PHONE}
                </a>
              </div>
              <button className={s.copy} onClick={() => copy(PHONE, "Phone")}>
                Copy
              </button>
            </div>

            <div className={s.infoItem}>
              <div>
                <p className={s.label}>Address</p>
                <p className={s.text}>{ADDRESS}</p>
              </div>
            </div>

            {copied && (
              <div className={s.snack} role="status">
                {copied}
              </div>
            )}

            <div className={s.tips}>
              <h3>Faster response tips</h3>
              <ul>
                <li>Include dates, amounts, and platforms involved.</li>
                <li>
                  Attach transaction hashes or screenshots (if available).
                </li>
                <li>Tell us what actions you’ve already taken.</li>
              </ul>
            </div>
          </aside>

          {/* FORM CARD */}
          <section className={s.formCard}>
            <h2>Send a message</h2>

            <form ref={formRef} onSubmit={onSubmit} noValidate>
              {/* honeypot */}
              <input
                type="text"
                name="company"
                autoComplete="off"
                className={s.hp}
                tabIndex={-1}
              />

              <div className={s.row}>
                <div className={s.field}>
                  <label htmlFor="user_name">Full name*</label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                  />
                </div>
                <div className={s.field}>
                  <label htmlFor="user_email">Email*</label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="jane@email.com"
                  />
                </div>
              </div>

              <div className={s.row}>
                <div className={s.field}>
                  <label htmlFor="user_phone">Phone (optional)</label>
                  <input
                    id="user_phone"
                    name="user_phone"
                    type="tel"
                    placeholder="+234…"
                  />
                </div>
                <div className={s.field}>
                  <label htmlFor="topic">Topic</label>
                  <select id="topic" name="topic" defaultValue="General">
                    <option>General</option>
                    <option>Crypto/Wallet</option>
                    <option>Bank/Chargeback</option>
                    <option>Investment Scam</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className={s.field}>
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us what happened…"
                />
              </div>

              {/* hidden context for template */}
              <input type="hidden" name="website_url" value="" />

              <div className={s.actions}>
                <button className={s.primary} type="submit" disabled={loading}>
                  {loading ? "Sending…" : "Send message"}
                </button>
                <a className={s.ghost} href={`mailto:${EMAIL}`}>
                  Email instead
                </a>
              </div>

              {/* status */}
              {(ok || err) && (
                <div
                  className={`${s.status} ${ok ? s.ok : s.error}`}
                  role="status"
                  aria-live="polite"
                >
                  {ok || err}
                </div>
              )}
            </form>
          </section>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className={s.cta}>
        <div className={s.container}>
          <h2>Prefer WhatsApp?</h2>
          <p className={s.sub}>
            We can start with a quick chat before a full evidence review.
          </p>
          <a
            className={s.primary}
            href={`https://wa.me/${PHONE.replace(/[^\d]/g, "")}`}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
