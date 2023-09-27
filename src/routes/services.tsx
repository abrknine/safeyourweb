import Navbar from "../components/Navbar";
import ScrollToTopButton from "../components/ScrollToTop";
import Services from "../components/Services";
import Footer from "../components/Footer";


const ServicesRoute: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Services />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ServicesRoute;
