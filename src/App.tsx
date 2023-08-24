import { Routes, Route } from "react-router-dom";
import "./App.css";
import Base from "./routes/Base";
import ContactForm from "./components/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  );
}

export default App;
