import HeroImage from "../assets/hero-image.jpg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "../assets/tools/vscode.png";
import Tools2 from "../assets/tools/reactjs.png";
import Tools3 from "../assets/tools/nextjs-icon.svg";
import Tools4 from "../assets/tools/js.png";
import Tools5 from "../assets/tools/typescriptlang-icon.svg";
import Tools6 from "../assets/tools/tailwind.png";
import Tools7 from "../assets/tools/chakra-ui-icon.svg";
import Tools8 from "../assets/tools/git-scm-icon.svg";
import Tools9 from "../assets/tools/supabase-icon.svg";
import Tools10 from "../assets/tools/nodejs.png";
import Tools11 from "../assets/tools/figma.png";
import Tools12 from "../assets/tools/vitejsdev-icon.svg";

export const listTools: {
  id: number;
  gambar: string;
  nama: string;
  ket: string;
  dad: string;
}[] = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "JavaScript Library",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "React Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "JavaScript",
    ket: "Programming Language",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "TypeScript",
    ket: "Programming Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Tailwind CSS",
    ket: "CSS Framework",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Chakra UI",
    ket: "React UI Library",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Git",
    ket: "Version Control",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Supabase",
    ket: "Backend-as-a-Service",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Node JS",
    ket: "JavaScript Runtime",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design Tool",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Vite JS",
    ket: "Build Tool",
    dad: "1200",
  },
];

export interface Experience {
  id: number;
  type: string;
  title: string;
  subtitle: string;
  company: string;
  description: string;
  period: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    type: "internship",
    title: "Frontend Developer",
    subtitle: "Internship",
    company: "PT Aksamedia",
    description:
      "Developed and maintained the SchoolMate LMS using React.js, TypeScript, and related technologies. Contributed to the design system by building and updating UI components and collaborating with backend teams to integrate APIs.",
    period: "February 2024 - July 2024",
  },
  {
    id: 2,
    type: "education",
    title: "React Developer",
    subtitle: "Learning Path",
    company: "IDCamp Indosat Ooredoo",
    description:
      "Mastered React fundamentals and developed a notes app with full CRUD and REST API integration.",
    period: "November 2023 - January 2024",
  },
];
// import Proyek1 from "/assets/proyek/proyek1.webp";
// import Proyek2 from "/assets/proyek/proyek2.webp";
// import Proyek3 from "/assets/proyek/proyek3.webp";
// import Proyek4 from "/assets/proyek/proyek4.webp";
// import Proyek5 from "/assets/proyek/proyek5.webp";
// import Proyek6 from "/assets/proyek/proyek6.webp";

// export const listProyek = [
//   {
//     id: 1,
//     gambar: Proyek1,
//     nama: "Website Sekolah",
//     desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
//     tools: ["HTML", "CSS", "Javascript", "AOS"],
//     dad: "200",
//   },
//   {
//     id: 2,
//     gambar: Proyek2,
//     nama: "Company Profile",
//     desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
//     tools: ["HTML", "CSS", "Javascript", "AOS", "Swiper", "Lightbox Gallery"],
//     dad: "300",
//   },
//   {
//     id: 3,
//     gambar: Proyek3,
//     nama: "Web Pernikahan 2.0",
//     desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
//     tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
//     dad: "400",
//   },
//   {
//     id: 4,
//     gambar: Proyek4,
//     nama: "Website Course",
//     desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
//     tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
//     dad: "500",
//   },
//   {
//     id: 5,
//     gambar: Proyek5,
//     nama: "Web Portfolio",
//     desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
//     tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
//     dad: "600",
//   },
//   {
//     id: 6,
//     gambar: Proyek6,
//     nama: "Company Profile 2.0",
//     desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
//     tools: ["NextJS", "TailwindCSS", "Framermotion"],
//     dad: "700",
//   },
// ];
