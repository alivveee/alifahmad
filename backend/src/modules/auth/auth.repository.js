const prisma = require("../../config/database");

const findAdminByUsername = async (username) => {
  return await prisma.admin.findUnique({
    where: { username },
  });
};

module.exports = {
  findAdminByUsername,
};
