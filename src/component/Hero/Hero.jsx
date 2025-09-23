import React from "react";
import s from "./Hero.module.css";
import MultiStepForm from "../MultiStepForm/MultiStepForm";

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.grid}>
          <div className={s.left}>
            <div className={s.badge}>No win, no fee • SSL Secure</div>
            <h1 className={s.h1}>
              Recover Your Funds Lost to{" "}
              <span className={s.highlight}>Cyber Fraud</span>
            </h1>
            <p className={s.sub}>
              Elite investigators & legal partners helping victims reclaim
              crypto and card payments. Private. Compliant. Fast.
            </p>

            <ul className={s.points}>
              <li>
                Over <strong>$12M</strong> recovered
              </li>
              <li>7,500+ clients helped</li>
              <li>24/7 case updates</li>
            </ul>

            <div className={s.trust}>
              <span className="kbd">PCI</span>
              <span className="kbd">GDPR</span>
              <span className="kbd">ISO-27001</span>
            </div>
          </div>

          <div className={s.right} id="start" aria-label="Free Case Evaluation">
            <MultiStepForm />
          </div>
        </div>
      </div>

      <div className={s.aura} aria-hidden />
      <div className={s.floating}>
        <div className={s.chip}>BTC</div>
        <div className={s.chip}>ETH</div>
        <div className={s.chip}>USDT</div>
        <div className={s.chip}>VISA</div>
      </div>
    </section>
  );
}
