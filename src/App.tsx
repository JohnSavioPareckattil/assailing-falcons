import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import FlightLog from "./components/FlightLog";
import Flagship from "./components/Flagship";
import Subteams from "./components/Subteams";
import People from "./components/People";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="grid-field" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <FlightLog />
        <Flagship />
        <Subteams />
        <People />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
