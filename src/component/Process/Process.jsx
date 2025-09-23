import React from "react";
import s from "./Process.module.css";

const STEPS = [
  {
    title: "Free Consultation",
    text: "We start by understanding your specific case through a personal consultation. Our specialists listen to your story and design a recovery plan that fits your needs.",
    Icon: ChatIcon,
  },
  {
    title: "Evidence Collection",
    text: "We gather transaction records, screenshots, emails, and chat logs. All evidence is secured and organized to build a strong, defensible case.",
    Icon: FolderIcon,
  },
  {
    title: "Case Evaluation",
    text: "Experts analyze patterns, trace flows, and identify the best legal/chargeback routes. You receive a tailored plan and timeline.",
    Icon: SearchIcon,
  },
  {
    title: "Fund Recovery",
    text: "We work with banks, exchanges, and legal partners to pursue refunds, chargebacks, or freezes—keeping you updated at every step.",
    Icon: ShieldIcon,
  },
];

export default function Process() {
  return (
    <section className={s.wrap} id="process" aria-labelledby="proc-title">
      <div className="container">
        <h2 className={s.h2} id="proc-title">
          How We Recover Your Funds
        </h2>
        <p className={s.lead}>
          Our recovery service goes beyond generic templates. We study your
          case, secure the right evidence, and craft a specific strategy—then
          execute it with compliant partners while keeping you informed.
        </p>

        <ul className={s.grid} role="list">
          {STEPS.map(({ title, text, Icon }) => (
            <li key={title} className={s.card}>
              <div className={s.iconWrap}>
                <Icon className={s.icon} />
              </div>
              <h3 className={s.title}>{title}</h3>
              <p className={s.text}>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* Inline SVG icons – no packages */
function ChatIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path
        d="M10 36l-2 8 8-4h16a8 8 0 0 0 8-8V14a8 8 0 0 0-8-8H16a8 8 0 0 0-8 8v22z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="18" cy="24" r="2" fill="currentColor" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
      <circle cx="30" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}
function FolderIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path
        d="M6 12h14l4 4h18v18a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V12z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M6 20h36" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function SearchIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <circle
        cx="22"
        cy="22"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M32 32l10 10" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path
        d="M24 44s16-6 16-18V10L24 4 8 10v16c0 12 16 18 16 18z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16 24l6 6 10-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
