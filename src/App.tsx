import { useEffect } from "react";
import Nav from "./components/Nav";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Stats from "./components/Stats";
import About from "./components/About";
import FlightLog from "./components/FlightLog";
import Flagship from "./components/Flagship";
import Subteams from "./components/Subteams";
import Gallery from "./components/Gallery";
import SponsorUs from "./components/SponsorUs";
import Sponsors from "./components/Sponsors";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import EasterEgg from "./components/EasterEgg";
import CursorTrail from "./components/CursorTrail";

export default function App() {
  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    el?.scrollIntoView();
  }, []);

  return (
    <>
      <LoadingScreen />
      <EasterEgg />
      <CursorTrail />
      <div className="grid-field" aria-hidden="true" />
      <div className="aurora-field" aria-hidden="true">
        <span className="aurora-blob-3" />
      </div>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <About />
        <FlightLog />
        <Flagship />
        <Subteams />
        <Gallery />
        <SponsorUs />
        <Sponsors />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
