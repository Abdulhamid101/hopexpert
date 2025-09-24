import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollToId } from "../../utils/scrollToId";
import s from "./NavBar.module.css";

const SERVICES = [
  { label: "Cryptocurrency Scam Recovery", to: "servicescrypto" },
  { label: "Forex Scam", to: "servicesforex" },
  { label: "NFT Scam", to: "servicesnft" },
  { label: "Ponzi Schemes", to: "servicesponzi" },
  { label: "Romance Scam", to: "servicesromance" },
  { label: "Tax Refund Investigation", to: "servicestax" },
  { label: "Internet Scam", to: "servicesinternet" },
  { label: "Social Media Scam", to: "/services/social" },
];

export default function NavBar() {
  const [svcOpenMobile, setSvcOpenMobile] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile drawer
  const [mounted, setMounted] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false); // desktop dropdown
  const { pathname } = useLocation();
  const nav = useNavigate();
  const menuBtnRef = useRef(null);
  const svcRef = useRef(null);

  // header bg on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMounted(true), []);

  // lock body scroll when drawer is open
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
      requestAnimationFrame(() => menuBtnRef.current?.focus());
    }
  }, [open]);

  // ESC closes
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSvcOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // click outside desktop dropdown
  useEffect(() => {
    const onDocClick = (e) => {
      if (svcRef.current && !svcRef.current.contains(e.target))
        setSvcOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
    };
  }, []);

  // close on route change
  useEffect(() => {
    if (open) setOpen(false);
    if (svcOpen) setSvcOpen(false);
  }, [pathname]);

  // anchors
  const goto = (hash) => {
    const id = hash.replace(/^#/, "");
    setOpen(false);
    if (pathname !== "/") {
      nav("/" + hash);
      requestAnimationFrame(() => setTimeout(() => scrollToId(id), 0));
    } else {
      window.history.pushState({}, "", `/${hash}`);
      scrollToId(id);
    }
  };

  return (
    <header className={`${s.nav} ${scrolled ? s.scrolled : ""}`}>
      <div className={`${s.inner} container`}>
        <a
          className={s.brand}
          href="/#top"
          onClick={(e) => {
            e.preventDefault();
            goto("#top");
          }}
        >
          <span className={s.coin} aria-hidden>
            Ƀ
          </span>
          <span>
            Recover<span className={s.gold}>My</span>Funds
          </span>
        </a>

        {/* Desktop */}
        <nav className={s.links} aria-label="Primary">
          <a
            href="/#process"
            onClick={(e) => {
              e.preventDefault();
              goto("#process");
            }}
          >
            How it works
          </a>
          <a
            href="/#why-us"
            onClick={(e) => {
              e.preventDefault();
              goto("#why-us");
            }}
          >
            Why us
          </a>

          <div ref={svcRef} className={s.menu}>
            <button
              type="button"
              className={`${s.menuLink} ${svcOpen ? s.menuLinkOpen : ""}`}
              onClick={() => setSvcOpen((v) => !v)}
              aria-expanded={svcOpen}
              aria-haspopup="true"
              aria-controls="svc-dd"
            >
              Our Services{" "}
              <span
                className={`${s.caret} ${svcOpen ? s.caretOpen : ""}`}
                aria-hidden
              >
                ▾
              </span>
            </button>
            <div
              id="svc-dd"
              className={`${s.dropdown} ${svcOpen ? s.dropdownOpen : ""}`}
              role="menu"
            >
              {SERVICES.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={s.dropItem}
                  role="menuitem"
                  onClick={() => {
                    setSvcOpen(false);
                    setOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <a
            href="/#reviews"
            onClick={(e) => {
              e.preventDefault();
              goto("#reviews");
            }}
          >
            Reviews
          </a>
          <a
            href="/#faq"
            onClick={(e) => {
              e.preventDefault();
              goto("#faq");
            }}
          >
            FAQ
          </a>
        </nav>

        <a
          className={s.cta}
          href="/#start"
          onClick={(e) => {
            e.preventDefault();
            goto("#start");
          }}
        >
          Free Case Review
        </a>

        {/* Hamburger */}
        <button
          ref={menuBtnRef}
          className={s.menuBtn}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="nav-drawer"
          aria-label="Toggle menu"
        >
          <span className={`${s.burger} ${open ? s.burgerOpen : ""}`} />
        </button>
      </div>

      {mounted &&
        createPortal(
          <>
            <button
              className={`${s.backdrop} ${open ? s.show : ""}`}
              aria-hidden={!open}
              tabIndex={-1}
              onClick={() => setOpen(false)}
            />
            <nav
              id="nav-drawer"
              className={`${s.drawer} ${open ? s.drawOpen : ""}`}
              aria-label="Mobile"
            >
              <button
                className={s.closeBtn}
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>

              <div className={s.mobileGroup}>
                <button
                  className={s.mobileSummary}
                  aria-expanded={svcOpenMobile}
                  aria-controls="svc-panel"
                  onClick={() => setSvcOpenMobile((v) => !v)}
                >
                  <span>Our Services</span>
                  <span
                    className={`${s.chev} ${svcOpenMobile ? s.chevOpen : ""}`}
                    aria-hidden
                  />
                </button>

                <div
                  id="svc-panel"
                  className={s.mobilePanel}
                  hidden={!svcOpenMobile}
                >
                  <div className={s.mobileList}>
                    {SERVICES.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={s.mobileItem}
                        onClick={() => setOpen(false)}
                      >
                        <span className={s.bullet} aria-hidden />
                        <span className={s.itemText}>{item.label}</span>
                        <span className={s.arrow} aria-hidden>
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <button className={s.anchorBtn} onClick={() => goto("#process")}>
                How it works
              </button>
              <button className={s.anchorBtn} onClick={() => goto("#why-us")}>
                Why us
              </button>
              <button className={s.anchorBtn} onClick={() => goto("#reviews")}>
                Reviews
              </button>
              <button className={s.anchorBtn} onClick={() => goto("#faq")}>
                FAQ
              </button>
              <button className={s.mobileCta} onClick={() => goto("#start")}>
                Free Case Review
              </button>
            </nav>
          </>,
          document.body
        )}
    </header>
  );
}
