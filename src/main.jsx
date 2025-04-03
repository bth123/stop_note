import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages_bitch/home";

const About = () => <h1>About Page</h1>;

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);