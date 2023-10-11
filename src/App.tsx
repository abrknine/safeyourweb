import { Routes, Route } from "react-router-dom";
import "./App.css";
import Base from "./routes/Base";
import CareerPage from "./routes/CareerPage";
import ServicesRoute from "./routes/services";
import AboutUsRoute from "./routes/aboutus";
import PricingRoute from "./routes/pricing";
import ContactRoute from "./routes/contact";
import Login from "./components/admin/Login";
import AdminDashboard from "./components/admin/AdminDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/services" element={<ServicesRoute />} />
        <Route path="/about" element={<AboutUsRoute />} />
        <Route path="/pricing" element={<PricingRoute />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<ContactRoute />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
