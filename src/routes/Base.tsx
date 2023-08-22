import About from "../components/About";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Base: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
    </div>
  );
};

export default Base;
