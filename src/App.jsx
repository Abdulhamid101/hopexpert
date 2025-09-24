// App.jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
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
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import ServicesCrypto from "./pages/ServicesCrypto/ServicesCrypto.jsx";
import ServicesForex from "./pages/ServicesForex/ServicesForex.jsx";
import ServicesNft from "./pages/ServicesNft/ServicesNft.jsx";
import ServicesPonzi from "./pages/ServicesPonzi/ServicesPonzi.jsx";
import ServicesRomance from "./pages/ServicesRomance/ServicesRomance.jsx";
import ServicesTax from "./pages/ServicesTax/ServicesTax.jsx";
import ServicesInternet from "./pages/ServicesInternet/ServicesInternet.jsx";
import s from "./App.module.css";
import { scrollToId } from "./utils/scrollToId";

function ScrollOnHash() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (pathname !== "/") return;
    if (hash) scrollToId(hash.replace(/^#/, ""));
  }, [hash, pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollOnHash />
      <Routes>
        <Route
          path="/"
          element={
            <div className={s.app}>
              <section id="top">
                <Hero />
              </section>
              <section id="benefits">
                <Benefits />
              </section>
              <section id="process">
                <Process />
              </section>
              <section id="services">
                <ServicesTabs />
              </section>
              <section id="assurance">
                <AssuranceCTA />
              </section>
              <section id="why-us">
                <WhyUs />
              </section>
              <section id="achievements">
                <Achievements />
              </section>
              <section id="news">
                <News />
              </section>
              <section id="reviews">
                <Testimonials />
              </section>
              <section id="faq">
                <FAQ />
              </section>
              <section id="start">
                <LeadHero />
              </section>
            </div>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/servicescrypto" element={<ServicesCrypto />} />
        <Route path="/servicesforex" element={<ServicesForex />} />
        <Route path="/servicesnft" element={<ServicesNft />} />
        <Route path="/servicesponzi" element={<ServicesPonzi />} />
        <Route path="/servicesromance" element={<ServicesRomance />} />
        <Route path="/servicestax" element={<ServicesTax />}/>
        <Route path="/servicesinternet" element={<ServicesInternet />}/>
      </Routes>
      <MegaFooter />
    </BrowserRouter>
  );
}
