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
  slug: string;
  type: string;
  title: string;
  subtitle: string;
  company: { text: string; href: string; logo?: string };
  companyProfile?: string;
  shortDescription?: string;
  description: (string | { text: string; href: string })[][];
  period: string;
  status?: string;
  category?: string;
  year?: string;
  galleryImages?: string[];
}

export interface LocalizedField<T> {
  en: T;
  id: T;
}

interface RawExperience {
  id: number;
  slug: string;
  type: string;
  title: string;
  subtitle: LocalizedField<string>;
  company: { text: string; href: string; logo?: string };
  companyProfile?: LocalizedField<string>;
  shortDescription?: LocalizedField<string>;
  description: LocalizedField<(string | { text: string; href: string })[][]>;
  period: LocalizedField<string>;
  status?: LocalizedField<string>;
  category?: LocalizedField<string>;
  year?: string;
  galleryImages?: string[];
}

const experiencesData: RawExperience[] = [
  {
    id: 3,
    slug: "pt-node-solusi-teknologi",
    type: "work",
    title: "Frontend Engineer",
    subtitle: {
      en: "Contract",
      id: "Kontrak",
    },
    company: {
      text: "PT Node Solusi Teknologi",
      href: "https://nodewave.id",
      logo: "https://nodewave.id/favicon.ico",
    },
    companyProfile: {
      en: "Nodewave (PT. Node Solusi Teknologi) is a Jakarta-based technology company focusing on software development, ERP systems, and Artificial Intelligence (AI) integration to help digitalize businesses.",
      id: "Nodewave (PT. Node Solusi Teknologi) adalah perusahaan teknologi asal Jakarta yang berfokus pada pengembangan perangkat lunak, sistem ERP, dan integrasi Kecerdasan Buatan (AI) untuk membantu digitalisasi bisnis.",
    },
    shortDescription: {
      en: "Developed and maintained multiple web-based systems including RMS, DMS, Backoffice, and Company Profile platforms.",
      id: "Mengembangkan dan memelihara berbagai sistem berbasis web termasuk platform RMS, DMS, Backoffice, dan Profil Perusahaan.",
    },
    status: {
      en: "Ongoing",
      id: "Sedang Berjalan",
    },
    category: {
      en: "Web Development",
      id: "Web Development",
    },
    year: "2025 - 2026",
    galleryImages: [
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1779803804/e9cbe70a-a527-4e68-9710-a1daac7d789c.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1779803907/8928434b-a4be-4ab1-a5e2-9d897b034c8a.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1779804114/0c4122d4-3003-4141-9975-56f309cd5de4.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1779806169/c7b0064e-ac5e-46ed-9836-740cc78511df.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1779804713/44ba81d5-63f8-4bd3-86df-2a98c9cb64bd.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1779804820/2862f46a-385c-4142-af2c-7c12110b4938.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1779801246/89yew89y28j_201332_b7sot9.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1779802940/7b01b90e-c2bc-45a5-b085-f14d63883b3d.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1779803064/c8188fb2-d57c-4e17-999a-5e902f774610.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1779802858/9d7a5aa2-7d72-4ba5-a3b5-eca170fa76e5.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1779804552/b8599ed9-7767-4fda-b22e-ef537c28250a.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1779805263/6adf6ca1-ccc8-4826-af74-58ed63900529.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1779805270/fe8d2e48-8578-42dc-ba07-b2c8dd90615e.png",
    ],
    description: {
      en: [
        [
          "Developed and maintained multiple web-based systems including RMS, DMS, Backoffice, and Company Profile platforms.",
        ],
        [
          "Built scalable and responsive user interfaces using React.js, Next.js, TypeScript, Tailwind CSS, Shadcn UI, Material UI, Redux Toolkit, Zustand, and React Query.",
        ],
        [
          "Collaborated closely with Product Managers, Backend Engineers, and QA teams to deliver production-ready features and improve system reliability.",
        ],
        [
          "Optimized performance, SEO, and continuous bug fixing to ensure system stability and a better user experience.",
        ],
      ],
      id: [
        [
          "Mengembangkan dan memelihara berbagai sistem berbasis web termasuk platform RMS, DMS, Backoffice, dan Profil Perusahaan.",
        ],
        [
          "Membangun antarmuka pengguna yang dapat diskalakan dan responsif menggunakan React.js, Next.js, TypeScript, Tailwind CSS, Shadcn UI, Material UI, Redux Toolkit, Zustand, dan React Query.",
        ],
        [
          "Berkolaborasi erat dengan Product Manager, Backend Engineer, dan tim QA untuk menghadirkan fitur siap produksi dan meningkatkan keandalan sistem.",
        ],
        [
          "Mengoptimalkan performa, SEO, dan terus-menerus memperbaiki bug untuk memastikan stabilitas sistem dan pengalaman pengguna yang lebih baik.",
        ],
      ],
    },
    period: {
      en: "November 2025 - May 2026",
      id: "November 2025 - Mei 2026",
    },
  },
  {
    id: 4,
    slug: "pt-azlogistik-dot-com",
    type: "work",
    title: "Frontend Programmer",
    subtitle: {
      en: "Project-based",
      id: "Berbasis Proyek",
    },
    company: {
      text: "PT AZlogistik Dot Com",
      href: "https://muatmuat.com/",
      logo: "https://muatmuat.com/favicon.ico",
    },
    companyProfile: {
      en: "PT AZlogistik Dot Com provides comprehensive logistics marketplace solutions to connect shippers and transporters.",
      id: "PT AZlogistik Dot Com menyediakan solusi marketplace logistik komprehensif untuk menghubungkan pengirim dan pengangkut.",
    },
    shortDescription: {
      en: "Built and maintained a marketplace web app with React, Next.js, Zustand, React Hook Form, and Tailwind CSS.",
      id: "Membangun dan memelihara aplikasi web marketplace dengan React, Next.js, Zustand, React Hook Form, dan Tailwind CSS.",
    },
    status: {
      en: "Completed",
      id: "Selesai",
    },
    category: {
      en: "Web App",
      id: "Web App",
    },
    year: "2025",
    galleryImages: [
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780383924/8b10abd4-0dc6-4fac-8dc0-fb9a5529c6a2.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780384211/a0a65bff-ebfa-4d95-a10f-58ef229311bc.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780383831/dbb54962-54ad-41e8-a842-e958e0af7b01.png",
    ],
    description: {
      en: [
        [
          "Built and maintained a marketplace web app with React, Next.js, Zustand, React Hook Form, and Tailwind CSS.",
        ],
        [
          "Translated Figma designs into responsive, pixel-perfect interfaces across devices.",
        ],
        ["Integrated APIs to support core website functionality."],
      ],
      id: [
        [
          "Membangun dan memelihara aplikasi web marketplace dengan React, Next.js, Zustand, React Hook Form, dan Tailwind CSS.",
        ],
        [
          "Menerjemahkan desain Figma ke antarmuka responsif dan pixel-perfect di berbagai perangkat.",
        ],
        ["Mengintegrasikan API untuk mendukung fungsionalitas utama situs web."],
      ],
    },
    period: {
      en: "November 2025",
      id: "November 2025",
    },
  },
  {
    id: 1,
    slug: "pt-aksamedia",
    type: "internship",
    title: "Frontend Developer",
    subtitle: {
      en: "Internship",
      id: "Magang",
    },
    company: {
      text: "PT Aksamedia Mulia Digital",
      href: "https://aksamedia.co.id/",
      logo: "https://aksamedia.co.id/logo-aksa.svg",
    },
    companyProfile: {
      en: "Aksamedia is an IT consultant focusing on providing modern software solutions for business and education sectors.",
      id: "PT Aksamedia adalah konsultan IT yang berfokus pada penyediaan solusi perangkat lunak modern untuk sektor bisnis dan pendidikan.",
    },
    shortDescription: {
      en: "Developed and maintained the SchoolMate LMS using React.js, TypeScript and Chakra UI.",
      id: "Mengembangkan dan memelihara SchoolMate LMS menggunakan React.js, TypeScript dan Chakra UI.",
    },
    status: {
      en: "Completed",
      id: "Selesai",
    },
    category: {
      en: "LMS Development",
      id: "LMS Development",
    },
    year: "2024",
    galleryImages: [
      "/portfolio/schoolmate.png",
      "https://compro.aksamedia.co.id/storage/case-studies/669de497ce254-jasa-buat-website.jpg",
    ],
    description: {
      en: [
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
      id: [
        [
          "Mengembangkan dan memelihara ",
          {
            text: "SchoolMate LMS",
            href: "https://aksamedia.co.id/projects/modern-lms-k-12-education-with-flexible-modules-aligned-to-merdeka-curriculum-serving-tens-of-thousands-students",
          },
          " menggunakan React.js, TypeScript dan Chakra UI.",
        ],
        [
          "Berkontribusi pada pengembangan sistem desain yang digunakan oleh tim front-end, termasuk mengimplementasikan komponen baru dan memperbarui yang sudah ada.",
        ],
        [
          "Berkolaborasi dengan tim back-end untuk mengelola data melalui API dan bekerja erat dengan tim desain untuk memastikan implementasi desain UI yang akurat",
        ],
        [
          "Terlibat aktif dalam debugging dan penyelesaian masalah untuk memastikan performa yang optimal.",
        ],
      ],
    },
    period: {
      en: "February 2024 - July 2024",
      id: "Februari 2024 - Juli 2024",
    },
  },
  {
    id: 2,
    slug: "idcamp-indosat",
    type: "education",
    title: "React App Developer",
    subtitle: {
      en: "Scholarship",
      id: "Beasiswa",
    },
    company: {
      text: "IDCamp | Indosat",
      href: "https://idcamp.ioh.co.id/",
      logo: "https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/dicoding-logo-full.png",
    },
    companyProfile: {
      en: "IDCamp is a scholarship program by Indosat Ooredoo Hutchison in partnership with Dicoding Indonesia, aimed at nurturing digital talents.",
      id: "IDCamp adalah program beasiswa dari Indosat Ooredoo Hutchison yang bekerja sama dengan Dicoding Indonesia untuk membina talenta digital.",
    },
    shortDescription: {
      en: "Mastered React fundamentals and developed a notes app with full CRUD and REST API integration.",
      id: "Menguasai dasar-dasar React dan mengembangkan aplikasi catatan dengan operasi CRUD lengkap dan integrasi REST API.",
    },
    status: {
      en: "Completed",
      id: "Selesai",
    },
    category: {
      en: "Education",
      id: "Edukasi",
    },
    year: "2023 - 2024",
    galleryImages: ["/portfolio/idcamp.png"],
    description: {
      en: [
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
      id: [
        [
          "Menguasai dasar-dasar React dan mengembangkan aplikasi catatan dengan operasi CRUD lengkap dan integrasi REST API.",
        ],
        [
          "Kurikulum oleh ",
          {
            text: "Dicoding Indonesia",
            href: "https://www.dicoding.com/",
          },
        ],
      ],
    },
    period: {
      en: "November 2023 - January 2024",
      id: "November 2023 - Januari 2024",
    },
  },
];

const getExperiences = (lang: string): Experience[] => {
  const isId = lang.startsWith("id");
  return experiencesData.map((exp) => ({
    ...exp,
    subtitle: isId ? exp.subtitle.id : exp.subtitle.en,
    companyProfile: exp.companyProfile ? (isId ? exp.companyProfile.id : exp.companyProfile.en) : undefined,
    shortDescription: exp.shortDescription ? (isId ? exp.shortDescription.id : exp.shortDescription.en) : undefined,
    description: isId ? exp.description.id : exp.description.en,
    period: isId ? exp.period.id : exp.period.en,
    status: exp.status ? (isId ? exp.status.id : exp.status.en) : undefined,
    category: exp.category ? (isId ? exp.category.id : exp.category.en) : undefined,
  }));
};

export const experiences: Experience[] = getExperiences("en");
export const experiences_id: Experience[] = getExperiences("id");

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
export interface Project {
  title: string;
  year: string;
  description: string;
  stack: string[];
  imageUrl: string;
  projectUrl: string;
}

interface RawProject {
  title: string;
  year: string;
  description: LocalizedField<string>;
  stack: string[];
  imageUrl: string;
  projectUrl: string;
}

const projectsData: RawProject[] = [
  {
    title: "Deep Sea Portfolio",
    year: "2025",
    description: {
      en: "A modern, highly immersive personal portfolio website featuring a 'Deep Sea Expedition' theme. Built with React, TypeScript, and Vite, it leverages smooth animations, glassmorphism design, and global atmospheric effects to create a premium user experience.",
      id: "Situs web portofolio pribadi modern dan sangat imersif dengan tema 'Deep Sea Expedition'. Dibangun menggunakan React, TypeScript, dan Vite, proyek ini memanfaatkan animasi yang mulus, desain glassmorphism, dan efek atmosfer global untuk menciptakan pengalaman pengguna yang premium.",
    },
    stack: ["React", "TypeScript", "Vite", "TailwindCSS", "Framer Motion"],
    imageUrl: "projects/portfolio-alifahmad.png",
    projectUrl: "https://github.com/alivveee/alifahmad-porto",
  },
  {
    title: "PAUD Connect",
    year: "2025",
    description: {
      en: "PAUD Connect is a web-based information system developed for PAUD Mawar Tlogomas as part of a community service project at Universitas Brawijaya with my partner. It features an admin dashboard for managing student and alumni data, teacher accounts, an activity gallery, and school statistics.",
      id: "PAUD Connect adalah sistem informasi berbasis web yang dikembangkan untuk PAUD Mawar Tlogomas sebagai bagian dari proyek pengabdian masyarakat di Universitas Brawijaya bersama rekan saya. Sistem ini dilengkapi dengan dasbor admin untuk mengelola data siswa dan alumni, akun guru, galeri aktivitas, dan statistik sekolah.",
    },
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
    year: "2025",
    description: {
      en: "Nusantara Network Route Planner is a web and mobile-based information system designed to optimize distribution routes and field task management for PT Nusantara Network. Built with ReactJS, React Native, and Google Distance Matrix API, it uses a Genetic Algorithm to calculate the most efficient delivery routes. The system enables real-time employee tracking, customer data management, and automated route planning, significantly improving operational efficiency compared to manual methods.",
      id: "Nusantara Network Route Planner adalah sistem informasi berbasis web dan mobile yang dirancang untuk mengoptimalkan rute distribusi dan manajemen tugas lapangan untuk PT Nusantara Network. Dibangun menggunakan ReactJS, React Native, dan Google Distance Matrix API, sistem ini menggunakan Algoritma Genetika untuk menghitung rute pengiriman yang paling efisien. Sistem ini memungkinkan pelacakan karyawan secara real-time, manajemen data pelanggan, dan perencanaan rute otomatis, secara signifikan meningkatkan efisiensi operasional dibandingkan metode manual.",
    },
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
  {
    title: "Dekoor",
    year: "2024",
    description: {
      en: "Dekoor is a modern e-commerce platform designed for discovering and purchasing premium furniture. It features a curated catalog of furniture sets, best sellers, and an elegant UI to provide a seamless shopping experience.",
      id: "Dekoor adalah platform e-commerce modern yang dirancang untuk menemukan dan membeli furnitur premium. Platform ini memiliki katalog furnitur pilihan, produk terlaris, dan antarmuka elegan untuk memberikan pengalaman berbelanja yang mulus.",
    },
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    imageUrl: "projects/dekoor.png",
    projectUrl: "https://github.com/alivveee/dekoor",
  },
  {
    title: "Notes App",
    year: "2024",
    description: {
      en: "A full-featured notes application built with React and Vite. It allows users to create, read, update, and delete notes, featuring a responsive design and REST API integration for data persistence.",
      id: "Aplikasi catatan berfitur lengkap yang dibangun dengan React dan Vite. Aplikasi ini memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus catatan, dilengkapi desain responsif dan integrasi REST API untuk penyimpanan data.",
    },
    stack: ["React", "JavaScript", "Vite", "CSS"],
    imageUrl: "projects/notes-app.png",
    projectUrl: "https://github.com/alivveee/Notes-App",
  },
];

const getProjects = (lang: string): Project[] => {
  const isId = lang.startsWith("id");
  return projectsData.map((proj) => ({
    ...proj,
    description: isId ? proj.description.id : proj.description.en,
  }));
};

export const project: Project[] = getProjects("en");
export const project_id: Project[] = getProjects("id");
