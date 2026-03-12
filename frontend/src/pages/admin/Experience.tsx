import { useEffect, useState, type FormEvent } from "react";
import { Plus, Pencil, Trash2, Calendar } from "lucide-react";
import { toast } from "sonner";
import api from "../../api/client";

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

const ExperienceManagement = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingExp, setEditingExp] = useState<Experience | null>(null);

  const fetchExperiences = async () => {
    try {
      const response = await api.get("/experiences");
      setExperiences(response.data.data);
    } catch {
      toast.error("Gagal mengambil data pengalaman");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Hapus pengalaman ini?")) return;
    try {
      await api.delete(`/experiences/${id}`);
      toast.success("Pengalaman dihapus");
      fetchExperiences();
    } catch {
      toast.error("Gagal menghapus data");
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Experience Management</h1>
          <p className="text-gray-400 text-sm">
            Kelola riwayat pekerjaan dan pengalaman Anda.
          </p>
        </div>
        <button
          onClick={() => {
            setEditingExp(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-all"
        >
          <Plus size={18} />
          Add Experience
        </button>
      </div>

      <div className="space-y-4">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : experiences.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-20 text-center text-gray-500">
            Belum ada data.
          </div>
        ) : (
          experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white/5 border border-white/10 p-5 rounded-2xl flex justify-between items-start group"
            >
              <div>
                <h3 className="font-bold text-lg">{exp.role}</h3>
                <p className="text-blue-400 font-medium">{exp.company}</p>
                <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                  <Calendar size={14} />
                  {exp.period}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setEditingExp(exp);
                    setIsModalOpen(true);
                  }}
                  className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-all"
                >
                  <Pencil size={18} />
                </button>
                <button
                  onClick={() => handleDelete(exp.id)}
                  className="p-2 hover:bg-red-600/20 rounded-lg text-red-400 transition-all"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {isModalOpen && (
        <ExperienceModal
          experience={editingExp}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            setIsModalOpen(false);
            fetchExperiences();
          }}
        />
      )}
    </div>
  );
};

const ExperienceModal = ({
  experience,
  onClose,
  onSuccess,
}: {
  experience: Experience | null;
  onClose: () => void;
  onSuccess: () => void;
}) => {
  const [formData, setFormData] = useState({
    company: experience?.company || "",
    role: experience?.role || "",
    period: experience?.period || "",
    description: experience?.description || "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (experience) await api.put(`/experiences/${experience.id}`, formData);
      else await api.post("/experiences", formData);
      onSuccess();
    } catch {
      toast.error("Gagal menyimpan data");
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
      <div className="relative w-full max-w-lg bg-[#141414] border border-white/10 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-xl font-bold mb-6">
          {experience ? "Edit Experience" : "Add Experience"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2"
            placeholder="Company Name"
          />
          <input
            required
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2"
            placeholder="Job Role"
          />
          <input
            required
            value={formData.period}
            onChange={(e) =>
              setFormData({ ...formData, period: e.target.value })
            }
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2"
            placeholder="Period (e.g. 2022 - Present)"
          />
          <textarea
            required
            rows={3}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2"
            placeholder="Description"
          />
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-white/5 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-blue-600 py-2 rounded-lg font-bold disabled:opacity-50"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExperienceManagement;
