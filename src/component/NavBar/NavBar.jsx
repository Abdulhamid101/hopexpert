import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import s from "./NavBar.module.css";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // for portal safety

  // Sticky shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ready to portal
  useEffect(() => setMounted(true), []);

  // Body scroll lock (no jump)
  useEffect(() => {
    const body = document.body;
    if (open) {
      const y = window.scrollY;
      body.dataset.lockScroll = "1";
      body.style.position = "fixed";
      body.style.top = `-${y}px`;
      body.style.width = "100%";
    } else if (body.dataset.lockScroll) {
      const y = -parseInt(document.body.style.top || "0", 10) || 0;
      body.removeAttribute("data-lock-scroll");
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      window.scrollTo(0, y);
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`${s.nav} ${scrolled ? s.scrolled : ""}`}>
      <div className={`${s.inner} container`}>
        <a className={s.brand} href="#top">
          <span className={s.coin} aria-hidden>
            Ƀ
          </span>
          <span>
            Recover<span className={s.gold}>My</span>Funds
          </span>
        </a>

        {/* Desktop links */}
        <nav className={s.links} aria-label="Primary">
          <a href="#how">How it works</a>
          <a href="#why">Why us</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
        </nav>

        {/* Desktop CTA */}
        <a className={s.cta} href="#start">
          Free Case Review
        </a>

        {/* Hamburger */}
        <button
          className={s.menuBtn}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="nav-drawer"
          aria-label="Toggle menu"
        >
          <span className={`${s.burger} ${open ? s.burgerOpen : ""}`} />
        </button>
      </div>

      {/* Portal overlay: backdrop + drawer */}
      {mounted &&
        createPortal(
          <>
            {/* Backdrop click to close */}
            <button
              className={`${s.backdrop} ${open ? s.show : ""}`}
              aria-hidden={!open}
              tabIndex={-1}
              onClick={close}
            />
            {/* Drawer */}
            <nav
              id="nav-drawer"
              className={`${s.drawer} ${open ? s.drawOpen : ""}`}
              aria-label="Mobile"
            >
              {/* Close button inside drawer */}
              <button
                className={s.closeBtn}
                onClick={close}
                aria-label="Close menu"
              >
                ✕
              </button>

              <a onClick={close} href="#how">
                How it works
              </a>
              <a onClick={close} href="#why">
                Why us
              </a>
              <a onClick={close} href="#reviews">
                Reviews
              </a>
              <a onClick={close} href="#faq">
                FAQ
              </a>
              <a onClick={close} href="#start" className={s.mobileCta}>
                Free Case Review
              </a>
            </nav>
          </>,
          document.body
        )}
    </header>
  );
}
