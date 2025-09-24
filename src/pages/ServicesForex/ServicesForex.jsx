// src/pages/services/ServicesForex.jsx
import React, { useState } from "react";
import s from "./ServicesForex.module.css";

// ----- DATA -----
const processTabs = [
  { key: "investigation", label: "Forex Scam Investigation" },
  { key: "recovery", label: "Recovery Consultation" },
  { key: "refund", label: "Recovery" },
  { key: "tracing", label: "Fund Tracing" },
];

const spotScams = [
  {
    t: "Social Media Platform Scam",
    d: "Scammers use social media to reach more people, tricking them through platforms like Facebook, Instagram, WhatsApp, Telegram, Twitter, and Tinder. They lure with fake profits and social proof, influencing victims to ‘top up’ losses and join pump-and-dump schemes.",
  },
  {
    t: "Ponzi Scheme & Pyramid Schemes",
    d: "Fraudsters promise guaranteed profits by recruiting others rather than real trading. Funds from newcomers pay earlier ‘investors’. When inflow slows, the scheme collapses, leaving victims with heavy financial loss.",
  },
  {
    t: "Non-Fungible Tokens (NFTs)",
    d: "NFT-themed Forex plays are rising — fake drops, spoofed marketplaces, and phishing will drain wallets quickly. Be cautious with offers and verify official sources.",
  },
  {
    t: "Investment scams",
    d: "Promises of quick, risk-free wealth are classic red flags. Victims are urged to deposit more to ‘unlock withdrawals’ on fabricated dashboards.",
  },
];

const tips = [
  {
    t: "Unsolicited Offers",
    d: "If you receive an unexpected call/text about a Forex business, be cautious. Verify the company, regulator, and jurisdiction before acting. Legitimate brokers don’t pressure for instant deposits.",
  },
  {
    t: "No Risk Involved",
    d: "Every business has risk. ‘Guaranteed returns’ or ‘no risk’ claims are hallmarks of scams. Always expect market volatility and never trust fixed daily profit promises.",
  },
  {
    t: "Unrealistic Returns",
    d: "If someone offers unrealistic daily/weekly returns on a Forex business opportunity, it’s likely a scam. Compare claims to regulated market norms and disclosures.",
  },
  {
    t: "Confusing Terms and Conditions",
    d: "Hidden clauses restrict withdrawals or add ‘taxes/fees’ to block you. If the terms sound contradictory, consult a legal/finance professional.",
  },
];

export default function ServicesForex() {
  const [tab, setTab] = useState(processTabs[1].key); // default to ‘Recovery Consultation’

  return (
    <main className={s.page}>
      {/* ---------- HERO ---------- */}
      <header className={s.hero}>
        <div className={`container ${s.heroRow}`}>
          <div className={s.heroCopy}>
            <h1 className={s.h1}>Fell Victim To A Fake Forex Broker?</h1>
            <p className={s.lead}>
              Let our forensics experts help recover your investments!
            </p>
            <a className={s.ctaPrimary} href="/#start">
              Book a free consultation
            </a>
          </div>

          {/* Replace images with your assets */}
          <div className={s.heroArt} aria-hidden>
            <img
              className={s.heroImg}
              src="/assets/forex/hero-illustration.png"
              alt=""
            />
            <img className={s.heroBg} src="/assets/forex/hero-bg.png" alt="" />
          </div>
        </div>
        <div className={s.goldLine} />
      </header>

      {/* ---------- INTRO ---------- */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>Our Expertise In Forex Scam Recovery</h2>
          <div className={s.intro}>
            <p>
              The Forex market is large and volatile, making it a prime target
              for scams. Our trained professionals and skilled investigators
              have handled thousands of cases with great results. Although you
              cannot get money lost to a scam 100% guaranteed, we make the
              process as smooth as possible and maximize your chances with rapid
              action.
            </p>
            <p>
              We combine years of experience to unmask platforms, trace funds,
              and coordinate with relevant parties. With you at every step, we
              design your recovery plan with clarity and confidence—one phone
              call away.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- PROCESS TABS ---------- */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>Forex Scam Recovery Process</h2>

          <div className={s.tabsWrap}>
            <aside
              className={s.tabList}
              role="tablist"
              aria-label="Forex recovery process"
            >
              {processTabs.map((p) => (
                <button
                  key={p.key}
                  role="tab"
                  aria-selected={tab === p.key}
                  className={`${s.tabBtn} ${tab === p.key ? s.tabActive : ""}`}
                  onClick={() => setTab(p.key)}
                >
                  {p.label}
                </button>
              ))}
            </aside>

            <div className={s.tabPane} role="tabpanel">
              <div>
                <h3 className={s.paneTitle}>
                  {processTabs.find((x) => x.key === tab)?.label || ""}
                </h3>
                <p className={s.paneText}>
                  Our Forex recovery specialists will gather all details of the
                  scam, secure on-platform evidence, and build a strong case. We
                  coordinate with exchanges, payment processors, and relevant
                  authorities to escalate freezes and recoveries wherever
                  feasible.
                </p>
              </div>
              <img
                className={s.paneImg}
                src="/assets/forex/process-visual.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SPOT TRENDING FOREX SCAMS ---------- */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>Spot Trending Forex Scams</h2>
          <ul className={s.grid2}>
            {spotScams.map((x) => (
              <li key={x.t} className={s.card}>
                <h3 className={s.h3}>{x.t}</h3>
                <p className={s.muted}>{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- HOW FAKE FX BROKERS FUNCTION ---------- */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>How Fake FX Brokers Function</h2>
          <div className={s.twoCol}>
            <p className={s.muted}>
              As a global market with many opportunities, it is hard to spot
              right or wrong incentives. Fake FX brokers operate under
              ‘influencer’ networks, create flashy dashboards, and push you to
              deposit more to ‘unlock’ withdrawals. They often block accounts
              once you try to exit or question results.
            </p>
            <p className={s.muted}>
              Recovery involves strong evidence, timely notices, and expert
              escalation paths. The sooner you act after discovering the fraud,
              the higher the chance of successful recovery.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- TIPS TO SAFEGUARD ---------- */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>Tips To Safeguard Against Forex Scammers</h2>
          <ul className={s.grid2}>
            {tips.map((x) => (
              <li key={x.t} className={s.card}>
                <h3 className={s.h3}>{x.t}</h3>
                <p className={s.muted}>{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- CTA BAND ---------- */}
      <section className={s.ctaBand}>
        <div className="container">
          <h3 className={s.bandTitle}>Recover Access To Your Investments!</h3>
          <a href="/#start" className={s.ctaSecondary}>
            Report Your Case
          </a>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>FAQ</h2>

          <details className={s.faq}>
            <summary>
              What to do if you have been scammed by a Forex broker?
            </summary>
            <p className={s.muted}>
              Contact us immediately. Preserve all records (TXIDs, receipts,
              chats). We’ll review, advise, and begin action to maximize
              recovery.
            </p>
          </details>

          <details className={s.faq}>
            <summary>How to catch a Forex scammer?</summary>
            <p className={s.muted}>
              Act quickly with transaction records and platform data. We
              coordinate with exchanges and, where applicable, law enforcement.
            </p>
          </details>

          <details className={s.faq}>
            <summary>
              Will I get my money back from a Forex trading scam?
            </summary>
            <p className={s.muted}>
              It depends on timing and cooperation from off-ramps. The sooner we
              act and the stronger the evidence, the higher the chances.
            </p>
          </details>

          <details className={s.faq}>
            <summary>What evidence can prove Forex fraud?</summary>
            <p className={s.muted}>
              Transaction receipts, platform dashboards, email headers, domain
              info, chat logs, and any KYC documents you submitted.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
