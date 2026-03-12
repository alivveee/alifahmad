const skillRepository = require("./skill.repository");

const getAll = async () => await skillRepository.findAll();
const create = async (data) => await skillRepository.create(data);
const update = async (id, data) => await skillRepository.update(id, data);
const remove = async (id) => await skillRepository.remove(id);

module.exports = { getAll, create, update, remove };
