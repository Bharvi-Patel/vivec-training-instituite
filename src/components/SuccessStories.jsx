import "../styles/SuccessStories.css";
import img01 from "../assets/ss.jpeg";
import img1 from "../assets/wantToStudy01.jpeg";
import img2 from "../assets/wantToStudy02.jpeg";
import img3 from "../assets/wantToStudy03.jpeg";
import img4 from "../assets/wantToStudy04.jpeg";
import img5 from "../assets/howToStudy01.jpeg";
import img6 from "../assets/images7.jpeg";

const PHOTOS = [
    img01,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
];

export default function SuccessStories() {
  return (
    <section className="success">
      <div className="success__header">
        <p className="success__eyebrow">OUR CAMPUS HAS A LOT TO OFFER FOR OUR STUDENTS</p>
        <h2 className="success__title">OUR SUCCESS STORIES</h2>
      </div>
      <div className="success__grid">
        {PHOTOS.map((src, i) => (
          <div
            className="success__cell"
            key={i}
            style={{ backgroundImage: `url(${src})` }}
          >
            <div className="success__cell-overlay" />
          </div>
        ))}
      </div>
    </section>
  );
}