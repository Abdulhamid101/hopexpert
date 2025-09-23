import React from "react";
import s from "./WhyUs.module.css";

export default function WhyUs({
  title = "Why Us",
  bullets = [
    "We specialize in cryptocurrency, card/ACH disputes, and tax-related fraud—with a strong, proven track record.",
    "We know trust matters. We communicate clearly, protect your privacy, and keep you updated.",
    "We combine advanced tracing tech with legal and compliance partners to pursue recoveries fast.",
    "You get a dedicated specialist and a personalized plan designed around your case.",
  ],
  image = "/why-us.jpg",
  ctaText = "Connect With Us",
  ctaHref = "#contact",
}) {
  return (
    <section className={s.wrap} id="why-us" aria-labelledby="why-title">
      <div className="container">
        <div className={s.grid}>
          <figure className={s.figure}>
            <img className={s.img} src={image} alt="" loading="lazy" />
            <div className={s.glow} aria-hidden />
          </figure>

          <div className={s.content}>
            <h2 id="why-title" className={s.h2}>
              {title}
            </h2>
            <ul className={s.list}>
              {bullets.map((t, i) => (
                <li key={i} className={s.item}>
                  <span className={s.bullet} aria-hidden>
                    ✓
                  </span>
                  <p className={s.p}>{t}</p>
                </li>
              ))}
            </ul>
            <a className={s.cta} href={ctaHref}>
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
