import { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useLenis } from "@studio-freight/react-lenis";
import { cubicBezier } from "framer-motion";
import HeroSection from "./components/sections/Hero";
import DepthIndicator from "./components/ui/DepthIndicator";
import GlobalAtmosphere from "./components/GlobalAtmosphere";
import SplashScreen from "./components/ui/SplashScreen";

const Chatbot = lazy(() => import("./components/Chatbot"));

const AboutSection = lazy(() => import("./components/sections/About"));
const ExperienceSection = lazy(() => import("./components/sections/Experience"));
const ProjectsSection = lazy(() => import("./components/sections/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const PortfolioDetail = lazy(() => import("./pages/PortfolioDetail"));

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();
  const lenis = useLenis();

  // Reset scroll or scroll to hash when splash finishes or path changes
  useEffect(() => {
    if (showSplash) return;

    if (location.pathname === "/") {
      if (location.hash) {
        // Scroll to the hash after splash finishes, with a short delay to ensure DOM is fully painted
        const timeoutId = setTimeout(() => {
          if (lenis) {
            if (typeof lenis.resize === "function") {
              lenis.resize();
            }
            lenis.scrollTo(location.hash, {
              offset: -100,
              easing: cubicBezier(0.65, 0, 0.35, 1),
              duration: 1.2,
            });
            // Clear hash from URL immediately after starting scroll
            window.history.replaceState(null, "", "/");
          }
        }, 150);
        return () => clearTimeout(timeoutId);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash, showSplash, lenis]);

  return (
    <>
      {/* <DeepSeaCursor /> */}
      {showSplash && location.pathname === "/" ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : null}
      
      <div style={{ opacity: showSplash && location.pathname === "/" ? 0 : 1, transition: "opacity 0.8s ease-in" }}>
        <Routes>
          <Route
            path="/"
            element={
              <div id="home">
                <GlobalAtmosphere />
                <DepthIndicator />
                <HeroSection />
                <Suspense fallback={<div className="min-h-screen" />}>
                  <AboutSection />
                  <ExperienceSection />
                  <ProjectsSection />
                </Suspense>
              </div>
            }
          />

          <Route 
            path="/project/:slug" 
            element={
              <Suspense fallback={<div className="min-h-screen bg-abyss" />}>
                <ProjectDetail />
              </Suspense>
            } 
          />
          <Route 
            path="/portfolio/:slug" 
            element={
              <Suspense fallback={<div className="min-h-screen bg-abyss" />}>
                <PortfolioDetail />
              </Suspense>
            } 
          />
        </Routes>
      </div>

      {/* Global Chatbot — visible on all pages after splash */}
      {!(showSplash && location.pathname === "/") && (
        <Suspense fallback={null}>
          <Chatbot />
        </Suspense>
      )}
    </>
  );
}

export default App;
