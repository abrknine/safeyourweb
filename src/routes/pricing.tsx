import Navbar from "../components/Navbar";
import ScrollToTopButton from "../components/ScrollToTop";
import Footer from "../components/Footer";
import PricingList from "../components/Pricing";


const PricingRoute: React.FC = () => {
  return (
    <div>
      <Navbar />
      <PricingList />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default PricingRoute;
