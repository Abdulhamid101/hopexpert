// src/pages/services/ServicesNft.jsx
import React, { useState } from "react";
import OurServices from "../OurServices/OurServices";
import s from "./ServicesNft.module.css";

// Left-nav → content for “Trending NFT Scams”
const scamTabs = [
  { key: "phishing", label: "Phishing Scams" },
  { key: "smart", label: "Smart Contract Exploits" },
  { key: "counterfeit", label: "Counterfeit NFTs" },
  { key: "airdrop", label: "Airdrops / Give-Away Scams" },
];

const scamsCopy = {
  phishing:
    "Scammers send information messages, DMs, or emails with phishing links to wallets or NFT sites. Victims click the link, connect their wallet, or reveal the seed phrase and lose control of assets. Always verify URLs and sign only what you understand.",
  smart:
    "Fake mint sites or malicious approvals grant unlimited spend. ‘Stealth mints’ or gasless signatures can transfer assets without your intent. Use a fresh wallet for mints and revoke approvals regularly.",
  counterfeit:
    "Fraudsters clone collections with near-identical art/metadata and undercut the floor to bait buyers. Verify contract address from the official site or aggregator—and watch for mismatched creator addresses.",
  airdrop:
    "Links to ‘claim’ free NFTs or tokens can request wallet permissions or seed phrases. Airdrops rarely require DMs or private links—treat them as suspicious by default.",
};

// Recovery Process cards
const process = [
  {
    t: "Vast Knowledge & Experience",
    d: "We combine on-chain forensics, exchange workflows, and legal pathways to maximize recovery odds, acting fast when signal is fresh.",
  },
  {
    t: "Free Case Assessment",
    d: "Quick triage to review facts and evidence. No pressure to commit. You’ll get estimated timelines and next steps before any engagement.",
  },
  {
    t: "Data Collation & Investigations",
    d: "We secure TXIDs, approvals, contract addresses, screenshots, marketplace receipts, and create a case pack for escalations.",
  },
  {
    t: "Advocacy & Recovery",
    d: "We notify marketplaces/exchanges, issue freeze requests where applicable, and coordinate with enforcement partners.",
  },
];

// Signs cards (same copy as your mock, simplified)
const signs = [
  { t: "Vast Knowledge & Experience", d: process[0].d },
  { t: "Free Case Assessment", d: process[1].d },
  { t: "Data Collation & Investigations", d: process[2].d },
  { t: "Advocacy & Recovery", d: process[3].d },
];

export default function ServicesNft() {
  const [active, setActive] = useState("phishing");

  return (
    <main className={s.page}>
      {/* ---------- HERO ---------- */}
      <header className={s.hero}>
        <div className={`container ${s.heroRow}`}>
          <div className={s.heroCopy}>
            <h1 className={s.h1}>Lost Your Crypto Investments To A Fraud?</h1>
            <p className={s.lead}>
              Are you worried about your stolen NFTs? Trust our specialists to
              retrieve your funds.
            </p>
            <a className={s.ctaPrimary} href="/#start">
              Recover Now
            </a>
          </div>

          {/* Swap with your artwork */}
          <div className={s.heroArt} aria-hidden>
            <img
              className={s.heroImg}
              src="/assets/nft/hero-illustration.png"
              alt=""
            />
            <img className={s.heroBg} src="/assets/nft/hero-bg.png" alt="" />
          </div>
        </div>
        <div className={s.goldLine} />
      </header>

      {/* ---------- EXPERTISE INTRO ---------- */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>
            Renewed Hope Expert’s NFT Scam Recovery Expertise
          </h2>
          <div className={s.intro}>
            <p>
              You don’t have to deal with the burden of a financial tragedy on
              your own. Our team works end-to-end on NFT scam recovery—from
              investigation to action—aiming to maximize the chance of
              positively identifying routes for recovery. We support you with a
              clear plan and regular updates.
            </p>
            <p>
              We follow best practices for wallet hygiene and on-chain triage,
              help with notices to marketplaces, and collaborate with relevant
              partners wherever feasible. Start with a free consultation and a
              fast, focused assessment of your case.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- TRENDING NFT SCAMS (tabs) ---------- */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>Trending NFT Scams</h2>
          <p className={s.centerMax}>
            Here are some popular NFT scams people should watch for:
          </p>

          <div className={s.tabsWrap}>
            <aside
              className={s.tabList}
              role="tablist"
              aria-label="Trending NFT Scams"
            >
              {scamTabs.map((t) => (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={active === t.key}
                  className={`${s.tabBtn} ${
                    active === t.key ? s.tabActive : ""
                  }`}
                  onClick={() => setActive(t.key)}
                >
                  {t.label}
                </button>
              ))}
            </aside>

            <div className={s.tabPane} role="tabpanel">
              <h3 className={s.paneTitle}>
                {scamTabs.find((x) => x.key === active)?.label}
              </h3>
              <p className={s.paneText}>{scamsCopy[active]}</p>
              <img
                className={s.paneImg}
                src="/assets/nft/scam-pane.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- NFT RECOVERY PROCESS ---------- */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>NFT Scam Recovery Process</h2>
          <p className={s.centerMax}>
            A methodical strategy to retrieve your digital assets.
          </p>

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

      {/* ---------- UNDERSTANDING SECTION ---------- */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>Understanding The Working Of NFT Scams</h2>
          <div className={s.twoCol}>
            <p className={s.muted}>
              Scammers trick crypto users by promoting fake NFTs, phishing for
              approvals, or deploying malicious contracts. They exploit urgency,
              false scarcity, or fake social proof. Always verify contract
              addresses from official sources and use cold wallets for storage.
            </p>
            <p className={s.muted}>
              An NFT is a token on a blockchain that maps to an asset. Once an
              approval grants spend to a malicious contract, assets can be
              moved. Quick response—revoking approvals and notifying
              marketplaces—can make the difference.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- SIGNS YOU’RE DEALING WITH AN NFT SCAM ---------- */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>Signs You’re Dealing With An NFT Scam</h2>
          <p className={s.centerMax}>Here are a few signs to watch for.</p>

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

      {/* ---------- TRUST/INSTINCTS SECTION ---------- */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>
            Trust Your Instincts & Initiate NFT Retrieval!
          </h2>
          <p className={s.centerMax}>
            Even if the blockchain is irreversible, there are decisive steps to
            escalate and improve your chances. Start with a free consultation to
            understand timelines, cooperation points, and next steps.
          </p>
        </div>
      </section>

      {/* ---------- CTA BAND ---------- */}
      <section className={s.ctaBand}>
        <div className="container">
          <h3 className={s.bandTitle}>Regain The NFTs That Belong To You!</h3>
          <a href="/#start" className={s.ctaSecondary}>
            Seek Recovery
          </a>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>FAQ’s</h2>

          <details className={s.faq}>
            <summary>What are NFT Marketplaces?</summary>
            <p className={s.muted}>
              Platforms to mint, list, and trade NFTs. Always verify official
              contract addresses and avoid DM links.
            </p>
          </details>

          <details className={s.faq}>
            <summary>How do NFT Scams work on social media platforms?</summary>
            <p className={s.muted}>
              Impersonation + phishing links in DMs/comments. Never connect your
              wallet from non-official links.
            </p>
          </details>

          <details className={s.faq}>
            <summary>How to avoid fake NFTs?</summary>
            <p className={s.muted}>
              Verify the contract on the project’s official site/discord;
              compare creator addresses; beware of too-good-to-be-true listings.
            </p>
          </details>

          <details className={s.faq}>
            <summary>How do I report NFT fraud?</summary>
            <p className={s.muted}>
              Collect TXIDs, approvals, screenshots, domain/DM evidence. Start a
              free case review so we can act quickly.
            </p>
          </details>
        </div>
      </section>

     <OurServices />
    </main>
  );
}
