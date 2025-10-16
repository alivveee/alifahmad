import HeroImage from "../assets/hero-image-potrait.jpg";

const Image = {
  HeroImage,
};

export default Image;

// Tools
import Tools1 from "../assets/tools/vscode.png";
import Tools2 from "../assets/tools/reactjs.png";
import Tools3 from "../assets/tools/nextjs-icon.svg";
import Tools4 from "../assets/tools/js.png";
import Tools5 from "../assets/tools/typescriptlang-icon.svg";
import Tools6 from "../assets/tools/tailwind.png";
import Tools7 from "../assets/tools/chakra-ui-icon.svg";
import Tools8 from "../assets/tools/git-scm-icon.svg";
import Tools9 from "../assets/tools/supabase-icon.svg";
import Tools10 from "../assets/tools/shadcn-ui-seeklogo.svg";
import Tools11 from "../assets/tools/figma.png";
import Tools12 from "../assets/tools/mongodb.svg";

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
    nama: "Shadcn UI",
    ket: "React UI Library",
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
    nama: "MongoDB",
    ket: "Database",
    dad: "1200",
  },
];

// Experience
export interface Experience {
  id: number;
  type: string;
  title: string;
  subtitle: string;
  company: { text: string; href: string };
  description: (string | { text: string; href: string })[][];
  period: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    type: "internship",
    title: "Frontend Developer",
    subtitle: "Internship",
    company: {
      text: "PT Aksamedia",
      href: "https://aksamedia.co.id/",
    },
    description: [
      [
        "Developed and maintained the ",
        {
          text: "SchoolMate LMS",
          href: "https://aksamedia.co.id/projects/modern-lms-k-12-education-with-flexible-modules-aligned-to-merdeka-curriculum-serving-tens-of-thousands-students",
        },
        " using React.js, TypeScript and Chakra UI.",
      ],
      [
        "Contributing to the development of a design system used by the front-end team, including implementing new components and updating existing ones.",
      ],
      [
        "Colaborating with the back-end team to manage data through APIs and worked closely with the design team to ensure accurate implementation of UI designs",
      ],
      [
        "Actively engaged in debugging and resolving issues to ensure optimal performance.",
      ],
    ],
    period: "February 2024 - July 2024",
  },
  {
    id: 2,
    type: "education",
    title: "React App Developer",
    subtitle: "Scholarship",
    company: {
      text: "IDCamp | Indosat",
      href: "https://drive.google.com/file/d/1Yf1-tiLYKMTAysNX3lB-InJ1BnpedWk1/view?usp=sharing",
    },
    description: [
      [
        "Mastered React fundamentals and developed a notes app with full CRUD and REST API integration.",
      ],
      [
        "Curriculum by ",
        {
          text: "Dicoding Indonesia",
          href: "https://www.dicoding.com/",
        },
      ],
    ],
    period: "November 2023 - January 2024",
  },
];

// Socials
import Instagram from "../assets/socials/instagram-tile.svg";
import Linkedin from "../assets/socials/linkedin-tile.svg";
import Github from "../assets/socials/github-mark-white.svg";
import Email from "../assets/socials/email-logo.png";

export const socials: {
  id: number;
  name: string;
  image: string;
  href: string;
}[] = [
  {
    id: 1,
    name: "Instagram",
    image: Instagram,
    href: "https://www.instagram.com/alifamukhtr/",
  },
  {
    id: 2,
    name: "Linkedin",
    image: Linkedin,
    href: "https://www.linkedin.com/in/alifamukhtr",
  },
  {
    id: 3,
    name: "Github",
    image: Github,
    href: "https://github.com/alivveee",
  },
  {
    id: 4,
    name: "Email",
    image: Email,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=alifahmadmukhtar@gmail.com&su=Hello%20Alif&body=I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!",
  },
];

// Projects
export const project: {
  title: string;
  year: string;
  description: string;
  stack: string[];
  imageUrl: string;
  projectUrl: string;
}[] = [
  {
    title: "PAUD Connect",
    year: "2025",
    description:
      "PAUD Connect is a web-based information system developed for PAUD Mawar Tlogomas as part of a community service project at Universitas Brawijaya with my partner. It features an admin dashboard for managing student and alumni data, teacher accounts, an activity gallery, and school statistics.",
    stack: [
      "Next.js",
      "TypeScript",
      "ChakraUI",
      "TailwindCSS",
      "MongoDB",
      "Google Drive",
    ],
    imageUrl: "projects/paud-connect.png",
    projectUrl: "https://paudmawar.vercel.app/",
  },
  {
    title: "Distributor Management System",
    year: "2024",
    description:
      "Nusantara Network Route Planner is a web and mobile-based information system designed to optimize distribution routes and field task management for PT Nusantara Network. Built with ReactJS, React Native, and Google Distance Matrix API, it uses a Genetic Algorithm to calculate the most efficient delivery routes. The system enables real-time employee tracking, customer data management, and automated route planning, significantly improving operational efficiency compared to manual methods.",
    stack: [
      "Next.js",
      "React Native",
      "TypeScript",
      "ShadcnUI",
      "TailwindCSS",
      "Supabase",
    ],
    imageUrl: "projects/nusantara-net.png",
    projectUrl: "https://github.com/alivveee/nusantaranet-distributor-admin",
  },
];
