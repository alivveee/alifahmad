import { Routes, Route } from "react-router-dom";
import AboutSection from "./components/sections/About";
import ExperienceSection from "./components/sections/Experience";
import HeroSection from "./components/sections/Hero";
import ProjectsSection from "./components/sections/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import PortfolioDetail from "./pages/PortfolioDetail";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div id="home">
            {/* <BlobCursor /> */}
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
  );
}

export default App;
