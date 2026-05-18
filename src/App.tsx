import { Routes, Route } from "react-router-dom";
import BlobCursor from "./components/BlobCursor";
import AboutSection from "./components/sections/About";
import ExperienceSection from "./components/sections/Experience";
import HeroSection from "./components/sections/Hero";
import ProjectsSection from "./components/sections/Projects";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div id="home" className="">
            <BlobCursor />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
          </div>
        }
      />

      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
