import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../../api/client";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

interface Contact {
  id: string;
  platform: string;
  value: string;
  url?: string;
}

const AboutSection = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await api.get("/contacts");
        setContacts(response.data.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    fetchContacts();
  }, []);

  const getIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes("github")) return <Github size={24} />;
    if (p.includes("linkedin")) return <Linkedin size={24} />;
    if (p.includes("instagram")) return <Instagram size={24} />;
    return <Mail size={24} />;
  };

  return (
    <section id="about">
      <div className="flex flex-col max-container padding-container items-center py-20">
        <div className="w-[4px] h-16 bg-violet-600 rounded-full"></div>
        <h1 className="text-4xl md:text-5xl m-8 font-bold">About Me</h1>
        <div className="flex flex-col gap-4 text-center text-base/relaxed max-w-3xl">
          <p>
            I'm Alif, a fresh graduate in Information Technology from Brawijaya
            University with a strong passion for front-end development.
            Originally from Probolinggo, East Java, Indonesia, I love exploring
            modern web technologies and continuously seek opportunities to learn
            and grow.
          </p>
          <p>
            My journey began with a deep curiosity and a passion for creating
            meaningful digital experiences. I've gained hands-on experience in
            building and maintaining complex web applications through various
            projects and internships.
          </p>
          <p>
            Outside of tech, I’m passionate about health and wellness, enjoy
            watching movies, and occasionally unwind with video games.
          </p>
        </div>

        <h1 className="mt-12 font-bold text-xl">
          Let's connect or just say Hi
          <motion.span
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            className="inline-block text-xl ml-2"
          >
            👋
          </motion.span>
        </h1>
        <div className="flex gap-6 mt-6">
          {contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.url || `mailto:${contact.value}`}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-violet-500 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
              title={contact.platform}
            >
              {getIcon(contact.platform)}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
