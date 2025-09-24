import React from "react";
import OurServices from "../OurServices/OurServices";
import s from "./ServicesPonzi.module.css";

const watchOut = [
  {
    t: "Consistent or High Returns",
    d: "If a scheme assures abnormal high returns at a consistent rate, that inconsistency with market risk is the hallmark of trouble. Legit operations disclose volatility.",
  },
  {
    t: "Illegitimate Operations",
    d: "Unregistered investments, vague legal structure, or no credible custodian/exchange footprint. If transparency is missing, walk away.",
  },
  {
    t: "Complex Strategies",
    d: "Overly complex ‘quant’ strategies with no independent audit; pressure to ‘roll profits’ forward. Genuine funds explain risk clearly.",
  },
  {
    t: "Investment scams",
    d: "Fake dashboards, restricted withdrawals, and demands for ‘tax/fees’ before withdrawals. Once trapped, victims may lose large sums.",
  },
];

const fraudTypes = [
  {
    t: "Wire Fraud",
    d: "Transferring victim funds under false pretenses, often via offshore wallets or shell accounts. Evidence includes TXIDs, bank receipts, chat logs.",
  },
  {
    t: "Money Laundering",
    d: "Layering/structuring to obfuscate flow of funds through multiple mixers/exchanges; requires time-sensitive escalation to off-ramps.",
  },
  {
    t: "Mail Fraud",
    d: "Paper contracts or mailed disclaimers used to mislead investors; preserve envelopes, signatures, and timestamps.",
  },
  {
    t: "Investment Advisory Fraud",
    d: "Unlicensed advice, mis-selling, or undisclosed conflicts. Verify licenses and Form ADV (where applicable).",
  },
];

const avoidList = [
  "Unusually High Returns with Low or No Risk claims.",
  "Ambiguous, inconsistent statements; fake high-return graphics on dashboards.",
  "Unregistered offerings or no independent audits/custody.",
  "Pressure to deposit more to ‘unlock’ withdrawals or bonuses.",
  "Vague or hidden fees/taxes demanded before releasing funds.",
  "No third-party escrow / bypasses common compliance steps.",
];

export default function ServicesPonzi() {
  return (
    <main className={s.page}>
      {/* HERO */}
      <header className={s.hero}>
        <div className={`container ${s.heroRow}`}>
          <div className={s.heroCopy}>
            <h1 className={s.h1}>Ponzi Schemes</h1>
            <p className={s.lead}>
              Schemes promising easy money & rapid gains are confidence tricks.
            </p>
            <a className={s.ctaPrimary} href="/#start">
              Free Recovery Consultation
            </a>
          </div>

          <div className={s.heroArt} aria-hidden>
            <img
              className={s.heroImg}
              src="/assets/ponzi/hero-illustration.png"
              alt=""
            />
            <img className={s.heroBg} src="/assets/ponzi/hero-bg.png" alt="" />
          </div>
        </div>
        <div className={s.goldLine} />
      </header>

      {/* CRAFTING RECOVERY STORIES */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>Crafting Successful Recovery Stories</h2>
          <div className={s.intro}>
            <p>
              Spotting a Ponzi scheme can be difficult. Our specialized team
              blends on-chain forensics with off-ramp workflows to aggressively
              pursue freezes and recoveries where feasible. We compile a
              frictionless narrative for your case and guide you each step.
            </p>
            <p>
              Our investigations also drive essential awareness, making such
              schemes identifiable. If you’ve recently lost funds, connect with
              us—your successful recovery story can start today.
            </p>
          </div>
        </div>
      </section>

      {/* HOW PONZI SCHEMES UNVEIL */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>Discovering How Ponzi Schemes Unveil</h2>
          <p className={s.centerMax}>
            Ponzi structures rely on inflow from new victims to pay earlier
            ones. When inflow slows, the dashboard fails: withdrawals freeze,
            fees/taxes appear, and pressure increases to add ‘just a bit more’.
          </p>
        </div>
      </section>

      {/* SECURELY RETRIEVE YOUR FUNDS */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>Securely Retrieve Your Lost Funds!</h2>
          <p className={s.centerMax}>
            Preserve evidence (receipts, TXIDs, emails, chats, dashboard
            screenshots). The faster you act, the better our chance to request
            freezes at off-ramps and marketplaces.
          </p>
        </div>
      </section>

      {/* WATCH OUT CARDS */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>Crypto Scams To Watch Out For</h2>
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

      {/* HOW CRYPTO SCAMMERS OPERATE (TABLE STYLE) */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>How Crypto Scammers Operate</h2>
          <div className={s.tableish}>
            {fraudTypes.map((f) => (
              <div key={f.t} className={s.row}>
                <div className={s.rowHead}>{f.t}</div>
                <div className={s.rowBody}>{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO AVOID */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>How To Avoid Ponzi Schemes</h2>
          <ul className={s.bullets}>
            {avoidList.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>FAQ</h2>

          <details className={s.faq}>
            <summary>Are Ponzi schemes and pyramid schemes the same?</summary>
            <p className={s.muted}>
              Related but not identical. Both rely on new inflow; pyramid
              schemes require recruiting. In both, promised certainty/returns
              are red flags.
            </p>
          </details>

          <details className={s.faq}>
            <summary>How do I safeguard myself against Ponzi fraud?</summary>
            <p className={s.muted}>
              Verify licenses, avoid guaranteed returns, distrust pressure to
              deposit more, and use independent custody.
            </p>
          </details>

          <details className={s.faq}>
            <summary>What are the red flags of a Ponzi scam?</summary>
            <p className={s.muted}>
              Unrealistic steady profits, restricted withdrawals, hidden
              ‘fees/taxes’, and secrecy around operations.
            </p>
          </details>

          <details className={s.faq}>
            <summary>How long does a Ponzi scheme investigation take?</summary>
            <p className={s.muted}>
              Depends on evidence & off-ramp responses. Acting quickly
              dramatically improves outcomes.
            </p>
          </details>
        </div>
      </section>

      {/* CTA BAND */}
      <section className={s.ctaBand}>
        <div className="container">
          <h3 className={s.bandTitle}>
            Defend Yourself Against Schemers And Regain Your Money
          </h3>
          <a href="/#start" className={s.ctaSecondary}>
            Report The Scam
          </a>
        </div>
      </section>

        <OurServices />
    </main>
  );
}
