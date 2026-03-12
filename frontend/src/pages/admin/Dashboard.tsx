import { useEffect, useState } from "react";
import {
  Briefcase,
  History,
  Cpu,
  Contact,
  TrendingUp,
  Clock,
} from "lucide-react";
import api from "../../api/client";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    projects: 0,
    experiences: 0,
    skills: 0,
    contacts: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [projects, experiences, skills, contacts] = await Promise.all([
          api.get("/projects"),
          api.get("/experiences"),
          api.get("/skills"),
          api.get("/contacts"),
        ]);

        setStats({
          projects: projects.data.data.length,
          experiences: experiences.data.data.length,
          skills: skills.data.data.length,
          contacts: contacts.data.data.length,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Total Projects",
      value: stats.projects,
      icon: Briefcase,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Work Experiences",
      value: stats.experiences,
      icon: History,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      title: "Skills Listed",
      value: stats.skills,
      icon: Cpu,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Contacts Info",
      value: stats.contacts,
      icon: Contact,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome Back, Admin!</h1>
        <p className="text-gray-400">
          Berikut adalah ringkasan konten portfolio Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <TrendingUp className="text-gray-500" size={20} />
            </div>
            <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
            <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Clock size={20} className="text-blue-500" />
            Recent Activities
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-3 hover:bg-white/5 rounded-xl transition-all cursor-default"
              >
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                <div>
                  <p className="text-sm font-medium text-gray-200">
                    Menambahkan Project Baru: "Quantum Dashboard"
                  </p>
                  <p className="text-xs text-gray-500 mt-1">2 jam yang lalu</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center mb-4">
            <Cpu size={32} />
          </div>
          <h3 className="text-lg font-bold">System Status</h3>
          <p className="text-gray-400 text-sm mt-2 max-w-xs">
            Server Backend berjalan dengan normal di port 5000. Semua database
            terhubung dengan aman.
          </p>
          <div className="mt-6 flex items-center gap-2 text-emerald-500 text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            API Online
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
