const projectService = require("./project.service");
const {
  createProjectSchema,
  updateProjectSchema,
} = require("./project.validation");
const { successResponse, errorResponse } = require("../../utils/response");

const getProjects = async (req, res) => {
  try {
    const projects = await projectService.getAllProjects();
    return successResponse(res, "Projects retrieved successfully", projects);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const getProject = async (req, res) => {
  try {
    const project = await projectService.getProjectById(req.params.id);
    return successResponse(res, "Project retrieved successfully", project);
  } catch (error) {
    return errorResponse(res, error.message, 404);
  }
};

const createProject = async (req, res) => {
  try {
    const validatedData = createProjectSchema.parse(req.body);
    const project = await projectService.createProject(validatedData);
    return successResponse(res, "Project created successfully", project, 21);
  } catch (error) {
    if (error.name === "ZodError") {
      return errorResponse(res, "Validation error", 400, error.errors);
    }
    return errorResponse(res, error.message);
  }
};

const updateProject = async (req, res) => {
  try {
    const validatedData = updateProjectSchema.parse(req.body);
    const project = await projectService.updateProject(
      req.params.id,
      validatedData,
    );
    return successResponse(res, "Project updated successfully", project);
  } catch (error) {
    if (error.name === "ZodError") {
      return errorResponse(res, "Validation error", 400, error.errors);
    }
    return errorResponse(res, error.message);
  }
};

const deleteProject = async (req, res) => {
  try {
    await projectService.deleteProject(req.params.id);
    return successResponse(res, "Project deleted successfully");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

module.exports = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
