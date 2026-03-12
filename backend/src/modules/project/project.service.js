const projectRepository = require("./project.repository");

const getAllProjects = async () => {
  return await projectRepository.findAll();
};

const getProjectById = async (id) => {
  const project = await projectRepository.findById(id);
  if (!project) throw new Error("Project not found");
  return project;
};

const createProject = async (data) => {
  return await projectRepository.create(data);
};

const updateProject = async (id, data) => {
  await getProjectById(id);
  return await projectRepository.update(id, data);
};

const deleteProject = async (id) => {
  await getProjectById(id);
  return await projectRepository.remove(id);
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
