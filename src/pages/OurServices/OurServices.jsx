import React from "react";
import s from "./OurServices.module.css"

const OurServices = () => {
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
  return (
    <div>
      <section className={s.sectionAlt}>
        <div className="container">
          <h2 className={s.h2}>Our Services</h2>
          <ul className={s.servicesGrid}>
            {servicesGrid.map((sItem) => (
              <li key={sItem.t} className={s.serviceCard}>
                <img src={sItem.icon} alt="" className={s.serviceIcon} />
                <p>{sItem.t}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
