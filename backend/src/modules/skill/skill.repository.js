const prisma = require("../../config/database");

const findAll = async () => await prisma.skill.findMany();
const create = async (data) => await prisma.skill.create({ data });
const update = async (id, data) =>
  await prisma.skill.update({ where: { id }, data });
const remove = async (id) => await prisma.skill.delete({ where: { id } });

module.exports = { findAll, create, update, remove };
