import { useState } from "react";
import "../styles/Navbar.css";

const NAV_LINKS = [
  { label: "Home",      href: "#home" },
  { label: "About",     href: "#about" },
  { label: "Courses",   href: "#courses" },
  { label: "Admission", href: "#admission" },
  { label: "Contact",   href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState("Home");

  return (
    <>
      {/* ── Announcement Bar ── */}
      <div className="announcement-bar">
         Admissions Open for 2025-2026 Batch! Apply before 30th June &nbsp;|&nbsp;
        <span>Register Now →</span>
      </div>

      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="navbar__inner">

          {/* Logo */}
          <a href="#home" className="navbar__logo">
            <div className="navbar__logo-wordmark">
              <span className="navbar__logo-name">VIVEC</span>
              {/* Floral/mandala icon matching VIVEC logo */}
              <svg className="navbar__logo-sun" viewBox="0 0 60 60" xmlns="https://www.bing.com/images/search?view=detailV2&ccid=0Y%2f2xWik&id=93795DC89B6CDD3C6FD13573314E43FC41BAC1ED&thid=OIP.0Y_2xWikCxbA1FQAvkd0rQHaHa&mediaurl=https%3a%2f%2fseeklogo.com%2fimages%2fG%2fgeometric-shape-logo-9EAB9607F0-seeklogo.com.png&exph=600&expw=600&q=orange+star+gear+logo+SVG%22+&mode=overlay&FORM=VSMAINC&ck=0690A07BF71FFF25440FEAF59707A664&idpp=serp">
                {/* Outer petals */}
                {[0,45,90,135,180,225,270,315].map((deg, i) => (
                  <ellipse key={i} cx="30" cy="13" rx="5" ry="9"
                    fill={i % 2 === 0 ? "#e65100" : "#ff8f00"}
                    transform={`rotate(${deg} 30 30)`} opacity="0.9"
                  />
                ))}
                {/* Inner petals */}
                {[22,67,112,157,202,247,292,337].map((deg, i) => (
                  <ellipse key={i} cx="30" cy="18" rx="3.5" ry="6"
                    fill={i % 2 === 0 ? "#ff8f00" : "#ffb300"}
                    transform={`rotate(${deg} 30 30)`} opacity="0.85"
                  />
                ))}
                {/* Center circle */}
                <circle cx="30" cy="30" r="8" fill="#e65100"/>
                <circle cx="30" cy="30" r="5" fill="#fff"/>
                <circle cx="30" cy="30" r="2.5" fill="#e65100"/>
              </svg>
            </div>
            <div className="navbar__logo-fullform-wrap">
              <span className="navbar__logo-line" />
              <span className="navbar__logo-fullform">
                Vivekanand Institute of Vocational<br />and Entrepreneurial Competence
              </span>
              <span className="navbar__logo-line" />
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="navbar__links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={active === label ? "active" : ""}
                  onClick={() => setActive(label)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href="#admission" className="navbar__cta">
            Apply Now →
          </a>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div className={`navbar__mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul className="navbar__mobile-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={active === label ? "active" : ""}
                onClick={() => { setActive(label); setMenuOpen(false); }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#admission" className="navbar__mobile-cta" onClick={() => setMenuOpen(false)}>
          Apply Now →
        </a>
      </div>
    </>
  );
}