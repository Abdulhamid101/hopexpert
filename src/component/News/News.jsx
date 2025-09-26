import React, { useMemo, useState } from "react";
import s from "./News.module.css";
import image1 from "../../assets/cryptonewsimg1.jpg"
import image2 from "../../assets/forexnewsimg1.jpg" 
import image3 from "../../assets/romanceimg.webp"
import image4 from "../../assets/scamimg.webp"

/* Replace with your real posts or pass as a prop */
const DEMO = [
  {
    id: "p1",
    title: "Crypto Tracing: What Exchanges Actually Respond To",
    excerpt:
      "We tested response times and evidence formats that speed up compliance reviews. Here’s how to structure your report for faster action.",
    href: "#read-p1",
    img: image1,
    date: "2025-08-12",
  },
  {
    id: "p2",
    title: "Forex Broker Red Flags (2025 Update)",
    excerpt:
      "Execution quirks, bonus traps, withdrawal friction—this year’s common patterns and how to document them for your bank.",
    href: "#read-p2",
    img: image2,
    date: "2025-07-22",
  },
  {
    id: "p3",
    title: "Romance Scams: The Evidence Banks Prioritize",
    excerpt:
      "Messaging timelines, transfer intent, and misleading claims—build a narrative that meets dispute teams where they are.",
    href: "#read-p3",
    img: image3,
    date: "2025-07-01",
  },
  {
    id: "p4",
    title: "Chargeback Playbook for Crypto On-Ramps",
    excerpt:
      "When card rails touched the funds, you have options. A practical guide for issuers, descriptors, and deadlines.",
    href: "#read-p4",
    img: image4,
    date: "2025-06-15",
  },
];

export default function News({
  posts = DEMO,
  pageSize = 2,
  title = "Latest News",
}) {
  const [page, setPage] = useState(0);
  const pages = Math.max(1, Math.ceil(posts.length / pageSize));
  const slice = useMemo(
    () => posts.slice(page * pageSize, page * pageSize + pageSize),
    [posts, page, pageSize]
  );

  return (
    <section className={s.wrap} id="news" aria-labelledby="news-title">
      <div className="container">
        <div className={s.header}>
          <span className={s.emoji} aria-hidden>
            📰
          </span>
          <h2 className={s.h2} id="news-title">
            {title}
          </h2>
        </div>

        <div className={s.grid}>
          {slice.map((p) => (
            <article key={p.id} className={s.card}>
              <a className={s.media} href={p.href} aria-label={p.title}>
                <img className={s.img} src={p.img} alt="" loading="lazy" />
                <div className={s.tag}>
                  {new Date(p.date).toLocaleDateString()}
                </div>
              </a>
              <div className={s.body}>
                <h3 className={s.title}>
                  <a href={p.href}>{p.title}</a>
                </h3>
                <p className={s.excerpt}>{p.excerpt}</p>
                <a className={s.more} href={p.href}>
                  Read More »
                </a>
              </div>
            </article>
          ))}
        </div>

        {pages > 1 && (
          <div
            className={s.pager}
            role="navigation"
            aria-label="News pagination"
          >
            <button
              className={s.nav}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
            >
              ‹ Prev
            </button>
            <div className={s.dots}>
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  className={`${s.dot} ${i === page ? s.on : ""}`}
                  aria-label={`Page ${i + 1}`}
                  onClick={() => setPage(i)}
                />
              ))}
            </div>
            <button
              className={s.nav}
              onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
              disabled={page === pages - 1}
            >
              Next ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
