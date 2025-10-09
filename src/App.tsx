import BlobCursor from "./components/BlobCursor";
import AboutSection from "./components/sections/About";
import ExperienceSection from "./components/sections/Experience";
import HeroSection from "./components/sections/Hero";
import ProjectsSection from "./components/sections/Projects";
import StackSection from "./components/sections/Stacks";

function App() {
  return (
    <div id="home" className="space-y-12 md:space-y-28">
      <BlobCursor />

      {/* Hero */}
      <HeroSection />

      {/* About */}
      <AboutSection />

      {/* Experience */}
      <ExperienceSection />

      {/* Stacks */}
      <StackSection />

      {/* Projects */}
      <ProjectsSection />
    </div>
  );
}

export default App;
