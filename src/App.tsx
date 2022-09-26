import "./App.css";
import Homepage from "./layout/Homepage/Index";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Index";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Index";
import Create from "./layout/Create/Index";
import Strategies from "./layout/Strategies/Index";
import Opportunities from "./layout/Opportunities/Index";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="create" element={<Create />} />
        <Route path="strategies" element={<Strategies />} />
        <Route path="opportunities" element={<Opportunities />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
