const { z } = require("zod");

const skillSchema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  level: z.number().min(0).max(100),
});

module.exports = {
  skillSchema,
};
