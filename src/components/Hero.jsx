import "../styles/Hero.css";
import downloadIcon from "../assets/download.svg";
import applyIcon    from "../assets/applyOnlineIcon.svg";
import certificateIcon from "../assets/certificate.svg";
import classroom from "../assets/classroom.jpg";

export default function Hero() {
  return (
    <>
      {/* ── HERO BANNER ── */}
      <section className="hero">
        <div className="hero__overlay" />

        <div className="hero__content">
          <p className="hero__subtitle">VOCATIONAL TRAINING INSTITUTE</p>
          <h1 className="hero__title">
            GUJARAT'S LARGEST<br />
            SKILL TRAINING<br />
            INSTITUTE
          </h1>
          <p className="hero__desc">
            Empowering thousands of learners with industry-ready skills, <br />
            certifications, and career opportunities across Gujarat.
          </p>
          <a href="#courses" className="hero__btn">KNOW MORE</a>
        </div>

        {/* Slider dots */}
        <div className="hero__dots">
          <span className="hero__dot active" />
          <span className="hero__dot" />
          <span className="hero__dot" />
        </div>
      </section>

      {/* ── 3 FEATURE CARDS ── */}
      <section className="feature-cards">
        <div className="feature-card feature-card--orange">
          <div className="feature-card__icon">
            {/* Mouse / Apply icon */}
            <img src={applyIcon} alt="Apply" />
          </div>
          <div className="feature-card__body">
            <h3>APPLY ONLINE</h3>
            <p>One Click Closer to Success.</p>
          </div>
          <button className="feature-card__arrow">›</button>
        </div>

        <div className="feature-card feature-card--blue">
          <div className="feature-card__icon">
            {/* Download icon */}
           <img src={downloadIcon} alt="Downloads" />
          </div>
          <div className="feature-card__body">
            <h3>DOWNLOADS</h3>
            <p>Resources at Your Fingertips.</p>
          </div>
          <button className="feature-card__arrow">›</button>
        </div>

        <div className="feature-card feature-card--yellow">
          <div className="feature-card__icon">
            {/* Certificate icon */}
            <img src={certificateIcon} alt="Certification" />
          </div>
          <div className="feature-card__body">
            <h3>CERTIFICATION</h3>
            <p>Earn Credentials That Matter.</p>
          </div>
          <button className="feature-card__arrow">›</button>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="about-strip">
        <div className="about-strip__image">
          <div className="about-strip__img-placeholder">
            <span> 
                <img src={classroom} alt="Classroom" />
            </span>
          </div>
        </div>
        <div className="about-strip__content">
          <p className="about-strip__label">VOCATIONAL TRAINING COLLEGE</p>
          <h2 className="about-strip__title">VIVEC</h2>
          <p className="about-strip__text">
            VIVEC Institute is a leading skill development and vocational training institution committed to empowering individuals with industry-relevant knowledge and practical expertise. Through quality education, hands-on training, and career-focused programs, the institute helps students develop the skills needed to succeed in today's competitive job market. With a strong focus on employability, innovation, and lifelong learning, VIVEC Institute continues to shape future-ready professionals and contribute to workforce development across Gujarat.

          </p>
          <a href="#about" className="about-strip__link">KNOW MORE ↗</a>
        </div>
      </section>
    </>
  );
}