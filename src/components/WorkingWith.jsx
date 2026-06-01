import { useRef } from "react";
import "../styles/WorkingWith.css";

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

const PARTNERS = ["L&T", "KOTAK", "ACCENTURE", "ALEMBIC", "TATA", "INFOSYS", "WIPRO", "HDFC", "CONCENTRIX", "ADANI"];

export default function WorkingWith() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 200, behavior: "smooth" });
    }
  };

  return (
    <section className="working">
      <div className="working__inner">
        <p className="working__eyebrow">ALUMNI</p>
        <h2 className="working__title">WORKING WITH</h2>
      </div>

      <div className="working__slider-wrap">
        <button className="working__arrow working__arrow--left" onClick={() => scroll(-1)}>
          <ChevronLeft />
        </button>

        <div className="working__track" ref={trackRef}>
          {PARTNERS.map((p, i) => (
            <div className="working__logo" key={i}>
              <span>{p}</span>
            </div>
          ))}
        </div>

        <button className="working__arrow working__arrow--right" onClick={() => scroll(1)}>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}