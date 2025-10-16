import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";
import ProgressBar from "./components/ProgressBar.tsx";
import SmoothScrolling from "./components/SmoothScrolling.tsx";
import Footer from "./components/Footer.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScrolling>
        <ProgressBar />
        <Navbar />
        <App />
        <Footer />
      </SmoothScrolling>
    </BrowserRouter>
  </StrictMode>
);
