import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import s from "./About.module.css";
import image1 from "../../assets/aboutimg1.jpg";
import image2 from "../../assets/aboutimg2.jpeg";
import image3 from "../../assets/aboutimg3.jpg";

const TEAM = [
  {
    name: "Jane Bright",
    role: "Head, Investigations",
    bio: "Blockchain tracing, exchange escalations, case orchestration.",
    img: image1,
  },
  {
    name: "Charles Roylse",
    role: "Client Operations",
    bio: "Intake, documentation, and client guidance through recovery.",
    img: image2,
  },
  {
    name: "Partner Counsel",
    role: "Legal Network",
    bio: "Cross-border freezes, platform demands, filings as needed.",
    img: image3,
  },
];

export default function About() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className={s.shell}>
      <section className={s.hero}>
        <div className="container">
          <p className={s.kicker}>
            About Recover<span className={s.gold}>My</span>Funds
          </p>
          <h1>Real people. Real recoveries. Real results.</h1>
          <p className={s.sub}>
            We help victims of online scams and crypto theft...
          </p>
          <div className={s.heroCtas}>
            <a className={s.primary} href="/#start">
              Free Case Review
            </a>
            <a className={s.ghost} href="/">
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <section className={s.stats}>
        <div className="container">
          <ul className={s.statGrid}>
            <li className={s.statCard}>
              <span className={s.num}>$12.8M+</span>
              <span className={s.label}>Assets Traced</span>
            </li>
            <li className={s.statCard}>
              <span className={s.num}>74 Countries</span>
              <span className={s.label}>Global Reach</span>
            </li>
            <li className={s.statCard}>
              <span className={s.num}>4.9/5</span>
              <span className={s.label}>Client Rating</span>
            </li>
            <li className={s.statCard}>
              <span className={s.num}>72 hrs</span>
              <span className={s.label}>Avg. Case Kickoff</span>
            </li>
          </ul>
          <p className={s.disclaimer}>
            *Figures are illustrative demo data for layout.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className={s.story}>
        <div className="container">
          <div className={s.split}>
            <div>
              <h2 className={s.h2}>Our story</h2>
              <p>We started after seeing friends lose life savings...</p>
              <p>Today, our team partners with blockchain analytics...</p>
            </div>
            <div className={s.card}>
              <h3>What we do (in plain English)</h3>
              <ul className={s.checks}>
                <li>Trace funds across chains and mixers</li>
                <li>Prepare evidence packs...</li>
                <li>Coordinate takedowns, freezes...</li>
                <li>Keep you updated with clear timelines...</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={s.values}>
        <div className="container">
          <h2 className={s.h2}>Our values</h2>
          <div className={s.grid3}>
            <div className={s.valueCard}>
              <h3>Evidence First</h3>
              <p>Every claim is backed by verifiable signals.</p>
            </div>
            <div className={s.valueCard}>
              <h3>Radical Clarity</h3>
              <p>No vague promises. You see the plan and progress.</p>
            </div>
            <div className={s.valueCard}>
              <h3>Client Safety</h3>
              <p>Your privacy and security come first.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={s.team}>
        <div className="container">
          <h2>Leadership</h2>
          <div className={s.grid3}>
            {TEAM.map((m) => (
              <article key={m.name} className={s.person}>
                <img
                  className={s.avatarImg}
                  src={m.img}
                  alt={`${m.name} — ${m.role}`}
                  loading="lazy"
                />
                <h3>{m.name}</h3>
                <p className={s.role}>{m.role}</p>
                <p>{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={s.timeline}>
        <div className="container">
          <h2 className={s.h2}>How we got here</h2>
          <ol className={s.line}>
            <li>
              <span>2022</span> Prototype tracing workflow...
            </li>
            <li>
              <span>2023</span> Partnerships with analytics vendors...
            </li>
            <li>
              <span>2024</span> Case ops tooling...
            </li>
            <li>
              <span>2025</span> Expanded multi-chain coverage...
            </li>
          </ol>
        </div>
      </section>

      {/* FAQs */}
      <section className={s.faqs}>
        <div className="container">
          <h2 className={s.h2}>Frequently asked</h2>
          <details>
            <summary>Do you charge upfront fees?</summary>
            <p>Depends on case complexity...</p>
          </details>
          <details>
            <summary>Can you guarantee fund recovery?</summary>
            <p>No one can. We commit to transparency.</p>
          </details>
          <details>
            <summary>How long does a case take?</summary>
            <p>Weeks to months depending on scope.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className={s.cta}>
        <div className="container">
          <h2 className={s.h2}>Think you have a case?</h2>
          <p className={s.sub}>
            Start with a no-cost review. We’ll outline viable next steps.
          </p>
          <a className={s.primary} href="/#start">
            Start Free Case Review
          </a>
        </div>
      </section>
    </main>
  );
}
