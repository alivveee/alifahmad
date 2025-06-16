import { motion } from "framer-motion";
import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { experiences, type Experience } from "../../utils/data";

const ExperienceSection = () => {
  const getIcon = (iconType: Experience["type"]) => {
    switch (iconType) {
      case "work":
        return <MdWork className="w-6 h-6 text-white" />;
      case "education":
        return <IoSchool className="w-6 h-6 text-white" />;
      default:
        return <MdWork className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-10">Experience</h1>
      <div className="relative mt-12">
        <div className="absolute left-6 top-0 h-full w-1 bg-violet-600"></div>
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative flex items-start">
              <div className="absolute left-0 w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
                {getIcon(exp.type)}
              </div>
              <div className="ml-16 md:ml-20 w-full max-w-2xl">
                <motion.div
                  initial={{
                    scale: 1,
                    opacity: 80,
                    y: 5,
                  }}
                  whileInView={{
                    scale: 1.05,
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    amount: 0.6, // 60% card terlihat untuk trigger
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="bg-white/90 text-gray-900 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {exp.title}{" "}
                    <span className="text-xs font-normal text-violet-500">
                      {exp.subtitle}
                    </span>
                  </h3>

                  <h4 className="font-semibold text-gray-700 mb-3 underline">
                    <a href={exp.company.href} target="_blank">
                      {exp.company.text}
                    </a>
                  </h4>

                  <div className="text-gray-600 leading-relaxed mb-4">
                    {exp.description.map((list, idx) => (
                      <div className="flex gap-1">
                        <span className="font-bold">• </span>
                        <p
                          key={idx}
                          className="text-gray-600 leading-relaxed mb-1"
                        >
                          {list.map((segment, index) =>
                            typeof segment === "string" ? (
                              segment
                            ) : (
                              <a
                                key={index}
                                href={segment.href}
                                target="_blank"
                                className="underline text-violet-900 hover:text-violet-600 transition-colors"
                              >
                                {segment.text}
                              </a>
                            )
                          )}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="text-sm font-medium text-gray-500">
                    {exp.period}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
