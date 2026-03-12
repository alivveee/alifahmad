const prisma = require("../../config/database");

const findAll = async () => {
  return await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });
};

const findById = async (id) => {
  return await prisma.project.findUnique({
    where: { id },
  });
};

const create = async (data) => {
  return await prisma.project.create({
    data,
  });
};

const update = async (id, data) => {
  return await prisma.project.update({
    where: { id },
    data,
  });
};

const remove = async (id) => {
  return await prisma.project.delete({
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
