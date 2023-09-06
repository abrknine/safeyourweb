import CareerPage from "../components/Career";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTop";


const CareerPageRoute: React.FC = () => {
  return (
    <div>
      <CareerPage />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default CareerPageRoute;
