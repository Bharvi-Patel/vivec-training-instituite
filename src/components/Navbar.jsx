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
        🎉 Admissions Open for 2024–25 Batch! Apply before 30th June &nbsp;|&nbsp;
        <span>Register Now →</span>
      </div>

      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="navbar__inner">

          {/* Logo */}
          <a href="#home" className="navbar__logo">
            <div className="navbar__logo-wordmark">
              <span className="navbar__logo-name">VIVEC</span>
              {/* Sun/gear icon in orange, SVG inline */}
              <svg className="navbar__logo-sun" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="10" fill="#e65100"/>
                {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
                  <rect
                    key={i}
                    x="22" y="4" width="4" height="8" rx="2"
                    fill="#ff6f00"
                    transform={`rotate(${deg} 24 24)`}
                  />
                ))}
                <circle cx="24" cy="24" r="6" fill="#fff"/>
                <text x="24" y="27.5" textAnchor="middle" fontSize="6" fontWeight="700" fill="#e65100">in foci</text>
              </svg>
            </div>
            <span className="navbar__logo-fullform">
              Vivekanand Institute of Vocational<br />and Entrepreneurial Competence
            </span>
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