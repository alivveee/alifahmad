import { useEffect, useState, type FormEvent } from "react";
import { Plus, Pencil, Trash2, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import api from "../../api/client";
import type { AxiosError } from "axios";

interface ApiErrorResponse {
  message?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  imagePath?: string;
}

const ProjectManagement = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const fetchProjects = async () => {
    try {
      const response = await api.get("/projects");
      setProjects(response.data.data);
    } catch {
      toast.error("Gagal mengambil data project");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus project ini?"))
      return;

    try {
      await api.delete(`/projects/${id}`);
      toast.success("Project berhasil dihapus");
      fetchProjects();
    } catch {
      toast.error("Gagal menghapus project");
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Project Management</h1>
          <p className="text-gray-400 text-sm">
            Kelola daftar project yang tampil di portfolio.
          </p>
        </div>
        <button
          onClick={() => {
            setEditingProject(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-all font-medium"
        >
          <Plus size={18} />
          Add Project
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : projects.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-20 text-center">
            <p className="text-gray-500">
              Belum ada project. Klik "Add Project" untuk memulai.
            </p>
          </div>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-center justify-between group hover:bg-white/[0.08] transition-all"
            >
              <div className="flex items-center gap-6">
                <div className="w-24 h-16 bg-white/10 rounded-lg overflow-hidden flex items-center justify-center">
                  {project.imagePath ? (
                    <img
                      src={project.imagePath}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-600 text-xs">No Image</span>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <div className="flex gap-2 mt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 hover:bg-blue-600/20 text-blue-400 rounded-lg transition-all"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
                <button
                  onClick={() => {
                    setEditingProject(project);
                    setIsModalOpen(true);
                  }}
                  className="p-2 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-all"
                >
                  <Pencil size={18} />
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="p-2 hover:bg-red-600/20 text-red-400 rounded-lg transition-all"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {isModalOpen && (
        <ProjectModal
          project={editingProject}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            setIsModalOpen(false);
            fetchProjects();
          }}
        />
      )}
    </div>
  );
};

// --- Modal Component ---
const ProjectModal = ({
  project,
  onClose,
  onSuccess,
}: {
  project: Project | null;
  onClose: () => void;
  onSuccess: () => void;
}) => {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    description: project?.description || "",
    techStack: project?.techStack.join(", ") || "",
    link: project?.link || "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      ...formData,
      techStack: formData.techStack
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s !== ""),
    };

    try {
      if (project) {
        await api.put(`/projects/${project.id}`, payload);
        toast.success("Project berhasil diupdate");
      } else {
        await api.post("/projects", payload);
        toast.success("Project berhasil ditambahkan");
      }
      onSuccess();
    } catch (error) {
      const axiosError = error as AxiosError<ApiErrorResponse>;
      toast.error(
        axiosError.response?.data?.message || "Gagal menyimpan project",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-lg bg-[#141414] border border-white/10 rounded-2xl shadow-2xl p-8 animate-in zoom-in-95 duration-300">
        <h2 className="text-xl font-bold mb-6">
          {project ? "Edit Project" : "Add New Project"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Title
            </label>
            <input
              required
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="e.g. My Awesome App"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Description
            </label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Tell us about this project..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Tech Stack (comma separated)
            </label>
            <input
              required
              value={formData.techStack}
              onChange={(e) =>
                setFormData({ ...formData, techStack: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="React, TypeScript, Tailwind"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Link (URL)
            </label>
            <input
              type="url"
              value={formData.link}
              onChange={(e) =>
                setFormData({ ...formData, link: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="https://github.com/..."
            />
          </div>

          <div className="flex gap-3 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-white/5 hover:bg-white/10 py-2 rounded-lg font-medium transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-bold transition-all disabled:opacity-50"
            >
              {isLoading ? "Saving..." : "Save Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectManagement;
