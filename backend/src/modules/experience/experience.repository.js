const prisma = require("../../config/database");

const findAll = async () => {
  return await prisma.experience.findMany({
    orderBy: { createdAt: "desc" },
  });
};

const findById = async (id) => {
  return await prisma.experience.findUnique({
    where: { id },
  });
};

const create = async (data) => {
  return await prisma.experience.create({
    data,
  });
};

const update = async (id, data) => {
  return await prisma.experience.update({
    where: { id },
    data,
  });
};

const remove = async (id) => {
  return await prisma.experience.delete({
    where: { id },
  });
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
