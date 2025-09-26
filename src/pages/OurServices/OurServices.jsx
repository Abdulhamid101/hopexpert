import React from "react";
import s from "./OurServices.module.css";
import {
  Bitcoin,
  LineChart,
  Network, // ← use Network instead of Sitemap
  BadgeDollarSign,
  HeartCrack,
  Globe,
  Share2,
  FileSearch,
} from "lucide-react";

const SERVICES = [
  { icon: Bitcoin, t: "Cryptocurrency Scam Recovery" },
  { icon: LineChart, t: "Forex Scam" },
  { icon: Network, t: "Ponzi Schemes" }, // ← updated
  { icon: BadgeDollarSign, t: "NFT Scam" },
  { icon: HeartCrack, t: "Romance Scam" },
  { icon: Globe, t: "Internet Scam" },
  { icon: Share2, t: "Social Media Scam" },
  { icon: FileSearch, t: "Tax Fraud Investigation" },
];

export default function OurServices() {
  return (
    <section className={s.sectionAlt}>
      <div className="container">
        <h2 className={s.h2}>Our Services</h2>
        <ul className={s.servicesGrid}>
          {SERVICES.map(({ icon: Icon, t }) => (
            <li key={t} className={s.serviceCard}>
              <Icon
                className={s.serviceIcon}
                size={28}
                strokeWidth={1.8}
                aria-hidden
              />
              <p>{t}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
