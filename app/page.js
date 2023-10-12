import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection.jsx";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}
