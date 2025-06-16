import BlobCursor from "./components/BlobCursor";
import ExperienceSection from "./components/sections/Experience";
import HeroSection from "./components/sections/Hero";
import ProjectsSection from "./components/sections/Projects";
import StackSection from "./components/sections/Stacks";

function App() {
  return (
    <div className="px-4 md:px-12">
      <BlobCursor />

      {/* Hero */}
      <HeroSection />

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
