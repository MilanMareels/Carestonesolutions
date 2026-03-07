import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";
import ServiceArea from "./components/serviceArea";
import Services from "./components/services";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Services />
      <ServiceArea />
      <Contact />
    </div>
  );
}
