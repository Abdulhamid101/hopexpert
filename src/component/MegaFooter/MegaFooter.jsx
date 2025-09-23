import React from "react";
import s from "./MegaFooter.module.css";

const SERVICES = [
  "Cryptocurrency Scam Recovery",
  "Forex Scam",
  "NFT Scam",
  "Romance Scam",
  "Ponzi Schemes",
  "Tax Fraud Investigation",
  "Internet Scam",
  "Social Media Scam",
];

const QUICK = [
  { text: "About Us", href: "#about" },
  { text: "Web Stories", href: "#stories" },
  { text: "Privacy Policy", href: "#privacy" },
  { text: "Terms and Conditions", href: "#terms" },
  { text: "Disclaimer", href: "#disclaimer" },
  { text: "Contact Us", href: "#contact" },
];

export default function MegaFooter({
  brand = { name: "RENEWED HOPE EXPERT", tagline: "Fund Recovery" },
  logo = "/logo.svg",
  about = `We’re a trusted fund recovery company. We handle frozen/disabled crypto wallets, capital gains tax frauds, fake apps & wallets, broker and phishing scams, celebrity imposter scams, fake ICOs and more.`,
  address = "Stresemannstraße 123 Berlin, BE 10963",
  whatsapp = "+15094289325",
  email = "support@renewed-hopeexpert.com",
  year = new Date().getFullYear(),
  site = "renewed-hopeexpert",
}) {
  return (
    <footer className={s.wrap} id="footer">
      <div className="container">
        <div className={s.grid}>
          {/* About */}
          <div className={s.col}>
            <div className={s.brand}>
              {logo ? (
                <img src={logo} alt="" className={s.logo} />
              ) : (
                <BadgeIcon className={s.logoAlt} />
              )}
              <div className={s.brandText}>
                <div className={s.brandName}>{brand.name}</div>
                <div className={s.brandSub}>{brand.tagline}</div>
              </div>
            </div>
            <p className={s.about}>{about}</p>
          </div>

          {/* Services */}
          <div className={s.col}>
            <h4 className={s.head}>Our Services</h4>
            <ul className={s.list}>
              {SERVICES.map((t) => (
                <li key={t}>
                  <a href="#services">{t}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className={s.col}>
            <h4 className={s.head}>Quick Links</h4>
            <ul className={s.list}>
              {QUICK.map((q) => (
                <li key={q.text}>
                  <a href={q.href}>{q.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={s.col}>
            <h4 className={s.head}>Contact Us</h4>

            <div className={s.label}>Address</div>
            <div className={s.value}>{address}</div>

            <div className={s.label}>Whatsapp</div>
            <a
              className={s.value}
              href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
            >
              {whatsapp}
            </a>

            <div className={s.label}>Email</div>
            <a className={s.value} href={`mailto:${email}`}>
              {email}
            </a>

            <div className={s.badges}>
              <MoneyBackIcon className={s.bdg} />
              <NoWinNoFeeIcon className={s.bdg} />
            </div>
          </div>
        </div>
      </div>

      <div className={s.copy}>
        © {year} {site} • All Rights Reserved
      </div>
    </footer>
  );
}

/* --- Tiny inline icons so no dependencies --- */
function BadgeIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <circle cx="24" cy="24" r="22" fill="url(#g)" stroke="#946b00" />
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#ffd76a" />
          <stop offset="1" stopColor="#ffb347" />
        </linearGradient>
      </defs>
      <text
        x="24"
        y="28"
        textAnchor="middle"
        fontSize="12"
        fontWeight="800"
        fill="#1a1a1a"
      >
        RHE
      </text>
    </svg>
  );
}
function MoneyBackIcon(props) {
  return (
    <svg viewBox="0 0 64 64" {...props}>
      <rect
        x="2"
        y="10"
        width="60"
        height="44"
        rx="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20 30h24M24 24h16M24 36h16"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="20" r="4" fill="currentColor" />
      <circle cx="52" cy="44" r="4" fill="currentColor" />
    </svg>
  );
}
function NoWinNoFeeIcon(props) {
  return (
    <svg viewBox="0 0 64 64" {...props}>
      <circle
        cx="32"
        cy="32"
        r="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20 40l10-16 10 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="32" cy="28" r="3" fill="currentColor" />
    </svg>
  );
}
