const { z } = require("zod");

const createProjectSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  imagePath: z.string().optional().nullable(),
  link: z.string().url().optional().nullable(),
  techStack: z.array(z.string()).min(1),
});

const updateProjectSchema = createProjectSchema.partial();

module.exports = {
  createProjectSchema,
  updateProjectSchema,
};
