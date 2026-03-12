const { z } = require("zod");

const contactSchema = z.object({
  platform: z.string().min(2),
  value: z.string().min(2),
  url: z.string().url().optional().nullable(),
});

module.exports = {
  contactSchema,
};
