import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";
import ProgressBar from "./components/ProgressBar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="container mx-auto">
      <ProgressBar />
      <Navbar />
      <App />
    </div>
  </StrictMode>
);
