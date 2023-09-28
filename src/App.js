import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar.js";

import Apply from "./pages/Apply.js";
import About from "./pages/About.js";
import FAQPage from "./pages/FAQPage.js";
import Home from "./pages/Home.js";
import Schedule from "./pages/Schedule.js";
import Sponsors from "./pages/Sponsors.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faqs" element={<FAQPage />} />
        <Route path="apply" element={<Apply />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <footer class="mt-auto">
        <p>Footer here with website icons and social media links</p>
      </footer>
    </div>
  );
}

export default App;
