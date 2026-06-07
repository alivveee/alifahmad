import { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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

  // Reset scroll on navigation, except when splash is showing initially
  useEffect(() => {
    if (!showSplash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, showSplash]);

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
