const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  // Create Admin
  const hashedPassword = await bcrypt.hash("admin123", 10);
  const admin = await prisma.admin.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      password: hashedPassword,
    },
  });
  console.log("Admin created:", admin.username);

  // Sample Project
  const project = await prisma.project.create({
    data: {
      title: "Portfolio Website",
      description:
        "A professional portfolio website built with React and Express.",
      techStack: ["React", "Node.js", "PostgreSQL"],
      link: "https://github.com/alifahmad/porto",
    },
  });
  console.log("Sample project created");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
