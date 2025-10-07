import BlobCursor from "./components/BlobCursor";
import AboutSection from "./components/sections/About";
import ExperienceSection from "./components/sections/Experience";
import HeroSection from "./components/sections/Hero";
import ProjectsSection from "./components/sections/Projects";
import StackSection from "./components/sections/Stacks";

function App() {
  return (
    <div className="space-y-20 md:space-y-40">
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
