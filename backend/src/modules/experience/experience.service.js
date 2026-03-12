const experienceRepository = require("./experience.repository");

const getAll = async () => await experienceRepository.findAll();

const getById = async (id) => {
  const exp = await experienceRepository.findById(id);
  if (!exp) throw new Error("Experience not found");
  return exp;
};

const create = async (data) => await experienceRepository.create(data);

const update = async (id, data) => {
  await getById(id);
  return await experienceRepository.update(id, data);
};

const remove = async (id) => {
  await getById(id);
  return await experienceRepository.remove(id);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
