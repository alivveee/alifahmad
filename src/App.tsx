import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutSection from "./components/sections/About";
import ExperienceSection from "./components/sections/Experience";
import HeroSection from "./components/sections/Hero";
import ProjectsSection from "./components/sections/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import PortfolioDetail from "./pages/PortfolioDetail";
import DepthIndicator from "./components/ui/DepthIndicator";
import GlobalAtmosphere from "./components/GlobalAtmosphere";
import DeepSeaCursor from "./components/ui/DeepSeaCursor";
import SplashScreen from "./components/ui/SplashScreen";

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
      <DeepSeaCursor />
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
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection />
              </div>
            }
          />

          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
