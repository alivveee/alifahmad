import { Routes, Route } from "react-router-dom";
import AboutSection from "./components/sections/About";
import ExperienceSection from "./components/sections/Experience";
import HeroSection from "./components/sections/Hero";
import ProjectsSection from "./components/sections/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import PortfolioDetail from "./pages/PortfolioDetail";
import DepthIndicator from "./components/ui/DepthIndicator";
import GlobalAtmosphere from "./components/GlobalAtmosphere";
import DeepSeaCursor from "./components/ui/DeepSeaCursor";

function App() {
  return (
    <>
      <DeepSeaCursor />
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
    </>
  );
}

export default App;
