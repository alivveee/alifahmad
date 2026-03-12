const prisma = require("../../config/database");

const findAll = async () => await prisma.contact.findMany();
const create = async (data) => await prisma.contact.create({ data });
const update = async (id, data) =>
  await prisma.contact.update({ where: { id }, data });
const remove = async (id) => await prisma.contact.delete({ where: { id } });

module.exports = { findAll, create, update, remove };
