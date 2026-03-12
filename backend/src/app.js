const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { errorResponse } = require("./utils/response");

// Routes
const authRoutes = require("./modules/auth/auth.routes");
const projectRoutes = require("./modules/project/project.routes");
const experienceRoutes = require("./modules/experience/experience.routes");
const skillRoutes = require("./modules/skill/skill.routes");
const contactRoutes = require("./modules/contact/contact.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Portfolio CMS API is running" });
});

// Module routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/contacts", contactRoutes);

// 404 handler
app.use((req, res) => {
  return errorResponse(res, "Endpoint not found", 404);
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  return errorResponse(res, err.message || "Internal Server Error", 500);
});

module.exports = app;
