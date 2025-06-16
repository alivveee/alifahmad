import { listTools } from "../../utils/data";

const StackSection = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="text-3xl font-bold mt-10">Stacks I Use the Most</h1>
      <div className="stacks grid grid-cols-3 md:grid-cols-6 gap-5 md:gap-10 mt-5">
        {listTools.map((tool) => (
          <div
            key={tool.id}
            className="group flex justify-center items-center size-24 bg-zinc-700/50 hover:bg-zinc-600/50 rounded"
          >
            <img
              src={tool.gambar}
              alt={tool.nama}
              className="w-16 group-hover:scale-120 transition duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackSection;
