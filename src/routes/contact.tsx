import Navbar from "../components/Navbar";
import ScrollToTopButton from "../components/ScrollToTop";
import Footer from "../components/Footer";
import Contact from "../components/Contact";


const ContactRoute: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ContactRoute;
