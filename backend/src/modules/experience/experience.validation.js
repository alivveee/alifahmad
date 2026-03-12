const { z } = require("zod");

const experienceSchema = z.object({
  company: z.string().min(2),
  role: z.string().min(2),
  period: z.string().min(4),
  description: z.string().min(10),
});

module.exports = {
  experienceSchema,
};
