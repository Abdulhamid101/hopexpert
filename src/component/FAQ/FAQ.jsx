import React, { useId, useState } from "react";
import s from "./FAQ.module.css";

const DEMO = [
  {
    q: "Is Crypto a good investment?",
    a: `Crypto assets are highly volatile and largely unregulated in many regions. Gains can be big, but losses can be rapid. If funds are lost to scams, fast, documented action improves your odds of recovery.`,
  },
  {
    q: "How do I avoid cryptocurrency scams?",
    a: `Verify domains and handles, never share seed phrases, test small withdrawals first, and confirm licensing/registration of platforms. Be wary of guaranteed returns and pressure to act fast.`,
  },
  {
    q: "How do I spot a crypto scammer?",
    a: `Red flags: unsolicited DMs, fake support reps, “investment managers,” payment via gift cards, and requests to install remote-control apps.`,
  },
  {
    q: "How can I be sure I'm dealing with a trusted broker?",
    a: `Check regulator registers, read real withdrawal reviews, verify company directors, and confirm banking/processing partners.`,
  },
  {
    q: "What steps to take if I get scammed?",
    a: `Stop further payments, collect evidence (TXIDs, chats, receipts), contact your bank/exchange immediately, file police reports, and open a recovery case with us.`,
  },
];

export default function FAQ({
  items = DEMO,
  allowMultiple = false,
  title = "FAQ",
}) {
  const [open, setOpen] = useState(() => (allowMultiple ? [] : [0])); // default: first open
  const isOpen = (i) => (allowMultiple ? open.includes(i) : open[0] === i);

  const toggle = (i) => {
    if (allowMultiple) {
      setOpen((arr) =>
        arr.includes(i) ? arr.filter((x) => x !== i) : [...arr, i]
      );
    } else {
      setOpen((arr) => (arr[0] === i ? [] : [i]));
    }
  };

  const headingId = useId();

  return (
    <section className={s.wrap} id="faq" aria-labelledby={headingId}>
      <div className="container">
        <h2 className={s.h2} id={headingId}>
          {title}
        </h2>

        <ul className={s.list} role="list">
          {items.map((it, i) => {
            const panelId = `${headingId}-panel-${i}`;
            const btnId = `${headingId}-button-${i}`;
            const openNow = isOpen(i);
            return (
              <li key={i} className={s.item}>
                <button
                  id={btnId}
                  className={`${s.q} ${openNow ? s.on : ""}`}
                  aria-expanded={openNow}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                >
                  <span>{it.q}</span>
                  <span className={s.icon} aria-hidden>
                    {openNow ? "–" : "+"}
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`${s.aWrap} ${openNow ? s.open : ""}`}
                >
                  <div className={s.answer}>{it.a}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
