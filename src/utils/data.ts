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
export interface ProjectFeature {
  icon: string;
  name: string;
  description: string;
}

export interface ProjectOverview {
  problem: string;
  users: string;
  objectives: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  category: string;
  status: string;
  description: string;
  overview: ProjectOverview;
  features: ProjectFeature[];
  stack: string[];
  imageUrl: string;
  galleryImages: string[];
  projectUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface RawProject {
  slug: string;
  title: string;
  year: string;
  category: LocalizedField<string>;
  status: LocalizedField<string>;
  description: LocalizedField<string>;
  overview: LocalizedField<ProjectOverview>;
  features: LocalizedField<ProjectFeature[]>;
  stack: string[];
  imageUrl: string;
  galleryImages: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projectsData: RawProject[] = [
  {
    slug: "deep-sea-portfolio",
    title: "Deep Sea Portfolio",
    year: "2025",
    category: { en: "Web Application", id: "Aplikasi Web" },
    status: { en: "Expedition Completed", id: "Ekspedisi Selesai" },
    description: {
      en: "A modern, highly immersive personal portfolio website featuring a 'Deep Sea Expedition' theme. Built with React, TypeScript, and Vite, it leverages smooth animations, glassmorphism design, and global atmospheric effects to create a premium user experience.",
      id: "Situs web portofolio pribadi modern dan sangat imersif dengan tema 'Deep Sea Expedition'. Dibangun menggunakan React, TypeScript, dan Vite, proyek ini memanfaatkan animasi yang mulus, desain glassmorphism, dan efek atmosfer global untuk menciptakan pengalaman pengguna yang premium.",
    },
    overview: {
      en: {
        problem: "Most developer portfolios feel generic and fail to leave a lasting impression on recruiters and potential clients. There was a need for a portfolio that stands out through immersive design while remaining professional and performant.",
        users: "Recruiters, hiring managers, potential clients, and fellow developers looking to explore my work and technical capabilities.",
        objectives: "Create a premium, immersive portfolio with a deep-sea exploration theme that showcases projects professionally, delivers smooth performance across devices, and leaves a memorable impression.",
      },
      id: {
        problem: "Kebanyakan portofolio developer terasa generik dan gagal meninggalkan kesan mendalam pada perekrut dan klien potensial. Dibutuhkan portofolio yang menonjol melalui desain imersif namun tetap profesional dan berkinerja baik.",
        users: "Perekrut, manajer perekrutan, klien potensial, dan sesama developer yang ingin mengeksplorasi karya dan kemampuan teknis saya.",
        objectives: "Membuat portofolio premium dan imersif dengan tema eksplorasi laut dalam yang menampilkan proyek secara profesional, memberikan kinerja mulus di semua perangkat, dan meninggalkan kesan yang tak terlupakan.",
      },
    },
    features: {
      en: [
        { icon: "🌊", name: "Immersive Theme", description: "Deep sea exploration atmosphere with bioluminescent particles, light rays, and glassmorphism." },
        { icon: "⚡", name: "Performance Optimized", description: "Maintains a Lighthouse performance score of 80+ using frame-rate limited animations, lazy loading, and efficient rendering for a smooth experience." },
        { icon: "🌐", name: "Bilingual Support", description: "Full English and Indonesian localization with seamless language switching." },
        { icon: "📱", name: "Responsive Design", description: "Fully responsive across all screen sizes with adaptive UI components." },
        { icon: "🔍", name: "SEO Optimized", description: "Configured with semantic HTML5, JSON-LD schemas, sitemap, robots.txt, and Open Graph tags for optimal search indexing." },
      ],
      id: [
        { icon: "🌊", name: "Tema Imersif", description: "Atmosfer eksplorasi laut dalam dengan partikel bioluminescent, sinar cahaya, dan glassmorphism." },
        { icon: "⚡", name: "Optimasi Performa", description: "Mempertahankan skor performa Lighthouse 80+ menggunakan batas frame-rate pada animasi, lazy loading, dan rendering efisien untuk pengalaman mulus." },
        { icon: "🌐", name: "Dukungan Bilingual", description: "Lokalisasi penuh Bahasa Inggris dan Indonesia dengan pergantian bahasa yang mulus." },
        { icon: "📱", name: "Desain Responsif", description: "Responsif sepenuhnya di semua ukuran layar dengan komponen UI adaptif." },
        { icon: "🔍", name: "SEO Dioptimalkan", description: "Dikonfigurasi dengan HTML5 semantik, JSON-LD schema, sitemap, robots.txt, dan tag Open Graph untuk indeks pencarian optimal." },
      ],
    },
    stack: ["React", "TypeScript", "Vite", "TailwindCSS", "Framer Motion"],
    imageUrl: "/projects/portfolio-alifahmad.png",
    galleryImages: ["/projects/portfolio-alifahmad.png"],
    githubUrl: "https://github.com/alivveee/alifahmad-porto",
    liveUrl: "https://alifahmad.vercel.app",
  },
  {
    slug: "paud-connect",
    title: "PAUD Connect",
    year: "2025",
    category: { en: "Web Application / Education System", id: "Aplikasi Web / Sistem Pendidikan" },
    status: { en: "Expedition Completed", id: "Ekspedisi Selesai" },
    description: {
      en: "PAUD Connect is a web-based information system developed for PAUD Mawar Tlogomas as part of a community service project at Universitas Brawijaya with my partner. It features an admin dashboard for managing student and alumni data, teacher accounts, an activity gallery, and school statistics.",
      id: "PAUD Connect adalah sistem informasi berbasis web yang dikembangkan untuk PAUD Mawar Tlogomas sebagai bagian dari proyek pengabdian masyarakat di Universitas Brawijaya bersama rekan saya. Sistem ini dilengkapi dengan dasbor admin untuk mengelola data siswa dan alumni, akun guru, galeri aktivitas, dan statistik sekolah.",
    },
    overview: {
      en: {
        problem: "PAUD Mawar Tlogomas lacked a digital system to manage student records, teacher accounts, and school activities efficiently. All data was handled manually, making it difficult to track alumni and maintain an organized activity gallery.",
        users: "School administrators, teachers, parents, and prospective families looking for information about the school.",
        objectives: "Build a comprehensive web-based management system with an admin dashboard, student/alumni data management, teacher accounts, activity gallery, and school statistics display.",
      },
      id: {
        problem: "PAUD Mawar Tlogomas tidak memiliki sistem digital untuk mengelola catatan siswa, akun guru, dan aktivitas sekolah secara efisien. Semua data ditangani secara manual, sehingga sulit untuk melacak alumni dan memelihara galeri aktivitas yang terorganisir.",
        users: "Administrator sekolah, guru, orang tua, dan keluarga calon siswa yang mencari informasi tentang sekolah.",
        objectives: "Membangun sistem manajemen berbasis web yang komprehensif dengan dasbor admin, manajemen data siswa/alumni, akun guru, galeri aktivitas, dan tampilan statistik sekolah.",
      },
    },
    features: {
      en: [
        { icon: "👨‍🎓", name: "Student Management", description: "Complete CRUD operations for student and alumni data management." },
        { icon: "👩‍🏫", name: "Teacher Accounts", description: "Role-based authentication system for school staff management." },
        { icon: "📸", name: "Activity Gallery", description: "Image gallery system powered by Google Drive integration." },
        { icon: "📊", name: "School Statistics", description: "Dashboard with visual statistics and data insights for administrators." },
      ],
      id: [
        { icon: "👨‍🎓", name: "Manajemen Siswa", description: "Operasi CRUD lengkap untuk manajemen data siswa dan alumni." },
        { icon: "👩‍🏫", name: "Akun Guru", description: "Sistem autentikasi berbasis peran untuk manajemen staf sekolah." },
        { icon: "📸", name: "Galeri Aktivitas", description: "Sistem galeri gambar yang didukung oleh integrasi Google Drive." },
        { icon: "📊", name: "Statistik Sekolah", description: "Dasbor dengan statistik visual dan wawasan data untuk administrator." },
      ],
    },
    stack: [
      "Next.js",
      "TypeScript",
      "ChakraUI",
      "TailwindCSS",
      "MongoDB",
      "Google Drive",
    ],
    imageUrl: "/projects/paud-connect.png",
    galleryImages: [
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780493244/53bac8ce-be4d-4980-a8bc-62dfc5a91dc8.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780493349/ac78619c-b6f3-4b57-bc16-0d0c771e083e.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780493263/ccae9529-e979-4164-9e17-686763284492.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780493984/8b23cd0f-339a-4057-9e60-6065470e0176.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780493447/01231659-035d-4bce-9e15-fc2e2a616597.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780494465/58206317-6076-4454-873b-92a39d6bec8b.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780494378/fd1b552e-b7d3-481b-a5c9-b2b7c32403ae.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780494372/48c695b1-b0b0-4887-9e05-779a4e4739c4.png"
    ],
    liveUrl: "https://paudmawar.vercel.app/",
    githubUrl: "https://github.com/alivveee/paud-connect",
  },
  {
    slug: "distributor-management-system",
    title: "Distributor Management System",
    year: "2025",
    category: { en: "Web & Mobile Application / Undergraduate Thesis", id: "Aplikasi Web & Mobile / Penelitian Skripsi" },
    status: { en: "Expedition Completed", id: "Ekspedisi Selesai" },
    description: {
      en: "Developed as my undergraduate thesis research, Nusantara Network Route Planner is a web and mobile-based information system designed to optimize distribution routes and field task management for PT Nusantara Network. Built with ReactJS, React Native, and Google Distance Matrix API, it uses a Genetic Algorithm to calculate the most efficient delivery routes. The system enables real-time employee tracking, customer data management, and automated route planning, significantly improving operational efficiency compared to manual methods.",
      id: "Dikembangkan sebagai bagian dari penelitian skripsi (tugas akhir) saya, Nusantara Network Route Planner adalah sistem informasi berbasis web dan mobile yang dirancang untuk mengoptimalkan rute distribusi dan manajemen tugas lapangan untuk PT Nusantara Network. Dibangun menggunakan ReactJS, React Native, dan Google Distance Matrix API, sistem ini menggunakan Algoritma Genetika untuk menghitung rute pengiriman yang paling efisien. Sistem ini memungkinkan pelacakan karyawan secara real-time, manajemen data pelanggan, dan perencanaan rute otomatis, secara signifikan meningkatkan efisiensi operasional dibandingkan metode manual.",
    },
    overview: {
      en: {
        problem: "PT Nusantara Network relied on manual methods for planning distribution routes and managing field tasks, leading to inefficient delivery schedules, higher costs, and difficulty tracking employee activities in real-time.",
        users: "Distribution managers, field employees, and logistics coordinators at PT Nusantara Network.",
        objectives: "Develop a cross-platform system that automates route optimization using Genetic Algorithms, enables real-time employee tracking, and provides comprehensive customer and task management.",
      },
      id: {
        problem: "PT Nusantara Network mengandalkan metode manual untuk merencanakan rute distribusi dan mengelola tugas lapangan, yang menyebabkan jadwal pengiriman tidak efisien, biaya lebih tinggi, dan kesulitan melacak aktivitas karyawan secara real-time.",
        users: "Manajer distribusi, karyawan lapangan, dan koordinator logistik di PT Nusantara Network.",
        objectives: "Mengembangkan sistem lintas platform yang mengotomatiskan optimasi rute menggunakan Algoritma Genetika, memungkinkan pelacakan karyawan secara real-time, dan menyediakan manajemen pelanggan dan tugas yang komprehensif.",
      },
    },
    features: {
      en: [
        { icon: "🗺️", name: "Route Optimization", description: "Genetic Algorithm-powered route planning using Google Distance Matrix API." },
        { icon: "📋", name: "Task Management", description: "Comprehensive field task assignment and tracking system." },
        { icon: "📍", name: "Real-time Tracking", description: "Live employee location tracking for logistics coordination." },
        { icon: "👥", name: "Customer Management", description: "Complete CRM for managing customer data and delivery schedules." },
      ],
      id: [
        { icon: "🗺️", name: "Optimasi Rute", description: "Perencanaan rute berbasis Algoritma Genetika menggunakan Google Distance Matrix API." },
        { icon: "📋", name: "Manajemen Tugas", description: "Sistem penugasan dan pelacakan tugas lapangan yang komprehensif." },
        { icon: "📍", name: "Pelacakan Real-time", description: "Pelacakan lokasi karyawan secara langsung untuk koordinasi logistik." },
        { icon: "👥", name: "Manajemen Pelanggan", description: "CRM lengkap untuk mengelola data pelanggan dan jadwal pengiriman." },
      ],
    },
    stack: [
      "Next.js",
      "React Native",
      "TypeScript",
      "ShadcnUI",
      "TailwindCSS",
      "Supabase",
    ],
    imageUrl: "/projects/nusantara-net.png",
    galleryImages: [
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780482777/15cf65db-144f-4f87-93cf-3e5733f902ac.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780482684/138da725-ba81-43d7-9c4e-a84725c1eb6f.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780482598/e652900d-4b56-418b-b446-e53d82e4f08b.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780483683/6c14fcaf-5402-4ee4-a00e-5e4740fb6634.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780485220/fdfa6a12-0830-49dc-91a8-2dc5d4279901_wef3nl.png"
    ],
    githubUrl: "https://github.com/alivveee/nusantaranet-distributor-admin",
    liveUrl: "https://nusantaranet-distributor-admin.vercel.app/",
  },
  {
    slug: "dekoor",
    title: "Dekoor",
    year: "2024",
    category: { en: "E-Commerce Platform", id: "Platform E-Commerce" },
    status: { en: "Expedition Completed", id: "Ekspedisi Selesai" },
    description: {
      en: "Dekoor is a modern e-commerce platform designed for discovering and purchasing premium furniture. It features a curated catalog of furniture sets, best sellers, and an elegant UI to provide a seamless shopping experience.",
      id: "Dekoor adalah platform e-commerce modern yang dirancang untuk menemukan dan membeli furnitur premium. Platform ini memiliki katalog furnitur pilihan, produk terlaris, dan antarmuka elegan untuk memberikan pengalaman berbelanja yang mulus.",
    },
    overview: {
      en: {
        problem: "Furniture shopping online often lacks the premium feel and curated experience that customers expect. Existing platforms feel cluttered and don't showcase products in an appealing way.",
        users: "Home owners, interior designers, and furniture enthusiasts looking for premium furniture pieces online.",
        objectives: "Create an elegant, visually appealing e-commerce UI that provides a curated shopping experience with product categorization, best sellers, and detailed product pages.",
      },
      id: {
        problem: "Belanja furnitur online sering kali kurang memberikan kesan premium dan pengalaman kurasi yang diharapkan pelanggan. Platform yang ada terasa berantakan dan tidak menampilkan produk dengan cara yang menarik.",
        users: "Pemilik rumah, desainer interior, dan pecinta furnitur yang mencari furnitur premium secara online.",
        objectives: "Membuat UI e-commerce yang elegan dan visual menarik yang menyediakan pengalaman belanja terkurasi dengan kategorisasi produk, produk terlaris, dan halaman produk detail.",
      },
    },
    features: {
      en: [
        { icon: "🛋️", name: "Curated Catalog", description: "Handpicked furniture collections organized by category and style." },
        { icon: "⭐", name: "Best Sellers", description: "Highlighted top-selling products for quick discovery." },
        { icon: "🎨", name: "Elegant UI", description: "Premium design with smooth interactions and beautiful product displays." },
        { icon: "📱", name: "Responsive Layout", description: "Seamless browsing experience across desktop, tablet, and mobile." },
      ],
      id: [
        { icon: "🛋️", name: "Katalog Terkurasi", description: "Koleksi furnitur pilihan yang diorganisir berdasarkan kategori dan gaya." },
        { icon: "⭐", name: "Produk Terlaris", description: "Produk terlaris yang disorot untuk penemuan cepat." },
        { icon: "🎨", name: "UI Elegan", description: "Desain premium dengan interaksi mulus dan tampilan produk yang indah." },
        { icon: "📱", name: "Layout Responsif", description: "Pengalaman penelusuran yang mulus di desktop, tablet, dan mobile." },
      ],
    },
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    imageUrl: "/projects/dekoor.png",
    galleryImages: [
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780492790/4b17263e-898f-4118-9fb5-7272008e0e5b.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780492834/fa575e6f-4cc6-4e61-94ba-9d0f2b813c98.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780492910/07fd4797-978e-4624-8bd5-b057ac040dce.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780492956/03cf78ea-a6d7-4e22-9e2b-ed3712d8121d.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780492942/c89b77d6-2375-438e-8511-26f0fc291e5c.png"
    ],
    githubUrl: "https://github.com/alivveee/dekoor",
    liveUrl: "https://dekoor-two.vercel.app/",
  },
  {
    slug: "notes-app",
    title: "Notes App",
    year: "2024",
    category: { en: "Web Application / Dicoding Course Project", id: "Aplikasi Web / Proyek Kelas Dicoding" },
    status: { en: "Expedition Completed", id: "Ekspedisi Selesai" },
    description: {
      en: "A full-featured notes application built with React and Vite, developed as a final project for the React Web Developer course at Dicoding. It allows users to create, read, update, and delete notes, featuring a responsive design and REST API integration for data persistence.",
      id: "Aplikasi catatan berfitur lengkap yang dibangun dengan React dan Vite, dikembangkan sebagai tugas akhir (final project) kelas React Web Developer di Dicoding. Aplikasi ini memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus catatan, dilengkapi desain responsif dan integrasi REST API untuk penyimpanan data.",
    },
    overview: {
      en: {
        problem: "Personal note-taking needs a simple yet functional tool that persists data across sessions. Many existing tools are overly complex for basic note management.",
        users: "Students, professionals, and anyone who needs a clean, simple note-taking tool with persistent storage.",
        objectives: "Build a full-featured CRUD notes application with REST API integration, responsive design, and a clean user interface.",
      },
      id: {
        problem: "Pencatatan pribadi membutuhkan alat yang sederhana namun fungsional yang menyimpan data antar sesi. Banyak alat yang ada terlalu kompleks untuk manajemen catatan dasar.",
        users: "Mahasiswa, profesional, dan siapa pun yang membutuhkan alat pencatatan yang bersih dan sederhana dengan penyimpanan persisten.",
        objectives: "Membangun aplikasi catatan CRUD berfitur lengkap dengan integrasi REST API, desain responsif, dan antarmuka pengguna yang bersih.",
      },
    },
    features: {
      en: [
        { icon: "✏️", name: "Full CRUD", description: "Create, read, update, and delete notes with intuitive interface." },
        { icon: "🔗", name: "API Integration", description: "REST API connection for persistent data storage across sessions." },
        { icon: "📱", name: "Responsive Design", description: "Works seamlessly on desktop and mobile devices." },
        { icon: "🎯", name: "Clean Interface", description: "Minimalist design focused on productivity and ease of use." },
      ],
      id: [
        { icon: "✏️", name: "CRUD Lengkap", description: "Buat, baca, perbarui, dan hapus catatan dengan antarmuka intuitif." },
        { icon: "🔗", name: "Integrasi API", description: "Koneksi REST API untuk penyimpanan data persisten antar sesi." },
        { icon: "📱", name: "Desain Responsif", description: "Berfungsi mulus di perangkat desktop dan mobile." },
        { icon: "🎯", name: "Antarmuka Bersih", description: "Desain minimalis yang berfokus pada produktivitas dan kemudahan penggunaan." },
      ],
    },
    stack: ["React", "JavaScript", "Vite", "CSS"],
    imageUrl: "/projects/notes-app.png",
    galleryImages: [
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780492627/3f752582-c87e-446e-872a-ea148f2829e1.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780492562/372086e4-c72e-41e9-b9ce-eb373ddb6f5d.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780492679/8a498ddb-db52-4c3c-89e9-679098a205d6.png",
      "https://res.cloudinary.com/dkapna2l6/image/upload/v1780492588/60563936-b5af-4077-bd33-0ee5d4cf9a40.png"
    ],
    githubUrl: "https://github.com/alivveee/Notes-App",
    liveUrl: "https://notes-app-alif-ahmad.vercel.app/",
  },
];

const getProjects = (lang: string): Project[] => {
  const isId = lang.startsWith("id");
  return projectsData.map((proj) => ({
    ...proj,
    description: isId ? proj.description.id : proj.description.en,
    category: isId ? proj.category.id : proj.category.en,
    status: isId ? proj.status.id : proj.status.en,
    overview: isId ? proj.overview.id : proj.overview.en,
    features: isId ? proj.features.id : proj.features.en,
    projectUrl: proj.liveUrl || proj.githubUrl || "",
  }));
};

export const project: Project[] = getProjects("en");
export const project_id: Project[] = getProjects("id");
