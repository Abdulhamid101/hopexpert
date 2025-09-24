// src/pages/services/ServicesTax.jsx
import React, { useState } from "react";
import s from "./ServicesTax.module.css";

const processSteps = [
  { key: "confirm", label: "Confirming a Scam" },
  { key: "share", label: "Sharing Relevant Information" },
  { key: "legal", label: "Legal & Technical Matters" },
  { key: "recover", label: "Recovering Your Lost Resources" },
];

const processText = {
  confirm:
    "We quickly triage the facts to validate whether this is fraud, identity theft, or a filing mistake. We secure evidence (receipts, emails, SMS, dashboards) and freeze sensitive changes where possible.",
  share:
    "You’ll safely provide the minimum necessary details (returns, payment rails, IDs) so we can create an escalation-ready case pack for platforms, processors, and relevant authorities.",
  legal:
    "We coordinate with tax professionals and, when needed, outside counsel to file notices, contest fraudulent filings, and correct records. You’ll get clear, realistic timelines.",
  recover:
    "Where funds moved through off-ramps, we pursue freezes/returns and file the appropriate reports. Our priority is to stop the damage and recover what can be recovered.",
};

const protectTabs = [
  { key: "fileFast", label: "Filing Tax Quickly" },
  { key: "pin", label: "Get An IRS PIN" },
  { key: "monitor", label: "Monitor Your Credit" },
  { key: "postless", label: "Refrain Posting Sensitive Details" },
  { key: "protect", label: "Update Your Protection Service" },
];

const protectCopy = {
  fileFast:
    "File as early as you can to reduce risks of fraudsters filing first. If identity theft occurred, we’ll help file the correct forms and protect further filings.",
  pin: "Enroll for an IRS IP PIN (US) or your jurisdiction’s equivalent to prevent unauthorized e-filing in your name.",
  monitor:
    "Use fraud alerts/credit monitoring; look for new accounts, address changes, or hard pulls you didn’t request.",
  postless:
    "Avoid posting personal data (DOB, address, ID photos) online. Scammers assemble identity profiles from social feeds.",
  protect:
    "Rotate passwords, enable 2FA, and use a password manager. Revoke app access you don’t recognize.",
};

const emerging = [
  {
    t: "Abusive Return Preparer",
    d: "Dishonest preparers inflate refunds or add fake deductions. Always review what’s filed in your name and never sign blank forms.",
  },
  {
    t: "Abusive Tax Schemes",
    d: "Fraudulent shelters/promoters promise ‘no-tax’ outcomes using sham entities or fabricated documents. Verify with licensed professionals.",
  },
  {
    t: "Unsolicited Contacts",
    d: "Threatening calls, emails, or DMs pretending to be the tax authority. Real agencies rarely call first and never demand gift cards or crypto.",
  },
  {
    t: "Nonfiler Enforcement",
    d: "Impostors demand ‘immediate payment’ to avoid arrest. Check official mail and online accounts; consult a professional before paying.",
  },
];

const redFlags = [
  "Immediate payment demands with threats of arrest or deportation.",
  "Unknown numbers or spoofed caller IDs pretending to be the tax authority.",
  "Requests to ‘pay by gift cards/crypto’ or wire to offshore accounts.",
  "Account notices you didn’t initiate (address changes, new logins, new bank links).",
];

const faq = [
  {
    q: "Is there a tax fraud scam?",
    a: "Yes. Scammers pose as agents and threaten fines or jail to extract money. Use official numbers/portals; never pay by crypto or gift cards.",
  },
  {
    q: "What is an income tax scam?",
    a: "Any scheme that fakes wages, deductions, refunds, or claims to file ‘on your behalf’. Review returns line-by-line before signing.",
  },
  {
    q: "What to do if you fall for a tax scam?",
    a: "Preserve evidence, freeze further payments, alert your bank/card issuer, and contact us for a recovery review. The sooner we act, the better.",
  },
];

const servicesGrid = [
  { icon: "/assets/icons/crypto.svg", t: "Cryptocurrency Scam Recovery" },
  { icon: "/assets/icons/forex.svg", t: "Forex Scam" },
  { icon: "/assets/icons/ponzi.svg", t: "Ponzi Schemes" },
  { icon: "/assets/icons/nft.svg", t: "NFT Scam" },
  { icon: "/assets/icons/romance.svg", t: "Romance Scam" },
  { icon: "/assets/icons/internet.svg", t: "Internet Scam" },
  { icon: "/assets/icons/social.svg", t: "Social Media Scam" },
  { icon: "/assets/icons/tax.svg", t: "Tax Fraud Investigation" },
];

export default function ServicesTax() {
  const [step, setStep] = useState(processSteps[0].key);
  const [ptab, setPtab] = useState(protectTabs[0].key);

  return (
    <main className={s.page}>
      {/* ===== HERO ===== */}
      <header className={s.hero}>
        <div className={`container ${s.heroRow}`}>
          <div className={s.heroCopy}>
            <h1 className={s.h1}>Tax Fraud Investigation</h1>
            <p className={s.lead}>
              Charged with inappropriate taxes or identity misuse? Let’s
              retrieve your money from a taxation fraud.
            </p>
            <a className={s.ctaPrimary} href="/#start">
              Start Recovering
            </a>
          </div>

          <div className={s.heroArt} aria-hidden>
            <img
              className={s.heroImg}
              src="/assets/tax/hero-illustration.png"
              alt=""
            />
            <img className={s.heroBg} src="/assets/tax/hero-bg.png" alt="" />
          </div>
        </div>
        <div className={s.goldLine} />
      </header>

      {/* ===== INTRO ===== */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>
            Tie Up With Proficient Tax Fraud Investigators
          </h2>
          <p className={s.centerMax}>
            We triage quickly, secure evidence, and coordinate with tax
            professionals and off-ramps to stop the damage and pursue recovery.
            You’ll get clear, realistic steps and constant updates.
          </p>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>Our Tax Fraud Recovery Process</h2>

          <div className={s.tabsWrap}>
            <aside
              className={s.tabList}
              role="tablist"
              aria-label="Tax fraud recovery process"
            >
              {processSteps.map((p) => (
                <button
                  key={p.key}
                  role="tab"
                  aria-selected={step === p.key}
                  className={`${s.tabBtn} ${step === p.key ? s.tabActive : ""}`}
                  onClick={() => setStep(p.key)}
                >
                  {p.label}
                </button>
              ))}
            </aside>

            <div className={s.tabPane} role="tabpanel">
              <h3 className={s.paneTitle}>
                {processSteps.find((x) => x.key === step)?.label}
              </h3>
              <p className={s.paneText}>{processText[step]}</p>
              <img className={s.paneImg} src="/assets/tax/process.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROTECT TIPS (left nav) ===== */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>Tips To Protect Against Fraudulent Tax Crime</h2>

          <div className={s.tabsWrap}>
            <aside
              className={s.tabList}
              role="tablist"
              aria-label="Protect against tax fraud"
            >
              {protectTabs.map((t) => (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={ptab === t.key}
                  className={`${s.tabBtn} ${ptab === t.key ? s.tabActive : ""}`}
                  onClick={() => setPtab(t.key)}
                >
                  {t.label}
                </button>
              ))}
            </aside>

            <div className={s.tabPane} role="tabpanel">
              <h3 className={s.paneTitle}>
                {protectTabs.find((x) => x.key === ptab)?.label}
              </h3>
              <p className={s.paneText}>{protectCopy[ptab]}</p>
              <img className={s.paneImg} src="/assets/tax/protect.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== EMERGING FRAUDS ===== */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>Emerging Taxation Frauds</h2>
          <ul className={s.grid2}>
            {emerging.map((x) => (
              <li key={x.t} className={s.card}>
                <h3 className={s.h3}>{x.t}</h3>
                <p className={s.muted}>{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== RED FLAGS ===== */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>
            Red Flags Indicating You’re A Tax Scam Victim
          </h2>
          <ul className={s.bullets}>
            {redFlags.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== CTA STRIP ===== */}
      <section className={s.ctaBand}>
        <div className="container">
          <h3 className={s.bandTitle}>
            Don’t Resist Scams, File For Recovery Instead!
          </h3>
          <a href="/#start" className={s.ctaSecondary}>
            Recover Your Money
          </a>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>FAQ’s About Tax Scam</h2>
          {faq.map((f) => (
            <details key={f.q} className={s.faq}>
              <summary>{f.q}</summary>
              <p className={s.muted}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ===== OUR SERVICES ===== */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>Our Services</h2>
          <ul className={s.servicesGrid}>
            {servicesGrid.map((sItem) => (
              <li key={sItem.t} className={s.serviceCard}>
                <img src={sItem.icon} alt="" className={s.serviceIcon} />
                <p>{sItem.t}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
