import React from "react";
import Navbar from "./component/NavBar/NavBar.jsx";
import Hero from "./component/Hero/Hero.jsx";
import Benefits from "./component/Benefits/Benefits.jsx";
import Process from "./component/Process/Process.jsx";
import ServicesTabs from "./component/ServicesTabs/ServicesTabs.jsx";
import AssuranceCTA from "./component/AssuranceCTA/AssuranceCTA.jsx";
import WhyUs from "./component/WhyUs/WhyUs.jsx";
import Achievements from "./component/Achievements/Achievements.jsx";
import News from "./component/News/News.jsx";
import Testimonials from "./component/Testimonials/Testimonials.jsx";
import FAQ from "./component/FAQ/FAQ.jsx";
import LeadHero from "./component/LeadHero/LeadHero.jsx";
import MegaFooter from "./component/MegaFooter/MegaFooter.jsx"; 
// import Sections from "./component/Sections/Sections.jsx";
// import Footer from "./components/Footer/Footer.jsx";
import s from "./App.module.css";

export default function App() {
  return (
    <div className={s.shell}>
      <Navbar />
      <Hero />
      <Benefits />
      <Process />
      <ServicesTabs />
      <AssuranceCTA />
      <WhyUs />
      <Achievements />
      <News />
      <Testimonials />
      <FAQ />
      <LeadHero />
      <MegaFooter />
      {/* <Sections /> */}
      {/* <Footer /> */}
    </div>
  );
}
