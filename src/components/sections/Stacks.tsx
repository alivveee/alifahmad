import { listTools } from "../../utils/data";
import { motion } from "framer-motion";

const StackSection = () => {
  return (
    <section id="technologies">
      <div className="flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold "
        >
          Technologies
        </motion.h1>
        <div className="stacks grid grid-cols-3 md:grid-cols-6 gap-5 md:gap-10 mt-10">
          {listTools.map((tool) => (
            <div
              key={tool.id}
              className="group flex justify-center items-center size-24 bg-zinc-700/50 hover:bg-zinc-600/50 rounded"
            >
              <img
                src={tool.gambar}
                alt={tool.nama}
                className="size-16 group-hover:scale-120 transition duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;
