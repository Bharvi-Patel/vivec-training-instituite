import "../styles/Footer.css";

import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";

const GALLERY_IMGS = [img1, img2, img3, img4];

const LogoSun = () => (
  <svg className="footer__logo-sun" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
    {[0,45,90,135,180,225,270,315].map((deg, i) => (
      <ellipse key={i} cx="30" cy="13" rx="5" ry="9"
        fill={i % 2 === 0 ? "#e65100" : "#ff8f00"}
        transform={`rotate(${deg} 30 30)`} opacity="0.9"
      />
    ))}
    {[22,67,112,157,202,247,292,337].map((deg, i) => (
      <ellipse key={i} cx="30" cy="18" rx="3.5" ry="6"
        fill={i % 2 === 0 ? "#ff8f00" : "#ffb300"}
        transform={`rotate(${deg} 30 30)`} opacity="0.85"
      />
    ))}
    <circle cx="30" cy="30" r="8" fill="#e65100"/>
    <circle cx="30" cy="30" r="5" fill="#fff"/>
    <circle cx="30" cy="30" r="2.5" fill="#e65100"/>
  </svg>
);


const FOOTER_COLS = [
  {
    title: "ABOUT US",
    links: [
      "Overview Of The Trust",
      "Mission And Vision",
      "Campus Facilities",
      "Staff And Faculty Profiles",
    ],
  },
  {
    title: "PROGRAMS",
    links: [
      "Vivekananda Institute Of Vocational Training & Entrepreneurial Competence",
      "Business Process Outsourcing Learning Center For Tribal Youths",
      "Adult Literacy For Women",
      "Youth Development Centers",
      "School Support Program (SSP)",
    ],
  },
  {
    title: "WHY VIVEC",
    links: [
      "Campus Activities",
      "Clubs And Organisations",
      "Student Services",
      "Career Services",
      "Alumni Network",
    ],
  },
  {
    title: "LINKS",
    links: ["Home", "Admission", "Events", "Blog", "Contact Us"],
  },
];

const SOCIAL = [
  {
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
      </svg>
    ),
  },
  {
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" stroke="none"/>
      </svg>
    ),
  },
  {
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M4 4l16 16M4 20L20 4"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">

      {/* Main footer columns */}
      <div className="footer__main">
        <div className="footer__grid">
          {FOOTER_COLS.map((col, i) => (
            <div className="footer__col" key={i}>
              <h4 className="footer__col-title">{col.title}</h4>
              <ul className="footer__col-links">
                {col.links.map((link, j) => (
                  <li key={j}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}

          {/* Logo col */}
          <div className="footer__col footer__col--logo">
            <div className="footer__logo">
              <div className="footer__logo-wordmark">
                <span className="footer__logo-name">VIVEC</span>
                <LogoSun />
              </div>
              <div className="footer__logo-lines">
                <span className="footer__logo-line" />
                <span className="footer__logo-fullform">
                  Vivekanand Institute of Vocational<br />
                  and Entrepreneurial Competence
                </span>
                <span className="footer__logo-line" />
              </div>
            </div>
            <p className="footer__copy">© 2026 VIVEC<br />All Rights Reserved</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">

          {/* Social */}
          <div className="footer__social">
            <span className="footer__social-label">CONNECT WITH US</span>
            <div className="footer__social-icons">
              {SOCIAL.map((s, i) => (
                <a key={i} href={s.href} className="footer__social-icon">{s.icon}</a>
              ))}
            </div>
          
          </div>

          {/* Subscribe */}
          <div className="footer__subscribe">
            <span className="footer__social-label">SUBSCRIBE WITH US</span>
            <div className="footer__subscribe-form">
              <input type="email" placeholder="Enter your email..." />
              <button>➤</button>
            </div>
          </div>

          {/* Instagram */}
<div className="footer__instagram">
  <span className="footer__social-label">@INSTAGRAM</span>
  <div className="footer__insta-grid">
    {GALLERY_IMGS.map((src, i) => (
      <img
        key={i}
        src={src}
        alt={`Instagram ${i + 1}`}
        className="footer__insta-cell"
      />
    ))}
  </div>
</div>

        </div>
      </div>

    </footer>
  );
}