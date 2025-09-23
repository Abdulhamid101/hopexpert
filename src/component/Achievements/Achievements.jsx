import React, { useEffect, useState } from "react";
import s from "./Achievements.module.css";

const STATS = [
  { label: "Years of Recovery", value: 10, suffix: "+", duration: 1500 },
  { label: "Millions Recovered", value: 50, suffix: "M+", duration: 2000 },
  { label: "Successful Cases", value: 1000, suffix: "+", duration: 1800 },
  { label: "Success Rate", value: 95, suffix: "%", duration: 1700 },
];

export default function Achievements() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("achievements");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) setVisible(true);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className={s.wrap}
      id="achievements"
      aria-labelledby="achieve-title"
    >
      <div className="container">
        <div className={s.header}>
          <TrophyIcon className={s.icon} />
          <h2 id="achieve-title" className={s.h2}>
            Achievements
          </h2>
        </div>

        <div className={s.grid}>
          {STATS.map((stat, idx) => (
            <div key={idx} className={s.card}>
              <div className={s.value}>
                {visible ? (
                  <CountUp end={stat.value} duration={stat.duration} />
                ) : (
                  0
                )}
                {stat.suffix}
              </div>
              <div className={s.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Counter animation */
function CountUp({ end, duration }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
}

/* Trophy icon */
function TrophyIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path
        d="M14 8h20v4h6v6c0 4.4-3.6 8-8 8h-2.1A12 12 0 0126 33.9V36h6v4H16v-4h6v-2.1A12 12 0 0118.1 26H16c-4.4 0-8-3.6-8-8v-6h6V8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
