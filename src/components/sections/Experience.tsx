import { MdWork } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
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
              <div className="ml-20 w-full max-w-2xl">
                <div className="bg-white/90 text-gray-900 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {exp.title}{" "}
                      <span className="text-xs font-normal text-violet-500">
                        {exp.subtitle}
                      </span>
                    </h3>
                    <h4 className="font-semibold text-gray-700 mb-3">
                      {exp.company}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="text-sm font-medium text-gray-500">
                      {exp.period}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
