import "../styles/WhyChooseUs.css";

const STATS = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="24" height="18" rx="2" stroke="white" strokeWidth="2"/>
        <path d="M14 26 L14 32 L20 29 L26 32 L26 26" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        <line x1="14" y1="14" x2="26" y2="14" stroke="white" strokeWidth="2"/>
        <line x1="14" y1="18" x2="22" y2="18" stroke="white" strokeWidth="2"/>
      </svg>
    ),
    value: "8,700+",
    label: "SUCCESSFULLY TRAINED",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="14" r="7" stroke="white" strokeWidth="2"/>
        <path d="M8 34 C8 26 32 26 32 34" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    value: "294+",
    label: "STUDENTS PLACED",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="28" height="22" rx="2" stroke="white" strokeWidth="2"/>
        <line x1="6" y1="14" x2="34" y2="14" stroke="white" strokeWidth="2"/>
        <line x1="14" y1="8" x2="14" y2="14" stroke="white" strokeWidth="2"/>
        <line x1="26" y1="8" x2="26" y2="14" stroke="white" strokeWidth="2"/>
        <line x1="12" y1="20" x2="20" y2="20" stroke="white" strokeWidth="1.5"/>
        <line x1="12" y1="24" x2="24" y2="24" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
    value: "14+",
    label: "SKILL-ORIENTED COURSES",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6 L24 14 L34 15.5 L27 22 L28.5 32 L20 27.5 L11.5 32 L13 22 L6 15.5 L16 14 Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    value: "65%",
    label: "LITERACY CLASSES",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why">
      <div className="why__inner">
        <p className="why__eyebrow">THE NUMBER SAY IT ALL</p>
        <h2 className="why__title">WHY CHOOSE US</h2>
        <div className="why__stats">
          {STATS.map((s, i) => (
            <div className="why__stat" key={i}>
              <div className="why__stat-icon">{s.icon}</div>
              <span className="why__stat-value">{s.value}</span>
              <span className="why__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}