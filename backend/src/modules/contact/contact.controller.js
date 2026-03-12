const contactService = require("./contact.service");
const { contactSchema } = require("./contact.validation");
const { successResponse, errorResponse } = require("../../utils/response");

const getAll = async (req, res) => {
  try {
    const result = await contactService.getAll();
    return successResponse(res, "Contacts retrieved", result);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const create = async (req, res) => {
  try {
    const validated = contactSchema.parse(req.body);
    const result = await contactService.create(validated);
    return successResponse(res, "Contact created", result, 201);
  } catch (error) {
    return errorResponse(res, error.message, 400);
  }
};

const update = async (req, res) => {
  try {
    const validated = contactSchema.partial().parse(req.body);
    const result = await contactService.update(req.params.id, validated);
    return successResponse(res, "Contact updated", result);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const remove = async (req, res) => {
  try {
    await contactService.remove(req.params.id);
    return successResponse(res, "Contact deleted");
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

module.exports = { getAll, create, update, remove };
