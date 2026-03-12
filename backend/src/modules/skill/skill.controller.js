const skillService = require("./skill.service");
const { skillSchema } = require("./skill.validation");
const { successResponse, errorResponse } = require("../../utils/response");

const getAll = async (req, res) => {
  try {
    const result = await skillService.getAll();
    return successResponse(res, "Skills retrieved", result);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const create = async (req, res) => {
  try {
    const validated = skillSchema.parse(req.body);
    const result = await skillService.create(validated);
    return successResponse(res, "Skill created", result, 201);
  } catch (error) {
    return errorResponse(res, error.message, 400);
  }
};

const update = async (req, res) => {
  try {
    const validated = skillSchema.partial().parse(req.body);
    const result = await skillService.update(req.params.id, validated);
    return successResponse(res, "Skill updated", result);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const remove = async (req, res) => {
  try {
    await skillService.remove(req.params.id);
    return successResponse(res, "Skill deleted");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

module.exports = { getAll, create, update, remove };
