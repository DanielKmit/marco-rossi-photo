import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Services from "@/components/Services";
import Press from "@/components/Press";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Gallery />
      <About />
      <Services />
      <Press />
      <Contact />
    </main>
  );
}
