import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";
import ProgressBar from "./components/ProgressBar.tsx";
import SmoothScrolling from "./components/SmoothScrolling.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Footer from "./components/Footer.tsx";
import { BrowserRouter } from "react-router-dom";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScrolling>
        <ScrollToTop />
        <ProgressBar />
        <Navbar />
        <App />
        <Footer />
      </SmoothScrolling>
    </BrowserRouter>
  </StrictMode>
);
