import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LocomotiveScroll from "locomotive-scroll";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
