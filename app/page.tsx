import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import MarqueeStrip from "./components/MarqueeStrip";
import ServicesSection from "./components/ServicesSection";
import WorkSection from "./components/WorkSection";
import ProcessSection from "./components/ProcessSection";
import StudioSection from "./components/StudioSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <Nav />
      <HeroSection />
      <MarqueeStrip />
      <WorkSection />
      <ServicesSection />
      <ProcessSection />
      <StudioSection />
      <ContactSection />
    </main>
  );
}
