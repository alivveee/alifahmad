import { useEffect, useState, type FormEvent } from "react";
import { Plus, Trash2, Zap } from "lucide-react";
import { toast } from "sonner";
import api from "../../api/client";

interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
}

const SkillManagement = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchSkills = async () => {
    try {
      const response = await api.get("/skills");
      setSkills(response.data.data);
    } catch {
      toast.error("Gagal mengambil data skills");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Hapus skill ini?")) return;
    try {
      await api.delete(`/skills/${id}`);
      toast.success("Skill dihapus");
      fetchSkills();
    } catch {
      toast.error("Gagal menghapus data");
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Skills Management</h1>
          <p className="text-gray-400 text-sm">
            Kelola daftar keahlian teknologi Anda.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-all"
        >
          <Plus size={18} />
          Add Skill
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <div className="col-span-full flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : skills.length === 0 ? (
          <div className="col-span-full bg-white/5 border border-white/10 rounded-2xl p-20 text-center text-gray-500">
            Belum ada data.
          </div>
        ) : (
          skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white/5 border border-white/10 p-4 rounded-2xl flex justify-between items-center group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600/10 text-blue-500 rounded-lg">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="font-bold">{skill.name}</h3>
                  <p className="text-xs text-gray-500">
                    {skill.category} • {skill.level}%
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(skill.id)}
                className="p-2 opacity-0 group-hover:opacity-100 hover:bg-red-600/20 rounded-lg text-red-400 transition-all"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>

      {isModalOpen && (
        <SkillModal
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            setIsModalOpen(false);
            fetchSkills();
          }}
        />
      )}
    </div>
  );
};

const SkillModal = ({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: () => void;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    level: 80,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await api.post("/skills", formData);
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
      <div className="relative w-full max-w-md bg-[#141414] border border-white/10 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-xl font-bold mb-6">Add New Skill</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2"
            placeholder="Skill Name (e.g. React)"
          />
          <input
            required
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2"
            placeholder="Category (e.g. Frontend)"
          />
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Proficiency Level: {formData.level}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={formData.level}
              onChange={(e) =>
                setFormData({ ...formData, level: parseInt(e.target.value) })
              }
              className="w-full"
            />
          </div>
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

export default SkillManagement;
