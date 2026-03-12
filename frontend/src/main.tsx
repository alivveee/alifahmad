import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SmoothScrolling from "./components/SmoothScrolling.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <SmoothScrolling>
          <App />
          <Toaster position="top-right" richColors theme="dark" />
        </SmoothScrolling>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
