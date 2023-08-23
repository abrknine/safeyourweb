import About from "../components/About";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Support from "../components/Support";

const Base: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Support />
    </div>
  );
};

export default Base;
