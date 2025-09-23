import React from "react";
import s from "./Benefits.module.css";

const ITEMS = [
  {
    title: "Maximum Recovery Guarantee",
    blurb:
      "We only take cases we can pursue. If we don’t recover, you don’t pay.",
    icon: BountyIcon,
  },
  {
    title: "Free Initial Consultation",
    blurb: "Speak to a specialist in minutes. No obligation, no pressure.",
    icon: ChatIcon,
  },
  {
    title: "Easy Recovery Steps",
    blurb: "Three guided steps from claim to action—clear, fast, trackable.",
    icon: FlowIcon,
  },
  {
    title: "Confidential Service",
    blurb: "Bank-grade security, strict privacy, and limited-access handling.",
    icon: ShieldIcon,
  },
  {
    title: "24/7 Support",
    blurb: "Real humans, real answers—any time zone.",
    icon: ClockIcon,
  },
];

export default function Benefits() {
  return (
    <section className={s.wrap} aria-labelledby="benefits-title">
      <div className={s.aura} aria-hidden />
      <div className="container">
        <h2 id="benefits-title" className={s.h2}>
          What You Get
        </h2>
        <ul className={s.grid} role="list">
          {ITEMS.map(({ title, blurb, icon: Icon }) => (
            <li key={title} className={s.card}>
              <div className={s.iconWrap} aria-hidden>
                <Icon className={s.icon} />
              </div>
              <h3 className={s.title}>{title}</h3>
              <p className={s.blurb}>{blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --- Inline, resolution-independent SVG icons (no extra packages) --- */
function BountyIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M8 20h32M10 12h28a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2z"
      />
      <path fill="none" stroke="currentColor" strokeWidth="2" d="M24 17v14" />
      <circle
        cx="24"
        cy="24"
        r="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path stroke="currentColor" strokeWidth="2" d="M21 24h6" />
    </svg>
  );
}
function ChatIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M10 36l-2 8 8-4h16a8 8 0 0 0 8-8V14a8 8 0 0 0-8-8H16a8 8 0 0 0-8 8v22z"
      />
      <circle cx="18" cy="24" r="2" fill="currentColor" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
      <circle cx="30" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}
function FlowIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M10 12h10a6 6 0 0 1 6 6v12a6 6 0 0 0 6 6h6"
      />
      <circle cx="10" cy="12" r="3" fill="currentColor" />
      <circle cx="38" cy="36" r="3" fill="currentColor" />
      <circle cx="26" cy="18" r="3" fill="currentColor" />
    </svg>
  );
}
function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M24 44s16-6 16-18V10L24 4 8 10v16c0 12 16 18 16 18z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M16 24l6 6 10-12"
      />
    </svg>
  );
}
function ClockIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <circle
        cx="24"
        cy="24"
        r="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M24 12v12l8 4"
      />
    </svg>
  );
}
