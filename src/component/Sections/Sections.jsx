import React from "react";
import s from "./Sections.module.css";

export default function Sections() {
  return (
    <>
      <section className="section" id="how">
        <div className="container">
          <h2 className={s.h2}>How It Works</h2>
          <div className={s.three}>
            <Card
              title="1) Submit Your Case"
              text="Share what happened in 2 minutes. Our system scores recoverability instantly."
              badge="Free"
            />
            <Card
              title="2) Trace & Engage"
              text="We analyze on-chain/transaction paths and contact entities, exchanges or banks."
              badge="Fast"
            />
            <Card
              title="3) Recover"
              text="Legal partners and dispute teams push for refunds, chargebacks, or asset freezes."
              badge="Secure"
            />
          </div>
        </div>
      </section>

      <section className={`${s.alt} section`} id="why">
        <div className="container">
          <h2 className={s.h2}>Why Clients Choose Us</h2>
          <ul className={s.grid2}>
            <li>
              <strong>No Win, No Fee</strong>
              <span>— success-based pricing</span>
            </li>
            <li>
              <strong>Licensed Network</strong>
              <span>— legal & compliance partners</span>
            </li>
            <li>
              <strong>Real-Time Updates</strong>
              <span>— portal + email alerts</span>
            </li>
            <li>
              <strong>Bank & Exchange Expertise</strong>
              <span>— we speak their language</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="container">
          <h2 className={s.h2}>What Clients Say</h2>
          <div className={s.reviews}>
            <Review
              name="Amina O."
              text="I recovered my USDT in 10 days. Excellent communication."
            />
            <Review
              name="Daniel M."
              text="They handled my chargeback end-to-end. Stress-free."
            />
            <Review
              name="Sophia K."
              text="Professional, detailed, and honest about timelines."
            />
          </div>
        </div>
      </section>

      <section className={`${s.alt} section`} id="faq">
        <div className="container">
          <h2 className={s.h2}>Frequently Asked Questions</h2>
          <details className={s.faq}>
            <summary>Do you guarantee recovery?</summary>
            <p>
              No one can guarantee it. We only take viable cases and work on
              success-based models when possible.
            </p>
          </details>
          <details className={s.faq}>
            <summary>How long does it take?</summary>
            <p>
              Simple card disputes can complete in weeks; complex crypto tracing
              may take longer depending on jurisdictions.
            </p>
          </details>
          <details className={s.faq}>
            <summary>Is my data safe?</summary>
            <p>
              Yes. We follow strict privacy, encryption in transit/at rest, and
              least-privilege access.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}

function Card({ title, text, badge }) {
  return (
    <div className={`${s.card} shadow-xl`}>
      <div className={s.badge}>{badge}</div>
      <h3 className={s.h3}>{title}</h3>
      <p className={s.p}>{text}</p>
    </div>
  );
}

function Review({ name, text }) {
  return (
    <div className={s.rev}>
      <div className={s.stars} aria-label="5 stars">
        ★★★★★
      </div>
      <p className={s.revtext}>"{text}"</p>
      <div className={s.revname}>— {name}</div>
    </div>
  );
}
