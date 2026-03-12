const contactRepository = require("./contact.repository");

const getAll = async () => await contactRepository.findAll();
const create = async (data) => await contactRepository.create(data);
const update = async (id, data) => await contactRepository.update(id, data);
const remove = async (id) => await contactRepository.remove(id);

module.exports = { getAll, create, update, remove };
