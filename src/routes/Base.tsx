import About from "../components/About";
import Hero from "../components/Hero";
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
    </div>
  );
};

export default Base;
