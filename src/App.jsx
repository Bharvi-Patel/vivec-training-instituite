import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import WhatToStudy from "./components/WhatToStudy";
import HowToStudy from "./components/HowToStudy";
import Testimonials from "./components/Testimonials";
import WorkingWith from "./components/WorkingWith";
import SuccessStories from "./components/SuccessStories";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <WhatToStudy />
      <HowToStudy />
      <Testimonials />
      <WorkingWith />
      <SuccessStories />
      <Footer />
    </div>
  );
}