import React, { useState, useMemo } from "react";
import s from "./ServicesTabs.module.css";

/** You can edit or extend these items freely */
const ITEMS = [
  {
    key: "crypto",
    title: "Crypto Scam Recovery",
    heading: "Crypto Recovery Process",
    body: [
      "We trace on-chain flows across BTC, ETH, and major networks, correlating exchange hops and mixers. Evidence packets are prepared for compliant takedown, KYC requests, and asset-freeze actions.",
      "You’ll receive a clear plan that may include exchange notices, law-enforcement referrals, and card/ACH dispute options if fiat ramps were involved.",
    ],
    imageLabel: "BTC",
  },
  {
    key: "forex",
    title: "Forex Scam Recovery",
    heading: "Forex/Broker Dispute Strategy",
    body: [
      "We examine broker licensing, payment rails, and platform logs to prove misrepresentation or unfair execution practices.",
      "Chargeback narratives and regulatory complaints are drafted to maximize leverage for recovery.",
    ],
    imageLabel: "FX",
  },
  {
    key: "nft",
    title: "NFT Scheme Recovery",
    heading: "NFT & Web3 Claim Support",
    body: [
      "We review mint/airdrop histories, marketplace trails, and phishing vectors. Stolen assets are flagged; venues are notified with evidence.",
      "Where possible, we coordinate with custodial wallets and compliance teams to freeze or claw back items.",
    ],
    imageLabel: "NFT",
  },
  {
    key: "ponzi",
    title: "Ponzi Scheme Recovery",
    heading: "High-Yield & Ponzi Tracing",
    body: [
      "We reconstruct fund flows, identify promoters and payment processors, and file coordinated complaints to halt operations and recover funds.",
      "Victim group coordination improves leverage and speeds outcomes.",
    ],
    imageLabel: "HYIP",
  },
  {
    key: "romance",
    title: "Romance Scam Recovery",
    heading: "Romance Scam Evidence & Recovery",
    body: [
      "Message histories and payment receipts are organized into a persuasive narrative for banks and exchanges.",
      "We protect victim privacy while pushing formal requests that can lead to refunds or account seizures.",
    ],
    imageLabel: "❤️",
  },
  {
    key: "tax",
    title: "Tax Fraud Investigation",
    heading: "Tax / Refund Fraud Support",
    body: [
      "We liaise with banks, processors, and relevant authorities to present admissible evidence of fraud.",
      "Our investigators prepare filings that accelerate responses and reduce back-and-forth.",
    ],
    imageLabel: "TAX",
  },
];

export default function ServicesTabs() {
  const [active, setActive] = useState(ITEMS[0].key);
  const index = useMemo(() => ITEMS.findIndex(i => i.key === active), [active]);
  const item = ITEMS[index];

  return (
    <section className={s.wrap} id="services" aria-labelledby="svc-title">
      <div className="container">
        <h2 className={s.h2} id="svc-title">Specialized Services By Our Experts</h2>

        <div className={s.grid}>
          {/* Left: vertical tabs */}
          <div className={s.tabs} role="tablist" aria-orientation="vertical">
            <div className={s.rail} style={{ transform: `translateY(${index * 56}px)` }} aria-hidden />
            {ITEMS.map((it) => (
              <button
                key={it.key}
                role="tab"
                aria-selected={active === it.key}
                className={`${s.tab} ${active === it.key ? s.on : ""}`}
                onClick={() => setActive(it.key)}
              >
                {it.title}
              </button>
            ))}
          </div>

          {/* Right: content */}
          <article className={s.panel} role="tabpanel">
            <div className={s.text}>
              <h3 className={s.heading}>{item.heading}</h3>
              {item.body.map((p, i) => (
                <p key={i} className={s.p}>{p}</p>
              ))}
            </div>

            <figure className={s.figure} aria-label={`${item.title} illustration`}>
              <div className={s.illustra}>
                <div className={s.badge}>{item.imageLabel}</div>
              </div>
            </figure>
          </article>
        </div>
      </div>
    </section>
  );
}
