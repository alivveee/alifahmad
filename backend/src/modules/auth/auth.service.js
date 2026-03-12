const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authRepository = require("./auth.repository");

const login = async (username, password) => {
  const admin = await authRepository.findAdminByUsername(username);

  if (!admin) {
    throw new Error("Invalid credentials");
  }

  const isPasswordMatch = await bcrypt.compare(password, admin.password);

  if (!isPasswordMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { id: admin.id, username: admin.username },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  return {
    admin: {
      id: admin.id,
      username: admin.username,
    },
    token,
  };
};

module.exports = {
  login,
};
