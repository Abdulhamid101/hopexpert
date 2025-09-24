// src/pages/services/ServicesInternet.jsx
import React, { useState } from "react";
import OurServices from "../OurServices/OurServices";
import s from "./ServicesInternet.module.css";

const leftTabs = [
  { key: "charity", label: "Fake Charity And Disaster Relief Scams" },
  { key: "jobs", label: "Job Opportunity Scams" },
  { key: "shopping", label: "Online Shopping Scams" },
];

const leftCopy = {
  charity:
    "Fraudsters exploit disasters and goodwill with cloned donation pages, spoofed emails, and social DMs. They rush victims to ‘act now’ using crypto or gift cards. Verify charity registrations and donate via official domains only.",
  jobs: "Fake recruiters offer remote roles, ‘starter kits’, or check-cashing gigs. They collect IDs, request ‘equipment fees,’ or send counterfeit checks. Never pay to get a job; verify the company and recruiter on official channels.",
  shopping:
    "Bait sites mimic real stores with impossible discounts and no returns. Red flags: brand-new domains, no physical address, vague policies, and only crypto/wire payments. Use reputable marketplaces and buyer protection.",
};

const victimSigns = [
  {
    t: "Shared Sensitive Information",
    d: "You recently shared IDs, OTPs, wallet seed phrases, or banking screenshots—often after being pressured to ‘verify your identity’.",
  },
  {
    t: "Security Breach",
    d: "Account reuse of passwords, strange logins, or new devices. Set up strong, unique passwords and enable multi-factor authentication.",
  },
  {
    t: "Unknown Links & Attachments",
    d: "You clicked links or opened files from strangers or on urgent messages. Always verify senders and scan links before interacting.",
  },
  {
    t: "Accepted a Fake Job?",
    d: "You paid for ‘training/equipment’ or handled money for someone else. Stop activity, preserve evidence, and get a review immediately.",
  },
];

const scammedSigns = [
  {
    t: "Low-Risk, High-Return Guarantee",
    d: "If someone offers guaranteed high returns or ‘risk-free’ profits, it’s a near-certain scam. Real markets involve risk and volatility.",
  },
  {
    t: "Unrealistic Returns",
    d: "If they boast constant profits while others lose money, it’s manipulation. Beware fake dashboards and cherry-picked screenshots.",
  },
  {
    t: "Unsolicited Contacts",
    d: "Cold calls/DMs pressuring you to invest or buy quickly. Take time to verify. Legit businesses don’t force decisions.",
  },
  {
    t: "The Business Model",
    d: "If their model is secret or unclear, profits likely come from new deposits (Ponzi-style), not real economics.",
  },
];

const faq = [
  {
    q: "What are the common online scams?",
    a: "Investment ‘trading’ dashboards, job-opportunity scams, clone shopping sites, romance/inheritance scams, fake support pop-ups, and phishing.",
  },
  {
    q: "How do I recover my money after being scammed online?",
    a: "Preserve evidence (TXIDs, receipts, chats, emails), stop further payments, change passwords, and start a professional case review quickly.",
  },
  {
    q: "How should I report an online scammer?",
    a: "Collect all artifacts and report through official portals (bank, processor, marketplace). We’ll package a case to escalate freezes where possible.",
  },
];

export default function ServicesInternet() {
  const [tab, setTab] = useState(leftTabs[0].key);

  return (
    <main className={s.page}>
      {/* ===== HERO ===== */}
      <header className={s.hero}>
        <div className={`container ${s.heroRow}`}>
          <div className={s.heroCopy}>
            <h1 className={s.h1}>Lost Your Crypto Investments To A Fraud?</h1>
            <p className={s.lead}>
              File a report to Renewed Hope Expert and get your money back.
            </p>
            <a className={s.ctaPrimary} href="/#start">
              Book a free consultation
            </a>
          </div>
          <div className={s.heroArt} aria-hidden>
            {/* Swap with your artwork */}
            <img
              className={s.heroImg}
              src="/assets/internet/hero-illustration.png"
              alt=""
            />
            <img
              className={s.heroBg}
              src="/assets/internet/hero-bg.png"
              alt=""
            />
          </div>
        </div>
        <div className={s.goldLine} />
      </header>

      {/* ===== MASTERY ===== */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>Mastering Online Scam Retrieval</h2>
          <p className={s.centerMax}>
            Internet scams move fast—so do we. We secure your evidence, triage
            with a clear recovery plan, and coordinate with relevant platforms
            and off-ramps to freeze funds where feasible.
          </p>
        </div>
      </section>

      {/* ===== FASTEST-GROWING INTERNET FRAUDS (left nav) ===== */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>Fastest-Growing Internet Frauds</h2>
          <p className={s.centerMax}>
            Below are the major online scams that have cost billions of dollars.
          </p>

          <div className={s.tabsWrap}>
            <aside
              className={s.tabList}
              role="tablist"
              aria-label="Internet fraud types"
            >
              {leftTabs.map((t) => (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={tab === t.key}
                  className={`${s.tabBtn} ${tab === t.key ? s.tabActive : ""}`}
                  onClick={() => setTab(t.key)}
                >
                  {t.label}
                </button>
              ))}
            </aside>

            <div className={s.tabPane} role="tabpanel">
              <h3 className={s.paneTitle}>
                {leftTabs.find((x) => x.key === tab)?.label}
              </h3>
              <p className={s.paneText}>{leftCopy[tab]}</p>
              <img
                className={s.paneImg}
                src="/assets/internet/fraud-pane.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW AN INTERNET SCAM WORKS ===== */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>The Working Of An Internet Scam</h2>
          <div className={s.twoCol}>
            <p className={s.muted}>
              Scammers build urgency and trust with social proofs, fake
              profiles, and doctored receipts. They push victims to private
              chats and unprotected payments. After funds move, they escalate
              with fees, taxes, and ‘unlock’ charges—all stalling tactics.
            </p>
            <p className={s.muted}>
              Prevention starts with verification: inspect domains, check
              registrations, avoid reused passwords, and never share OTPs or
              seed phrases. If defrauded, act quickly—successful freezes often
              rely on speed.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SIGNS YOU’RE AN ONLINE SCAM VICTIM ===== */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>Signs You’re An Online Scam Victim</h2>
          <ul className={s.grid2}>
            {victimSigns.map((x) => (
              <li key={x.t} className={s.card}>
                <h3 className={s.h3}>{x.t}</h3>
                <p className={s.muted}>{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== SIGNS YOU’VE BEEN SCAMMED ===== */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>Signs You’ve Been Scammed</h2>
          <ul className={s.grid2}>
            {scammedSigns.map((x) => (
              <li key={x.t} className={s.card}>
                <h3 className={s.h3}>{x.t}</h3>
                <p className={s.muted}>{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== REPORT WHILE IT ISN’T TOO LATE ===== */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>Report While It Isn’t Too Late</h2>
          <p className={s.centerMax}>
            Recovery is most effective when evidence is fresh. Start a free case
            review so we can triage your situation, secure accounts, and pursue
            freezes and recovery pathways where available.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>FAQ</h2>
          {faq.map((f) => (
            <details key={f.q} className={s.faq}>
              <summary>{f.q}</summary>
              <p className={s.muted}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ===== CTA STRIP ===== */}
      <section className={s.ctaBand}>
        <div className="container">
          <h3 className={s.bandTitle}>Secure Your Investments Today!</h3>
          <a href="/#start" className={s.ctaSecondary}>
            Report Your Case
          </a>
        </div>
      </section>

          <OurServices />
    </main>
  );
}
