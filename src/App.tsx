import { Routes, Route } from "react-router-dom";
import "./App.css";
import Base from "./routes/Base";
import CareerPage from "./routes/CareerPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/career" element={<CareerPage />} />
      </Routes>
    </>
  );
}

export default App;
