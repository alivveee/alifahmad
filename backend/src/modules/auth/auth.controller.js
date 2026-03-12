const authService = require("./auth.service");
const { loginSchema } = require("./auth.validation");
const { successResponse, errorResponse } = require("../../utils/response");

const login = async (req, res) => {
  try {
    const validatedData = loginSchema.parse(req.body);
    const result = await authService.login(
      validatedData.username,
      validatedData.password,
    );

    return successResponse(res, "Login successful", result);
  } catch (error) {
    if (error.name === "ZodError") {
      return errorResponse(res, "Validation error", 400, error.errors);
    }
    return errorResponse(res, error.message, 401);
  }
};

module.exports = {
  login,
};
