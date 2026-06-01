import "../styles/HowToStudy.css";
import img1 from "../assets/howToStudy01.jpeg";
import img2 from "../assets/howToStudy02.jpeg";
import img3 from "../assets/howToStudy03.jpeg";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IMAGE_CARDS = [
  {
    title: "Apply Now",
    desc: "Start Your Journey Today.",
    bg: img1,
  },
  {
    title: "Schedule A Visit",
    desc: "Visit. Explore. Decide.",
    bg: img2,
  },
  {
    title: "Contact Us",
    desc: "Get in Touch Today.",
    bg: img3,
  },
];

const FEATURES = [
  {
    color: "#1565c0",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="14" stroke="white" strokeWidth="2"/>
        <path d="M12 18 L16 22 L24 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "MALLEABLE STUDY TIME",
    desc: "Learn at your own pace with flexible schedules designed to fit around your education, work, and personal commitments. Access training when it works best for you.",
  },
  {
    color: "#2e7d32",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="24" height="18" rx="2" stroke="white" strokeWidth="2"/>
        <path d="M12 26 L12 30 L18 28 L24 30 L24 26" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: "PLACEMENT ASSISTANCE",
    desc: "Benefit from dedicated career support, industry connections, and placement guidance that help you transition confidently from training to employment.",
  },
  {
    color: "#e65100",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="14" stroke="white" strokeWidth="2"/>
        <line x1="18" y1="10" x2="18" y2="18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="18" cy="22" r="1.5" fill="white"/>
      </svg>
    ),
    title: "EASY TO ACCESS",
    desc: "With convenient enrollment processes, accessible learning resources, and multiple training options, gaining new skills has never been easier.",
  },
  {
    color: "#e65100",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="24" height="24" rx="3" stroke="white" strokeWidth="2"/>
        <path d="M12 18 L16 22 L24 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "STUDY ON THE GO",
    desc: "Access learning materials anytime, anywhere through digital platforms, allowing you to continue your education wherever life takes you.",
  },
  {
    color: "#1565c0",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 10 L18 6 L30 10 L30 20 C30 26 18 30 18 30 C18 30 6 26 6 20 Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: "UPDATED SYLLABUS",
    desc: "Stay ahead with industry-relevant curriculum that is regularly updated to match current market trends, technologies, and employer requirements.",
  },
  {
    color: "#2e7d32",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="14" stroke="white" strokeWidth="2"/>
        <path d="M13 18 L17 22 L23 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="18" r="5" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
    title: "PRACTICAL & INTERACTIVE",
    desc: "Gain hands-on experience through real-world projects, practical exercises, and engaging learning activities that build confidence and job-ready skills.",
  },
];

export default function HowToStudy() {
  return (
    <section className="hts">
      <div className="hts__inner">
        <p className="hts__eyebrow">THERE ARE MANY WAYS TO LEARN</p>
        <h2 className="hts__title">HOW DO YOU WANT TO STUDY?</h2>

        {/* 3 image cards */}
        <div className="hts__image-grid">
          {IMAGE_CARDS.map((card, i) => (
            <div
              className="hts__image-card"
              key={i}
              style={{ backgroundImage: `url(${card.bg})` }}
            >
              <div className="hts__image-card-overlay" />
              <div className="hts__image-card-content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <button className="hts__image-card-btn">
                  <ArrowIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 6 feature items */}
        <div className="hts__features">
          {FEATURES.map((f, i) => (
            <div className="hts__feature" key={i}>
              <div className="hts__feature-icon" style={{ background: f.color }}>
                {f.icon}
              </div>
              <div className="hts__feature-body">
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}