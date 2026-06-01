import { useState } from "react";
import "../styles/Testimonials.css";

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
 
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const TESTIMONIALS = [
  {
    text: "VIVEC Institute provided me with practical skills and industry exposure that helped me secure a job immediately after completing my training. The instructors were knowledgeable, supportive, and focused on real-world applications.",
    name: "Eren Patel",
    profession: "Software Engineer",
  },
  {
    text: "The training programs are well-structured and aligned with current industry requirements. The hands-on learning approach and placement assistance gave me the confidence to advance my career.",
    name: "Levi Kharva",
    profession: "Mechanical Engineer",
  },
  {
    text: "What impressed me most was the institute's commitment to student success. The updated curriculum, experienced faculty, and career guidance helped me develop the skills needed to excel in my profession.",
    name: "Naruto Mishra",
    profession: "Data Analyst",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const t = TESTIMONIALS[current];

  return (
    <section className="testi">
      <div className="testi__inner">
        <p className="testi__eyebrow">WHAT PEOPLE SAY ABOUT US</p>
        <h2 className="testi__title">TESTIMONIALS</h2>

        <div className="testi__slider">
          <button className="testi__arrow testi__arrow--left" onClick={prev}>
            <ChevronLeft />
          </button>

          <div className="testi__card">
            <div className="testi__quote">❝</div>
            <p className="testi__text">{t.text}</p>
            <div className="testi__author">
              <span className="testi__name">{t.name}</span>
              <span className="testi__profession">{t.profession}</span>
            </div>
          </div>

          <button className="testi__arrow testi__arrow--right" onClick={next}>
            <ChevronRight />
          </button>
        </div>

        <div className="testi__dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`testi__dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}