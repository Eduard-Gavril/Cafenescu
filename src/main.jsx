import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style_AM/index.css";
import "./style_AM/Tailwind_import.css" // Assicurati che qui ci sia la tua configurazione Tailwind e/o altre css
import { useEffect } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



const ScrollUp = () => {
  useEffect(() => {
    const scrollUp = document.getElementById("scroll-up");
    function onScroll() {
      if (window.scrollY >= 350) scrollUp.classList.add("show-scroll");
      else scrollUp.classList.remove("show-scroll");
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a href="#" className="scrollup" id="scroll-up">
      <i className="ri-arrow-up-line"></i>
    </a>
  );
};

export default ScrollUp;