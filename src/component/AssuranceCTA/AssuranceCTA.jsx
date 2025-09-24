import React from "react";
import { Link } from "react-router-dom";
import s from "./AssuranceCTA.module.css";

export default function AssuranceCTA({
  title = "Assuring Scam-Relief With Recovery",
  para1 = "We’re at the forefront of scam tracing—blockchain analysis, card/ACH disputes, and coordinated investigations—to deliver optimal outcomes. Thousands trust our process to regain funds and confidence.",
  para2 = "Book a free consultation to validate your case and get a clear path forward. Our tech-savvy investigators, legal partners, and recovery specialists act fast and keep you updated end-to-end.",
  ctaText = "More About Us",
  ctaHref = "#about",
}) {
  return (
    <section className={s.wrap} aria-labelledby="assure-title">
      <div className={s.bg} aria-hidden />
      <div className="container">
        <div className={s.box}>
          <h2 id="assure-title" className={s.h2}>
            {title}
          </h2>
          <p className={s.p}>{para1}</p>
          <p className={s.p}>{para2}</p>
          <Link to="/about"  onClick={() => setOpen(false)} className={s.btn} href={ctaHref}>
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
