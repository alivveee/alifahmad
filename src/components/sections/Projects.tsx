import { FaArrowRight } from "react-icons/fa";
import { project } from "../../utils/data";

const ProjectsSection = () => {
  return (
    <div id="projects" className="flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-5 text-center">
        Selected Projects
      </h1>
      {project.map((proj, index) => (
        <ProjectItem
          key={index}
          title={proj.title}
          year={proj.year}
          description={proj.description}
          stack={proj.stack}
          imageUrl={proj.imageUrl}
          projectUrl={proj.projectUrl}
        />
      ))}
      <div className="divider w-full h-[0.5px] bg-violet-600 mt-16"></div>
    </div>
  );
};

export default ProjectsSection;

function ProjectItem({
  title,
  year,
  description,
  stack,
  imageUrl,
  projectUrl,
}: {
  title: string;
  year: string;
  description: string;
  stack: string[];
  imageUrl: string;
  projectUrl: string;
}) {
  return (
    <>
      <div className="divider w-full h-[0.5px] bg-violet-600 my-10 sm:my-14"></div>

      <div className="flex flex-col md:flex-row max-container padding-container w-full rounded overflow-hidden gap-6 md:gap-12">
        {/* Text Section */}
        <div className="flex flex-col justify-between w-full md:w-1/2">
          <div className="flex flex-col gap-4 md:gap-6 md:pr-10">
            <h2 className="text-2xl md:text-3xl font-semibold">
              {title} <span className="text-sm text-violet-300">({year})</span>
            </h2>

            <p className="text-sm md:text-base leading-relaxed opacity-70">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-violet-700/20 text-violet-300 px-2 py-1 rounded text-xs md:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            className="group flex items-center w-34 mt-4 bg-violet-700 hover:bg-violet-600 text-white pl-2 py-2 rounded overflow-hidden transition-all duration-300"
            onClick={() => window.open(projectUrl, "_blank")}
          >
            {/* Panah kiri (muncul saat hover) */}
            <span className="-translate-x-7 transition-all duration-300 group-hover:translate-x-0">
              <FaArrowRight />
            </span>
            {/* Teks */}
            <span className="-translate-x-2 transition-all duration-300 group-hover:translate-x-2">
              See Project
            </span>
            {/* Panah kanan (hilang saat hover) */}
            <span className="transition-all duration-300 group-hover:translate-x-100">
              <FaArrowRight />
            </span>
          </button>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto md:h-full rounded-lg object-cover aspect-video md:aspect-auto bg-violet-100"
          />
        </div>
      </div>
    </>
  );
}
