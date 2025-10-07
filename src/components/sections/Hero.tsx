import { TypeAnimation } from "react-type-animation";
import { FaArrowDown } from "react-icons/fa";
import Image from "../../utils/data";

const HeroSection = () => {
  return (
    <div className="hero container mx-auto px-4 md:px-18 py-6 grid md:grid-cols-[2fr_1fr]">
      <div className="flex flex-col justify-center mt-6 md:mt-0 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold">
          Alif Ahmad Mukhtar D.H.
        </h1>
        <h1 className="text-xl md:text-2xl">
          <span>Hello, I'm </span>
          <span className="font-bold">
            <TypeAnimation
              sequence={["Frontend Developer.", 1000, "Web Developer.", 1000]}
              wrapper="span"
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="mt-5 text-base/relaxed opacity-70">
          Passionate about building user-friendly web applications, I specialize
          in building accessible user interfaces. As a <b>developer</b>, I
          constantly explore modern technologies and ready to collaborate on
          building reliable and impactful products.
        </p>
        <div className="flex gap-3 mt-5 justify-center md:justify-start">
          <a
            href="https://drive.google.com/file/d/1s4yiw8paI9aHJr5xj8rGgi1dpnIb4UCS/view"
            target="_blank"
            className="flex bg-violet-700 hover:bg-violet-600 text-white px-4 py-2 rounded"
          >
            See My CV
          </a>
          <a
            href="#projects"
            className="flex items-center gap-1 bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded"
          >
            Projects <FaArrowDown />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center md:pl-6 order-first md:order-last">
        <img
          src={Image.HeroImage}
          alt="Hero Image"
          className="w-1/2 md:w-3/4 max-w-full rounded-full aspect-square object-cover md:aspect-auto filter grayscale hover:grayscale-25"
        />
      </div>
    </div>
  );
};

export default HeroSection;
