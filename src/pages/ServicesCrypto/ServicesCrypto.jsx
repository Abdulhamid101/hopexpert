
import React, { useState } from "react";
import OurServices from "../OurServices/OurServices";
import s from "./ServicesCrypto.module.css";

const tabs = [
  { key: "process", label: "Crypto Recovery Process" },
  { key: "analysis", label: "Analysis And Evaluation" },
  { key: "legal", label: "International Financial Legal Experts" },
  { key: "forensics", label: "Finance Forensics And Cyber Experts" },
  { key: "recovery", label: "Recovery Phase" },
];

const watchScams = [
  {
    t: "Social Media Platform Scam",
    d: "Scammers use social media to reach more people... Be careful and stay aware to protect yourself from these schemes.",
  },
  {
    t: "Ponzi Scheme & Pyramid Schemes",
    d: "Scammers use Ponzi and pyramid schemes to trick people into making money for them... leaving people financially ruined.",
  },
  {
    t: "Non-Fungible Tokens (NFTs)",
    d: "NFTs are unique digital assets... Be careful when dealing with NFTs to avoid these scams.",
  },
  {
    t: "Investment scams",
    d: "Scammers promise quick wealth... Once trapped, victims may lose a lot of money.",
  },
];

const signs = [
  {
    t: "Low-Risk, High-Return Guarantee",
    d: "Each and every business in this world has a certain risk factor associated with it. If someone offers you a business opportunity to invest in the crypto market with very high returns and low associated risk, then you can be sure that the person is a scammer; as the crypto market is highly volatile and has a high associated risk factor.",
  },
  {
    t: "Unrealistic Returns",
    d: "However you invest the capital... the chances of them defaulting and going bankrupt are also very high.",
  },
  {
    t: "Unsolicited Contacts",
    d: "A genuine crypto broker or brokerage firm will ensure that you have sufficient time to analyze and evaluate the business opportunity and make a well-informed decision.",
  },
  {
    t: "The Business Model",
    d: "Scammers impersonating a crypto investor or trader will frequently use financial and crypto jargon to appear as well-seasoned players...",
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

export default function ServicesCrypto() {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <main className={s.page}>
      {/* ---------- HERO ---------- */}
      <header className={s.hero}>
        <div className={`container ${s.heroRow}`}>
          <div className={s.heroCopy}>
            <h1 className={s.h1}>Lost Your Crypto Investments To A Fraud?</h1>
            <p className={s.lead}>
              File a report to Renewed Hope Expert and get your money back.
            </p>
            <a href="/#start" className={s.ctaPrimary}>
              Book a free consultation
            </a>
          </div>

          <div className={s.heroArt} aria-hidden>
            <img
              className={s.heroImg}
              src="/assets/crypto/hero-man.png"
              alt=""
            />
            <img className={s.heroBg} src="/assets/crypto/hero-bg.png" alt="" />
          </div>
        </div>
        <div className={s.goldLine} />
      </header>

      {/* ---------- SPECIALIZED SERVICES (Tabs) ---------- */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>Specialized Services By Our Experts</h2>

          <div className={s.specialTop}>
            <p>
              We work tirelessly to turn things around in a crypto scam. Our
              blockchain experts and proficient legal partners pursue highly
              effective tactics for identifying fraud. With our advancements in
              forensic technology and an in-depth understanding of the crypto
              ecosystem, we’ve located an impressive track record of recoveries.
            </p>
            <p>
              Our primary motto is ensuring maximum recovery of stolen funds,
              thereby restoring peace of mind and confidence among scam victims.
              Come join us in fighting for your scam recovery battle!
            </p>
          </div>

          <div className={s.tabsWrap}>
            <aside
              className={s.tabList}
              role="tablist"
              aria-label="Specialized services"
            >
              {tabs.map((t) => (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={activeTab === t.key}
                  className={`${s.tabBtn} ${
                    activeTab === t.key ? s.tabActive : ""
                  }`}
                  onClick={() => setActiveTab(t.key)}
                >
                  {t.label}
                </button>
              ))}
            </aside>

            <div className={s.tabPane} role="tabpanel">
              <h3 className={s.paneTitle}>
                {tabs.find((x) => x.key === activeTab)?.label}
              </h3>
              <p className={s.paneText}>
                We have experts who use advanced software and hardware, as well
                as financial forensics and international legal advocacy. We
                evaluate your case thoroughly and create a personalized plan
                just for you.
              </p>
              <img
                className={s.paneImg}
                src="/assets/crypto/tab-image.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WATCH-OUT SCAMS ---------- */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>Crypto Scams To Watch Out For</h2>
          <p className={s.centerMax}>
            Cryptocurrency is popular with scammers because its value can change
            quickly. Scammers love these opportunities to make quick money.
          </p>

          <ul className={s.watchGrid}>
            {watchScams.map((x) => (
              <li key={x.t} className={s.watchCard}>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- HOW SCAMMERS OPERATE ---------- */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>How Crypto Scammers Operate</h2>
          <div className={s.twoColText}>
            <p>
              Pretending to be crypto brokers, these scammers offer fake
              services to their victims. They promise fast earnings or huge
              profits on crypto investments. These scammers also entice victims
              by creating fake trading platforms and convincing them into
              investing more and more. When victims try to withdraw their
              earnings, scammers charge huge amounts or claim that this requires
              a new deposit.
            </p>
            <p>
              Not everyone is comfortable with trading and it is always risky.
              Trading in crypto assets can be nerve-wracking and at times,
              nerve-racking. The market, crypto coins or other factors can lose
              you money faster than you can make a commission on each trade.
              Scammers also create the fear factor for their victims, but
              instead of looking out for their victims’ financial interests,
              these scammers trade recklessly.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- SIGNS YOU’VE BEEN SCAMMED ---------- */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>Signs You’ve Been Scammed</h2>
          <p className={s.centerMax}>
            We’ve listed red flags to watch out for when an online artist pulls
            off a crypto trading scam.
          </p>

          <ul className={s.signsGrid}>
            {signs.map((x) => (
              <li key={x.t} className={s.signCard}>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- ACT FAST BAND ---------- */}
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>Act Fast And Recover What’s Yours</h2>
          <p className={s.centerMax}>
            Crypto recovery services are the need of the hour. Additionally,
            there are a lot of con artists that prey on innocent people. As per
            FTC, 690,000 US citizens fell for online scams amounting to $10.2
            billion, and these are just those who reported them. Our team of
            crypto recovery experts specializes in combining software + legal
            process to maximize your chances.
          </p>
        </div>
      </section>

      {/* ---------- CTA BANNER ---------- */}
      <section className={s.ctaBand}>
        <div className="container">
          <h3 className={s.bandTitle}>Recover Access To Your Investments!</h3>
          <a href="/#start" className={s.ctaSecondary}>
            Begin Recovery
          </a>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={s.sectionDark}>
        <div className="container">
          <h2 className={s.h2}>FAQ</h2>
          <details className={s.faq}>
            <summary>How do I avoid a crypto scam?</summary>
            <p>
              Research platforms, never share seed phrases, and double-check
              URLs and identities.
            </p>
          </details>
          <details className={s.faq}>
            <summary>
              When and where can I report a cryptocurrency scam?
            </summary>
            <p>
              Report immediately. Provide TXIDs, screenshots and any exchange
              receipts.
            </p>
          </details>
          <details className={s.faq}>
            <summary>
              Someone sent me cryptocurrency; is it a crypto scam?
            </summary>
            <p>
              Unexpected transfers can be bait. Don’t interact with unknown
              funds or QR requests.
            </p>
          </details>
          <details className={s.faq}>
            <summary>
              Can I recover my losses from a WhatsApp / Facebook scam?
            </summary>
            <p>
              Yes—if funds touch KYC’d exchanges or off-ramps, we can act
              quickly with notices.
            </p>
          </details>
          <details className={s.faq}>
            <summary>Is a Crypto scam recoverable?</summary>
            <p>
              Many are—speed and quality of evidence are the key. Start a free
              case review.
            </p>
          </details>
        </div>
      </section>


     <OurServices/>
    </main>
  );
}
