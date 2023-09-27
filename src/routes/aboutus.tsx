import Navbar from "../components/Navbar";
import ScrollToTopButton from "../components/ScrollToTop";
import Footer from "../components/Footer";
import AboutUs from "../components/About";


const AboutUsRoute: React.FC = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default AboutUsRoute;
