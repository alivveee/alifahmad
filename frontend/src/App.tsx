import { Routes, Route } from "react-router-dom";
import BlobCursor from "./components/BlobCursor";
import AboutSection from "./components/sections/About";
import ExperienceSection from "./components/sections/Experience";
import HeroSection from "./components/sections/Hero";
import ProjectsSection from "./components/sections/Projects";
import StackSection from "./components/sections/Stacks";
import ProjectDetail from "./pages/ProjectDetail";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";
import Footer from "./components/Footer";

// Admin Pages
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import ProjectManagement from "./pages/admin/Projects";
import ExperienceManagement from "./pages/admin/Experience";
import SkillManagement from "./pages/admin/Skills";
import ContactManagement from "./pages/admin/Contact";

function App() {
  return (
    <Routes>
      {/* Portfolio Public Routes */}
      <Route
        path="/"
        element={
          <div id="home" className="space-y-12 md:space-y-28 overflow-hidden">
            <ProgressBar />
            <Navbar />
            <BlobCursor />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <StackSection />
            <ProjectsSection />
            <Footer />
          </div>
        }
      />

      <Route
        path="/project/:id"
        element={
          <>
            <ProgressBar />
            <Navbar />
            <ProjectDetail />
            <Footer />
          </>
        }
      />

      {/* Admin CMS Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/projects" element={<ProjectManagement />} />
          <Route path="/admin/experience" element={<ExperienceManagement />} />
          <Route path="/admin/skills" element={<SkillManagement />} />
          <Route path="/admin/contact" element={<ContactManagement />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
