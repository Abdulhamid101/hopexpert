// src/pages/services/ServicesRomance.jsx
import React from "react";
import s from "./ServicesRomance.module.css";
import OurServices from "../OurServices/OurServices";

const process = [
  {
    t: "1. Free Recovery Consultation",
    d: "A quick session to collect the key facts while you are still retaining evidence. We explain realistic outcomes and the phases of recovery, then prioritize time-sensitive actions.",
  },
  {
    t: "2. Evidence & Case Pack",
    d: "We assemble your chats, screenshots, receipt trails, payment rails, on-platform activity, and identity artifacts. This forms an escalation-ready file for processors and exchanges.",
  },
  {
    t: "3. Notices & Escalations",
    d: "We notify relevant platforms, issue freeze requests (where applicable), and work the off-ramp playbook. The sooner this starts, the better the odds.",
  },
  {
    t: "4. Recovery of Losses",
    d: "We pursue fund halts/freeze requests, negotiate release, and coordinate with authorities where needed. Many recoveries hinge on speed and quality of evidence.",
  },
];

const watchOut = [
  {
    t: "Catfishing",
    d: "Impersonation with stolen photos, fake jobs, or military personas—combined with love-bombing and requests to move off the app to private chats.",
  },
  {
    t: "Investment Scam",
    d: "After trust is built, victims are pushed to ‘invest’ in fake dashboards or ‘trading apps’ with guaranteed profits. Withdrawals require more deposits.",
  },
  {
    t: "Military Love Scam",
    d: "Fraudsters pose as deployed service members, claiming restricted access and seeking ‘fees’ to get leave or ship valuables. They avoid video calls.",
  },
  {
    t: "Medical Emergency Scam",
    d: "Sudden emergencies (accidents/illness) with urgent requests for wire/crypto ‘treatment fees’. Receipts are doctored and pressure is intense.",
  },
];

const signs = [
  {
    t: "Communication from Strange Sources",
    d: "They insist on moving away from the dating app into private chats; they avoid voice/video and create time pressure to keep you engaged.",
  },
  {
    t: "Flattering Responses & Behavior",
    d: "Very fast intimacy (‘soulmate’ talk), mirroring your interests, and love-bombing—then pivoting to money, crypto, or investment ‘opportunities’.",
  },
  {
    t: "Requesting Sensitive Information",
    d: "They ask for IDs, banking screenshots, seed phrases, or OTPs. Any request for ‘verification’ using codes or crypto is a red flag.",
  },
  {
    t: "In Need of Financial Aid",
    d: "Fees, taxes, customs, or tickets—always urgently needed. If you refuse, guilt and emotional manipulation escalate quickly.",
  },
];

export default function ServicesRomance() {
  return (
    <main className={s.page}>
      {/* ---------- HERO ---------- */}
      <header className={s.hero}>
        <div className={`container ${s.heroRow}`}>
          <div className={s.heroCopy}>
            <h1 className={s.h1}>
              Online Love Turned Into A Fraudulent Nightmare?
            </h1>
            <p className={s.lead}>
              Focus on your heart as we focus on recovering your lost funds.
            </p>
            <a className={s.ctaPrimary} href="/#start">
              Report Your Case
            </a>
          </div>

          <div className={s.heroArt} aria-hidden>
            {/* Swap with your artwork */}
            <img
              className={s.heroImg}
              src="/assets/romance/hero-illustration.png"
              alt=""
            />
            <img
              className={s.heroBg}
              src="/assets/romance/hero-bg.png"
              alt=""
            />
          </div>
        </div>
        <div className={s.goldLine} />
      </header>

      {/* ---------- INTRO ---------- */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>
            Romance Scam Recovery: Undoing Financial Damage
          </h2>
          <p className={s.centerMax}>
            These scams strike at emotion and finances. Our team moves quickly
            to protect your evidence, triage the case, and pursue freezes and
            recovery paths where available. We coordinate with platforms and
            off-ramps to maximize your chance of success.
          </p>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>Our Romance Scam Recovery Process</h2>
          <ul className={s.grid2}>
            {process.map((x) => (
              <li key={x.t} className={s.card}>
                <h3 className={s.h3}>{x.t}</h3>
                <p className={s.muted}>{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- WATCH OUT ---------- */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>Romance Scams To Watch Out For</h2>
          <ul className={s.grid2}>
            {watchOut.map((x) => (
              <li key={x.t} className={s.card}>
                <h3 className={s.h3}>{x.t}</h3>
                <p className={s.muted}>{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- HOW DATING SCAMS OPERATE ---------- */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>Understanding How Dating Scams Operate</h2>
          <div className={s.twoCol}>
            <p className={s.muted}>
              Grooming starts with fast rapport, mirrored interests, and early
              emotional commitments. Scammers isolate targets to private
              channels and build ‘shared plans’ before introducing financial
              pressure: fees, travel costs, or ‘investment opportunities’.
            </p>
            <p className={s.muted}>
              Once money moves, they escalate with fake documents and doctored
              receipts. Blocking, gaslighting, and guilt follow. Preserve all
              evidence and act swiftly—time is crucial for off-ramp escalation.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- SIGNS ---------- */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>Signs You’re Dealing With A Romance Scam</h2>
          <ul className={s.grid2}>
            {signs.map((x) => (
              <li key={x.t} className={s.card}>
                <h3 className={s.h3}>{x.t}</h3>
                <p className={s.muted}>{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- MOVE PROACTIVELY ---------- */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>Move Proactively & Regain Your Funds</h2>
          <p className={s.centerMax}>
            Begin by capturing every detail immediately: chats, IDs, receipts,
            wallet addresses, and dashboard screenshots. We’ll package this into
            a case file and begin notices/freeze requests where applicable.
          </p>
        </div>
      </section>

      {/* ---------- CTA BAND ---------- */}
      <section className={s.ctaBand}>
        <div className="container">
          <h3 className={s.bandTitle}>
            Report The Case And Get Your Stolen Funds Back!
          </h3>
          <a href="/#start" className={s.ctaSecondary}>
            Initiate Recovery
          </a>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>FAQs About Romance Scam</h2>

          <details className={s.faq}>
            <summary>Who are Romance Scam Investigators?</summary>
            <p className={s.muted}>
              Specialists who analyze chats, receipts, payment rails, and
              platform behavior; they coordinate with processors/exchanges and,
              where necessary, enforcement, to escalate freezes and recovery
              attempts.
            </p>
          </details>

          <details className={s.faq}>
            <summary>How Does An Online Dating Scam Work?</summary>
            <p className={s.muted}>
              Grooming → isolation → money request → fake docs → pressure. Avoid
              leaving the platform early; never send money or crypto to someone
              you haven’t met and verified.
            </p>
          </details>

          <details className={s.faq}>
            <summary>How Can I Help A Romance Scammed Person?</summary>
            <p className={s.muted}>
              Preserve their evidence, stop further payments, avoid confronting
              the scammer, and help start a professional case review as soon as
              possible.
            </p>
          </details>

          <details className={s.faq}>
            <summary>
              How Can I Recognize The Red Flags Of A Romance Scammer?
            </summary>
            <p className={s.muted}>
              Rapid intimacy, refusal of video calls, requests for money or
              crypto, ‘emergencies’, and secrecy about basics.
            </p>
          </details>

          <details className={s.faq}>
            <summary>Is It Possible To Trace A Romance Fraud?</summary>
            <p className={s.muted}>
              In many cases, yes—especially when payments touch KYC’d off-ramps
              or marketplaces. Speed and evidence quality are the difference
              makers.
            </p>
          </details>
        </div>
      </section>

      
      <OurServices />
    </main>
  );
}
