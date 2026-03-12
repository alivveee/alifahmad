const experienceService = require("./experience.service");
const { experienceSchema } = require("./experience.validation");
const { successResponse, errorResponse } = require("../../utils/response");

const getAll = async (req, res) => {
  try {
    const result = await experienceService.getAll();
    return successResponse(res, "Experiences retrieved", result);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const create = async (req, res) => {
  try {
    const validated = experienceSchema.parse(req.body);
    const result = await experienceService.create(validated);
    return successResponse(res, "Experience created", result, 21);
  } catch (error) {
    return errorResponse(
      res,
      error.message,
      error.name === "ZodError" ? 400 : 500,
    );
  }
};

const update = async (req, res) => {
  try {
    const validated = experienceSchema.partial().parse(req.body);
    const result = await experienceService.update(req.params.id, validated);
    return successResponse(res, "Experience updated", result);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const remove = async (req, res) => {
  try {
    await experienceService.remove(req.params.id);
    return successResponse(res, "Experience deleted");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
