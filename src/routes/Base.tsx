import About from "../components/About";
import Contact from "../components/Contact";
import FAQPage from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import ScrollToTopButton from "../components/ScrollToTop";
import Services from "../components/Services";
import Support from "../components/Support";
import WhyUs from "../components/WhyUs";

const Base: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Support />
      <WhyUs />
      <FAQPage />
      <Pricing />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Base;
