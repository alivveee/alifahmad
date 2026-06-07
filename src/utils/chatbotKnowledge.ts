// Chatbot Knowledge Base — Rule-based responses
// Each rule has keyword patterns and bilingual responses

export interface ChatRule {
  id: string;
  keywords: string[];
  response: { en: string; id: string };
  /** Optional follow-up suggestions */
  suggestions?: { en: string[]; id: string[] };
}

export const chatRules: ChatRule[] = [
  // ─── Greetings ───
  {
    id: "greeting",
    keywords: [
      "hi",
      "hello",
      "hey",
      "halo",
      "hai",
      "hei",
      "yo",
      "sup",
      "good morning",
      "good afternoon",
      "good evening",
      "selamat pagi",
      "selamat siang",
      "selamat malam",
      "assalamualaikum",
      "salam",
    ],
    response: {
      en: "Hey there! 👋 Welcome to Alif's deep-sea portfolio. I'm his virtual assistant — feel free to ask me anything about his skills, experience, or projects!",
      id: "Halo! 👋 Selamat datang di portofolio deep-sea milik Alif. Saya asisten virtualnya — silakan tanya apa saja tentang skill, pengalaman, atau proyek-proyeknya!",
    },
    suggestions: {
      en: ["What are his skills?", "Tell me about his experience", "Show me his projects"],
      id: ["Apa saja skill-nya?", "Ceritakan pengalamannya", "Tunjukkan proyek-proyeknya"],
    },
  },

  // ─── About / Who ───
  {
    id: "about",
    keywords: [
      "who",
      "about",
      "siapa",
      "tentang",
      "introduce",
      "perkenalkan",
      "tell me about",
      "ceritakan",
      "yourself",
      "dirinya",
      "background",
      "latar belakang",
      "profile",
      "profil",
    ],
    response: {
      en: "Alif Ahmad is a **Frontend Engineer with Full-Stack Capabilities** based in Indonesia 🇮🇩. He specializes in building robust **Web Applications** (using React, Next.js), cross-platform **Mobile Applications** (using React Native), and **Automation Systems** (like smart chatbots, custom scripts, and workflow automations). He works across the stack, merging pixel-perfect interfaces with backend and process automation.",
      id: "Alif Ahmad adalah seorang **Frontend Engineer dengan Kemampuan Full-Stack** yang berbasis di Indonesia 🇮🇩. Ia berspesialisasi dalam membangun **Aplikasi Web** (menggunakan React, Next.js), **Aplikasi Mobile** (menggunakan React Native), dan **Sistem Otomasi** (seperti chatbot pintar, skrip kustom, dan otomasi alur kerja). Ia bekerja lintas stack, menggabungkan antarmuka presisi tinggi dengan backend dan otomasi proses.",
    },
    suggestions: {
      en: ["What are his skills?", "Where has he worked?", "What projects has he built?"],
      id: ["Apa saja skill-nya?", "Di mana saja dia bekerja?", "Proyek apa saja yang sudah dibuat?"],
    },
  },

  // ─── Skills / Tech Stack ───
  {
    id: "skills",
    keywords: [
      "skill",
      "skills",
      "technology",
      "technologies",
      "tech",
      "stack",
      "tools",
      "keahlian",
      "teknologi",
      "alat",
      "bisa apa",
      "kemampuan",
      "framework",
      "language",
      "bahasa pemrograman",
      "n8n",
    ],
    response: {
      en: `Here are Alif's core capabilities and tech stack:\n\n💻 **Web Apps** — React, Next.js, TypeScript, Tailwind CSS, Shadcn UI, Zustand, TanStack Query\n\n📱 **Mobile Apps** — React Native, Mobile UI, Local Storage & State Management\n\n⚙️ **Automation & Backend** — Chatbot development, custom scripts, n8n, Supabase, Nest.js, MongoDB, Express.js, Laravel, Git, Vercel, GitHub Actions\n\n🎨 **Design & Tools** — Figma, Git, VS Code, Cursor, Lighthouse, SEO Optimization`,
      id: `Berikut spesialisasi utama dan tech stack Alif:\n\n💻 **Aplikasi Web** — React, Next.js, TypeScript, Tailwind CSS, Shadcn UI, Zustand, TanStack Query\n\n📱 **Aplikasi Mobile** — React Native, Mobile UI, Penyimpanan Lokal & State Management\n\n⚙️ **Otomasi & Backend** — Pengembangan Chatbot, skrip kustom, n8n, Supabase, Nest.js, MongoDB, Express.js, Laravel, Git, Vercel, GitHub Actions\n\n🎨 **Desain & Tools** — Figma, Git, VS Code, Cursor, Lighthouse, SEO Optimization`,
    },
    suggestions: {
      en: ["Tell me about his projects", "Where has he worked?"],
      id: ["Ceritakan proyek-proyeknya", "Di mana saja dia bekerja?"],
    },
  },

  // ─── React / Next.js specific ───
  {
    id: "react",
    keywords: ["react", "reactjs", "react.js", "next", "nextjs", "next.js"],
    response: {
      en: "React & Next.js are Alif's **primary tools**! He has professional experience building production-grade apps with React.js, Next.js, and TypeScript at companies like PT Node Solusi Teknologi and PT AZlogistik. He's proficient with the modern React ecosystem including Zustand, Redux Toolkit, TanStack Query, and React Hook Form.",
      id: "React & Next.js adalah **alat utama** Alif! Ia memiliki pengalaman profesional membangun aplikasi production-grade dengan React.js, Next.js, dan TypeScript di perusahaan seperti PT Node Solusi Teknologi dan PT AZlogistik. Ia mahir dengan ekosistem React modern termasuk Zustand, Redux Toolkit, TanStack Query, dan React Hook Form.",
    },
    suggestions: {
      en: ["What projects use React?", "Tell me about his experience"],
      id: ["Proyek apa saja yang pakai React?", "Ceritakan pengalamannya"],
    },
  },

  // ─── Experience / Work ───
  {
    id: "experience",
    keywords: [
      "experience",
      "work",
      "job",
      "career",
      "pengalaman",
      "kerja",
      "karir",
      "pekerjaan",
      "company",
      "perusahaan",
      "internship",
      "magang",
      "worked",
      "bekerja",
    ],
    response: {
      en: `Alif has solid professional experience:\n\n🏢 **Frontend Engineer** at PT Node Solusi Teknologi (Nov 2025 – May 2026)\n→ Contract role. Built & maintained RMS, DMS, Backoffice, and Company Profile systems using React.js, Next.js, TypeScript.\n\n🏢 **Frontend Programmer** at PT AZlogistik Dot Com (Nov 2025)\n→ Project-based role. Built a logistics marketplace web app with Next.js, Zustand, and Tailwind CSS.\n\n🎓 **Frontend Developer Intern** at PT Aksamedia Mulia Digital (Feb – Jul 2024)\n→ Developed the SchoolMate LMS using React.js, TypeScript, and Chakra UI.\n\n📚 **React App Developer** — IDCamp by Indosat (Nov 2023 – Jan 2024)\n→ Scholarship program mastering React fundamentals.`,
      id: `Alif memiliki pengalaman profesional yang solid:\n\n🏢 **Frontend Engineer** di PT Node Solusi Teknologi (Nov 2025 – Mei 2026)\n→ Kontrak. Membangun & memelihara sistem RMS, DMS, Backoffice, dan Profil Perusahaan menggunakan React.js, Next.js, TypeScript.\n\n🏢 **Frontend Programmer** di PT AZlogistik Dot Com (Nov 2025)\n→ Berbasis proyek. Membangun aplikasi web marketplace logistik dengan Next.js, Zustand, dan Tailwind CSS.\n\n🎓 **Frontend Developer Intern** di PT Aksamedia Mulia Digital (Feb – Jul 2024)\n→ Mengembangkan SchoolMate LMS menggunakan React.js, TypeScript, dan Chakra UI.\n\n📚 **React App Developer** — IDCamp by Indosat (Nov 2023 – Jan 2024)\n→ Program beasiswa menguasai dasar-dasar React.`,
    },
    suggestions: {
      en: ["Tell me more about Nodewave", "What about Aksamedia?", "Show me his projects"],
      id: ["Ceritakan lebih tentang Nodewave", "Bagaimana dengan Aksamedia?", "Tunjukkan proyek-proyeknya"],
    },
  },

  // ─── Nodewave ───
  {
    id: "nodewave",
    keywords: ["nodewave", "node solusi", "nst"],
    response: {
      en: "At **PT Node Solusi Teknologi (Nodewave)**, Alif worked as a Frontend Engineer on a contract basis (Nov 2025 – May 2026). He developed and maintained multiple web systems including RMS, DMS, Backoffice, and Company Profile platforms. His tech stack included React.js, Next.js, TypeScript, Tailwind CSS, Shadcn UI, Material UI, Redux Toolkit, Zustand, and React Query. He collaborated closely with PMs, Backend Engineers, and QA teams.",
      id: "Di **PT Node Solusi Teknologi (Nodewave)**, Alif bekerja sebagai Frontend Engineer secara kontrak (Nov 2025 – Mei 2026). Ia mengembangkan dan memelihara berbagai sistem web termasuk RMS, DMS, Backoffice, dan platform Profil Perusahaan. Tech stack-nya meliputi React.js, Next.js, TypeScript, Tailwind CSS, Shadcn UI, Material UI, Redux Toolkit, Zustand, dan React Query.",
    },
  },

  // ─── Aksamedia ───
  {
    id: "aksamedia",
    keywords: ["aksamedia", "schoolmate", "lms"],
    response: {
      en: "At **PT Aksamedia Mulia Digital**, Alif completed his internship as a Frontend Developer (Feb – Jul 2024). He developed and maintained the **SchoolMate LMS** using React.js, TypeScript, and Chakra UI. He also contributed to building the company's design system and collaborated with backend and design teams.",
      id: "Di **PT Aksamedia Mulia Digital**, Alif menyelesaikan magang sebagai Frontend Developer (Feb – Jul 2024). Ia mengembangkan dan memelihara **SchoolMate LMS** menggunakan React.js, TypeScript, dan Chakra UI. Ia juga berkontribusi membangun design system perusahaan dan berkolaborasi dengan tim backend dan desain.",
    },
  },

  // ─── Projects ───
  {
    id: "projects",
    keywords: [
      "project",
      "projects",
      "proyek",
      "portfolio",
      "portofolio",
      "built",
      "build",
      "buat",
      "dibuat",
      "app",
      "application",
      "aplikasi",
      "website",
    ],
    response: {
      en: `Here are Alif's selected projects:\n\n🌊 **Deep Sea Portfolio** (2025) — This very website! An immersive portfolio with bioluminescent deep-sea theme. Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion.\n\n📚 **PAUD Connect** (2025) — Web-based school management system for PAUD Mawar Tlogomas. Built with Next.js, TypeScript, Chakra UI, MongoDB.\n\n🗺️ **Distributor Management System** (2025) — Undergraduate thesis project. Route optimization with Genetic Algorithm. Built with Next.js, React Native, Supabase.\n\n🛋️ **Dekoor** (2024) — Premium furniture e-commerce UI. Built with Next.js, TypeScript, Tailwind CSS.\n\n📝 **Notes App** (2024) — Full CRUD notes app with REST API. Built with React, Vite.`,
      id: `Berikut proyek-proyek pilihan Alif:\n\n🌊 **Deep Sea Portfolio** (2025) — Website ini! Portofolio imersif dengan tema deep-sea bioluminescent. Dibangun dengan React, TypeScript, Vite, Tailwind CSS, Framer Motion.\n\n📚 **PAUD Connect** (2025) — Sistem manajemen sekolah berbasis web untuk PAUD Mawar Tlogomas. Dibangun dengan Next.js, TypeScript, Chakra UI, MongoDB.\n\n🗺️ **Distributor Management System** (2025) — Proyek skripsi. Optimasi rute dengan Algoritma Genetika. Dibangun dengan Next.js, React Native, Supabase.\n\n🛋️ **Dekoor** (2024) — UI e-commerce furnitur premium. Dibangun dengan Next.js, TypeScript, Tailwind CSS.\n\n📝 **Notes App** (2024) — Aplikasi catatan CRUD lengkap dengan REST API. Dibangun dengan React, Vite.`,
    },
    suggestions: {
      en: ["Tell me about PAUD Connect", "What about the thesis project?"],
      id: ["Ceritakan tentang PAUD Connect", "Bagaimana proyek skripsinya?"],
    },
  },

  // ─── Specific project: PAUD Connect ───
  {
    id: "paud",
    keywords: ["paud", "mawar", "school management", "lms", "learning management system", "paud connect"],
    response: {
      en: "**PAUD Connect** is a web-based information system built for PAUD Mawar Tlogomas as a community service project at Universitas Brawijaya. It features an admin dashboard for managing student/alumni data, teacher accounts, activity gallery (Google Drive integration), and school statistics. Tech stack: Next.js, TypeScript, Chakra UI, Tailwind CSS, MongoDB.",
      id: "**PAUD Connect** adalah sistem informasi berbasis web yang dibangun untuk PAUD Mawar Tlogomas sebagai proyek pengabdian masyarakat di Universitas Brawijaya. Dilengkapi dasbor admin untuk mengelola data siswa/alumni, akun guru, galeri aktivitas (integrasi Google Drive), dan statistik sekolah. Tech stack: Next.js, TypeScript, Chakra UI, Tailwind CSS, MongoDB.",
    },
  },

  // ─── Specific project: Thesis ───
  {
    id: "thesis",
    keywords: [
      "thesis",
      "skripsi",
      "tugas akhir",
      "genetic",
      "genetika",
      "route",
      "rute",
      "distributor",
      "nusantara",
      "distribution",
      "distribusi",
    ],
    response: {
      en: "Alif's undergraduate thesis is the **Nusantara Network Route Planner** — a web & mobile system to optimize distribution routes using a **Genetic Algorithm** and Google Distance Matrix API. It features real-time employee tracking, customer data management, and automated route planning for PT Nusantara Network. Built with Next.js, React Native, TypeScript, Shadcn UI, Tailwind CSS, and Supabase.",
      id: "Skripsi Alif adalah **Nusantara Network Route Planner** — sistem web & mobile untuk mengoptimalkan rute distribusi menggunakan **Algoritma Genetika** dan Google Distance Matrix API. Fiturnya meliputi pelacakan karyawan real-time, manajemen data pelanggan, dan perencanaan rute otomatis untuk PT Nusantara Network. Dibangun dengan Next.js, React Native, TypeScript, Shadcn UI, Tailwind CSS, dan Supabase.",
    },
  },

  // ─── Education ───
  {
    id: "education",
    keywords: [
      "education",
      "university",
      "pendidikan",
      "universitas",
      "kuliah",
      "college",
      "degree",
      "sarjana",
      "study",
      "belajar",
      "sekolah",
      "school",
      "brawijaya",
    ],
    response: {
      en: "Alif studied at **Universitas Brawijaya** in Indonesia. He completed his undergraduate thesis on distribution route optimization using Genetic Algorithms. He also holds a certificate from the **IDCamp scholarship** by Indosat (React App Developer path via Dicoding Indonesia).",
      id: "Alif kuliah di **Universitas Brawijaya** di Indonesia. Ia menyelesaikan skripsi tentang optimasi rute distribusi menggunakan Algoritma Genetika. Ia juga memiliki sertifikat dari program **beasiswa IDCamp** oleh Indosat (jalur React App Developer melalui Dicoding Indonesia).",
    },
  },

  // ─── Direct Talk with Alif ───
  {
    id: "talk-to-alif",
    keywords: [
      "talk with alif",
      "talk to alif",
      "bicara dengan alif",
      "chat alif",
      "contact alif",
      "hubungi alif",
      "ngobrol dengan alif",
      "speak with alif",
      "speak to alif",
      "talk direct",
      "bicara langsung",
      "connect with alif",
      "can i talk",
      "bisa saya bicara",
      "bisa bicara",
    ],
    response: {
      en: "Sure! You can talk with Alif directly. The best way is to email him at **alifahmadmukhtar@gmail.com** or send a message on his LinkedIn: **linkedin.com/in/alifamukhtr**.\n\nHe usually responds within 24 hours! ✉️",
      id: "Tentu! Anda bisa bicara dengan Alif secara langsung. Cara terbaik adalah mengirim email ke **alifahmadmukhtar@gmail.com** atau mengirim pesan lewat LinkedIn-nya: **linkedin.com/in/alifamukhtr**.\n\nIa biasanya merespons dalam waktu 24 jam! ✉️",
    },
    suggestions: {
      en: ["Show me his projects", "What are his skills?"],
      id: ["Tunjukkan proyek-proyeknya", "Apa saja skill-nya?"],
    },
  },

  // ─── Contact ───
  {
    id: "contact",
    keywords: [
      "contact",
      "email",
      "hire",
      "reach",
      "kontak",
      "hubungi",
      "rekrut",
      "connect",
      "linkedin",
      "instagram",
      "github",
      "social",
      "media sosial",
      "available",
      "tersedia",
    ],
    response: {
      en: `You can reach Alif through:\n\n📧 **Email** — alifahmadmukhtar@gmail.com\n💼 **LinkedIn** — linkedin.com/in/alifamukhtr\n🐙 **GitHub** — github.com/alivveee\n📸 **Instagram** — @alifamukhtr\n\nHe's actively seeking opportunities as a Frontend Engineer. Feel free to reach out!`,
      id: `Anda bisa menghubungi Alif melalui:\n\n📧 **Email** — alifahmadmukhtar@gmail.com\n💼 **LinkedIn** — linkedin.com/in/alifamukhtr\n🐙 **GitHub** — github.com/alivveee\n📸 **Instagram** — @alifamukhtr\n\nIa sedang aktif mencari peluang sebagai Frontend Engineer. Jangan ragu untuk menghubungi!`,
    },
  },

  // ─── Resume / CV ───
  {
    id: "resume",
    keywords: ["resume", "cv", "curriculum", "download"],
    response: {
      en: "You can view and download Alif's resume by clicking the **\"View Resume\"** button in the hero section, or through the footer. It contains a comprehensive overview of his experience, skills, and education.",
      id: "Anda bisa melihat dan mengunduh resume Alif dengan mengklik tombol **\"Lihat Resume\"** di bagian hero, atau melalui footer. Resume tersebut berisi gambaran lengkap pengalaman, skill, dan pendidikan-nya.",
    },
  },

  // ─── Availability / Hiring ───
  {
    id: "availability",
    keywords: [
      "available",
      "hire",
      "hiring",
      "freelance",
      "open",
      "looking",
      "opportunity",
      "tersedia",
      "rekrut",
      "peluang",
      "lowongan",
      "cari kerja",
      "mencari",
    ],
    response: {
      en: "Yes! Alif is **actively seeking opportunities** as a Frontend Engineer. He's open to full-time, contract, or project-based roles. Feel free to reach out via email at alifahmadmukhtar@gmail.com or connect on LinkedIn!",
      id: "Ya! Alif **sedang aktif mencari peluang** sebagai Frontend Engineer. Ia terbuka untuk posisi full-time, kontrak, atau berbasis proyek. Silakan hubungi via email di alifahmadmukhtar@gmail.com atau connect di LinkedIn!",
    },
  },

  // ─── This website / Portfolio ───
  {
    id: "this-website",
    keywords: [
      "this website",
      "this site",
      "portfolio site",
      "web ini",
      "website ini",
      "situs ini",
      "how was this made",
      "bagaimana dibuat",
      "deep sea",
      "laut dalam",
    ],
    response: {
      en: "This portfolio website features a **Deep Sea Expedition** theme! 🌊 It's built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Key features include bioluminescent particle effects, glassmorphism design, bilingual support (EN/ID), performance optimization (80+ Lighthouse score), and full SEO optimization. And yes, you're chatting with one of its features right now! 🤖",
      id: "Website portofolio ini mengusung tema **Deep Sea Expedition**! 🌊 Dibangun dengan React, TypeScript, Vite, Tailwind CSS, dan Framer Motion. Fitur utamanya termasuk efek partikel bioluminescent, desain glassmorphism, dukungan bilingual (EN/ID), optimasi performa (skor Lighthouse 80+), dan optimasi SEO lengkap. Dan ya, Anda sedang mengobrol dengan salah satu fiturnya sekarang! 🤖",
    },
  },

  // ─── Thank you ───
  {
    id: "thanks",
    keywords: ["thank", "thanks", "terima kasih", "makasih", "thx", "appreciated"],
    response: {
      en: "You're welcome! 😊 Feel free to explore more of Alif's work by scrolling through the portfolio. If you'd like to connect with him, check out the contact links in the footer. Happy exploring! 🌊",
      id: "Sama-sama! 😊 Silakan jelajahi lebih banyak karya Alif dengan scroll di portofolio ini. Jika ingin menghubunginya, lihat link kontak di footer. Selamat menjelajah! 🌊",
    },
  },

  // ─── Fun / Joke ───
  {
    id: "fun",
    keywords: ["fun", "joke", "funny", "lucu", "humor", "meme", "easter egg"],
    response: {
      en: "Why do frontend developers eat lunch alone? Because they don't like **tables**! 😄\n\n...Okay, Alif actually loves tables (data tables, at least). Ask me something more about his work! 🐠",
      id: "Kenapa frontend developer makan siang sendirian? Karena mereka tidak suka **tabel**! 😄\n\n...Oke, Alif sebenarnya suka tabel (data table setidaknya). Tanya saya hal lain tentang karyanya! 🐠",
    },
  },

  // ─── Bye ───
  {
    id: "bye",
    keywords: ["bye", "goodbye", "see you", "sampai jumpa", "dadah", "selamat tinggal"],
    response: {
      en: "Thanks for diving in! 🌊 Don't forget to check out Alif's projects and feel free to reach out if you have any opportunities. See you in the depths! 🐋",
      id: "Terima kasih sudah menyelam! 🌊 Jangan lupa cek proyek-proyek Alif dan jangan ragu menghubungi jika ada peluang. Sampai jumpa di kedalaman! 🐋",
    },
  },
];

/** Default fallback response when no rule matches */
export const fallbackResponse = {
  en: "Hmm, I'm not sure about that one. 🤔 I can tell you about Alif's **skills**, **experience**, **projects**, or **contact info**. What would you like to know?",
  id: "Hmm, saya kurang yakin tentang itu. 🤔 Saya bisa ceritakan tentang **skill**, **pengalaman**, **proyek**, atau **info kontak** Alif. Apa yang ingin Anda ketahui?",
};

export const fallbackSuggestions = {
  en: ["Can I talk with Alif?", "What are his skills?", "Tell me about his experience", "Show me his projects"],
  id: ["Bisa saya bicara dengan Alif?", "Apa saja skill-nya?", "Ceritakan pengalamannya", "Tunjukkan proyek-proyeknya"],
};

/**
 * Match user input against chatbot rules.
 * Returns the best matching rule, or null if no match found.
 */
export function matchRule(input: string): ChatRule | null {
  const normalised = input.toLowerCase().trim();

  // Score each rule: count how many keywords match
  let bestRule: ChatRule | null = null;
  let bestScore = 0;

  for (const rule of chatRules) {
    let score = 0;
    for (const keyword of rule.keywords) {
      if (normalised.includes(keyword.toLowerCase())) {
        // Longer keyword matches are worth more
        score += keyword.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestRule = rule;
    }
  }

  return bestRule;
}
