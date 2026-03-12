import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/client";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  imagePath?: string;
}

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await api.get(`/projects/${id}`);
        setProject(response.data.data);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-violet-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10">
        <h1 className="text-2xl font-bold mb-4">Project tidak ditemukan</h1>
        <Link to="/" className="text-violet-500 hover:underline">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-container padding-container py-20 animate-in fade-in duration-700">
      <Link
        to="/"
        className="inline-flex items-center text-violet-500 hover:text-violet-400 font-medium mb-10 transition-colors"
      >
        <span className="mr-2">←</span> Back to Portfolio
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
          <img
            src={
              project.imagePath ||
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
            }
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-violet-600/20 text-violet-400 px-3 py-1 rounded-lg text-sm border border-violet-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="text-gray-300 text-lg leading-relaxed mb-10 whitespace-pre-wrap">
            {project.description}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-xl shadow-violet-600/20 w-fit"
            >
              Visit Project Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
