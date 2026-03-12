import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../../api/client";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  imagePath?: string;
  createdAt: string;
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/projects");
        setProjects(response.data.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-10 h-10 border-4 border-violet-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div id="projects" className="flex flex-col items-center py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold "
      >
        Selected Projects
      </motion.h1>
      {projects.map((proj, index) => (
        <ProjectItem
          key={proj.id}
          id={proj.id}
          index={index}
          title={proj.title}
          year={new Date(proj.createdAt).getFullYear().toString()}
          description={proj.description}
          stack={proj.techStack}
          imageUrl={
            proj.imagePath ||
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
          }
        />
      ))}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="divider w-full h-[0.5px] bg-violet-600 mt-16 origin-left"
      />
    </div>
  );
};

export default ProjectsSection;

function ProjectItem({
  id,
  title,
  year,
  description,
  stack,
  imageUrl,
  index,
}: {
  id: string;
  title: string;
  year: string;
  description: string;
  stack: string[];
  imageUrl: string;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6 }}
        className="divider w-full h-[0.5px] bg-violet-600 my-10 sm:my-14 origin-left"
      />
      <div className="flex flex-col lg:flex-row max-container padding-container w-full rounded gap-6 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`flex flex-col justify-between w-full lg:w-1/2 ${
            isEven ? "lg:order-1" : "lg:order-last"
          }`}
        >
          <div className="flex flex-col gap-4 lg:gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-3xl md:text-4xl font-bold ${
                isEven ? "lg:text-left" : "lg:text-right"
              }`}
            >
              {title}{" "}
              <span className="text-sm md:text-base text-violet-300 font-normal">
                ({year})
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`text-sm md:text-base leading-relaxed text-gray-300 text-justify`}
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`flex flex-wrap gap-2 ${
                isEven ? "lg:justify-start" : "lg:justify-end"
              }`}
            >
              {stack.map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-violet-700/20 text-violet-300 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium border border-violet-500/20"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <button
            className={`group flex items-center w-34 mt-4 bg-violet-700 hover:bg-violet-600 text-white pl-2 py-2 rounded overflow-hidden transition-all duration-300 ${
              isEven ? "lg:self-start" : "lg:self-end"
            }`}
            aria-label={`See project ${title}`}
            onClick={() => navigate(`/project/${id}`)}
          >
            <span className="-translate-x-7 transition-all duration-300 group-hover:translate-x-0">
              <FaArrowRight />
            </span>
            <span className="-translate-x-2 transition-all duration-300 group-hover:translate-x-2">
              See Project
            </span>
            <span className="transition-all duration-300 group-hover:translate-x-100">
              <FaArrowRight />
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`flex items-center w-full lg:w-1/2 ${
            isEven ? "lg:order-last" : "lg:order-1"
          }`}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-full aspect-video shadow-2xl"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full  h-full rounded-xl object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
