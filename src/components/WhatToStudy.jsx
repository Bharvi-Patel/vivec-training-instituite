import "../styles/WhatToStudy.css";
import img1 from "../assets/wantToStudy01.jpeg";
import img2 from "../assets/wantToStudy02.jpeg";
import img3 from "../assets/wantToStudy03.jpeg";
import img4 from "../assets/wantToStudy04.jpeg";

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" width="12" height="12">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const COURSES = [
  {
    title: "VIVEKANANDA INSTITUTE OF VOCATIONAL TRAINING & ENTREPRENEURIAL COMPETENCE",
    duration: "2 YEAR COURSE",
    bg: img1,
  },
  {
    title: "BUSINESS PROCESS OUTSOURCING LEARNING CENTER FOR TRIBAL YOUTHS",
    duration: "1 YEAR COURSE",
    bg: img2,
  },
  {
    title: "ADULT LITERACY FOR WOMEN",
    duration: "1 YEAR COURSE",
    bg: img3,
  },
  {
    title: "YOUTH DEVELOPMENT CENTERS",
    duration: "1 YEAR COURSE",
    bg: img4,
  },
];

export default function WhatToStudy() {
  return (
    <section className="wts">
      <div className="wts__inner">
        <p className="wts__eyebrow">UNIQUE FEATURES OF OUR PROGRAMS</p>
        <h2 className="wts__title">WHAT DO YOU WANT TO STUDY?</h2>
        <div className="wts__grid">
          {COURSES.map((c, i) => (
            <div
              className="wts__card"
              key={i}
              style={{ backgroundImage: `url(${c.bg})` }}
            >
              <div className="wts__card-overlay" />
              <div className="wts__card-content">
                <p className="wts__card-title">{c.title}</p>
                <div className="wts__card-footer">
                  <span className="wts__card-duration">{c.duration}</span>
                  <button className="wts__card-btn">
                    <PlusIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}