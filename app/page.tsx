import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import WhyUsSection from "./components/WhyUsSection";
import AboutSection from "./components/AboutSection";
import WorkSection from "./components/WorkSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <HeroSection />
      <WhyUsSection />
      <AboutSection />
      <WorkSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
