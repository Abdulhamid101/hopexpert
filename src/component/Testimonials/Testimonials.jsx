import React, { useEffect, useRef, useState } from "react";
import s from "./Testimonials.module.css";

const QUOTES = [
  {
    text: "The professionalism and effectiveness of their team in handling my crypto wallet recovery were outstanding. I regained access to my assets.",
    author: "John A",
  },
  {
    text: "They guided me through a clean dispute strategy and handled the bank calls. Funds back in 12 days. Transparent and kind.",
    author: "Amaka O",
  },
  {
    text: "Clear updates, strong evidence pack, and real empathy. This is how recovery should be done.",
    author: "Marco G",
  },
];

export default function Testimonials({ items = QUOTES, interval = 6000 }) {
  const [i, setI] = useState(0);
  const timer = useRef(null);
  const wrapRef = useRef(null);

  const next = () => setI((v) => (v + 1) % items.length);
  const prev = () => setI((v) => (v - 1 + items.length) % items.length);

  useEffect(() => {
    start();
    return stop;
  }, [i, items.length]);

  const start = () => {
    stop();
    timer.current = setInterval(next, interval);
  };
  const stop = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  };

  // Basic swipe for mobile
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let x0 = null;
    const onStart = (e) => (x0 = (e.touches?.[0] || e).clientX);
    const onMove = (e) => {
      if (x0 === null) return;
      const x1 = (e.touches?.[0] || e).clientX;
      const dx = x1 - x0;
      if (Math.abs(dx) > 60) {
        dx > 0 ? prev() : next();
        x0 = null;
      }
    };
    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
    };
  }, []);

  const q = items[i];

  return (
    <section
      className={s.wrap}
      id="testimonials"
      aria-labelledby="tst-title"
      onMouseEnter={stop}
      onMouseLeave={start}
      ref={wrapRef}
    >
      <div className="container">
        <header className={s.header}>
          <span className={s.quotes} aria-hidden>
            ❝❞
          </span>
          <h2 className={s.h2} id="tst-title">
            Our Clients <span className={s.gold}>Experiences</span>
          </h2>
        </header>

        <figure className={s.card}>
          <blockquote className={s.text}>&ldquo;{q.text}&rdquo;</blockquote>
          <figcaption className={s.author}>— {q.author}</figcaption>
        </figure>

        <nav className={s.pager} aria-label="Testimonial navigation">
          <button className={s.nav} onClick={prev} aria-label="Previous">
            ‹
          </button>
          <div className={s.dots}>
            {items.map((_, idx) => (
              <button
                key={idx}
                className={`${s.dot} ${idx === i ? s.on : ""}`}
                onClick={() => setI(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
          <button className={s.nav} onClick={next} aria-label="Next">
            ›
          </button>
        </nav>
      </div>
      <div className={s.aura} aria-hidden />
    </section>
  );
}
