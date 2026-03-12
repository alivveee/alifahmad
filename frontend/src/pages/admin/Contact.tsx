import { useEffect, useState, type FormEvent } from "react";
import { Plus, Trash2, Mail } from "lucide-react";
import { toast } from "sonner";
import api from "../../api/client";

interface Contact {
  id: string;
  platform: string;
  value: string;
  url?: string;
}

const ContactManagement = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchContacts = async () => {
    try {
      const response = await api.get("/contacts");
      setContacts(response.data.data);
    } catch {
      toast.error("Gagal mengambil data kontak");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Hapus kontak ini?")) return;
    try {
      await api.delete(`/contacts/${id}`);
      toast.success("Kontak dihapus");
      fetchContacts();
    } catch {
      toast.error("Gagal menghapus data");
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Contact Management</h1>
          <p className="text-gray-400 text-sm">
            Kelola informasi kontak dan sosial media Anda.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-all"
        >
          <Plus size={18} />
          Add Contact
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {isLoading ? (
          <div className="col-span-full flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : contacts.length === 0 ? (
          <div className="col-span-full bg-white/5 border border-white/10 rounded-2xl p-20 text-center text-gray-500">
            Belum ada data.
          </div>
        ) : (
          contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white/5 border border-white/10 p-5 rounded-2xl flex justify-between items-center group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600/10 text-blue-500 rounded-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{contact.platform}</h3>
                  <p className="text-gray-400">{contact.value}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(contact.id)}
                className="p-2 opacity-0 group-hover:opacity-100 hover:bg-red-600/20 rounded-lg text-red-400 transition-all"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>

      {isModalOpen && (
        <ContactModal
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            setIsModalOpen(false);
            fetchContacts();
          }}
        />
      )}
    </div>
  );
};

const ContactModal = ({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: () => void;
}) => {
  const [formData, setFormData] = useState({
    platform: "",
    value: "",
    url: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await api.post("/contacts", formData);
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
        <h2 className="text-xl font-bold mb-6">Add Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            value={formData.platform}
            onChange={(e) =>
              setFormData({ ...formData, platform: e.target.value })
            }
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2"
            placeholder="Platform (e.g. Email, LinkedIn)"
          />
          <input
            required
            value={formData.value}
            onChange={(e) =>
              setFormData({ ...formData, value: e.target.value })
            }
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2"
            placeholder="Value (e.g. hello@example.com)"
          />
          <input
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2"
            placeholder="URL (Optional)"
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

export default ContactManagement;
