const express = require("express");
const projectController = require("./project.controller");
const authMiddleware = require("../../middleware/auth.middleware");

const router = express.Router();

// Public routes
router.get("/", projectController.getProjects);
router.get("/:id", projectController.getProject);

// Admin routes (Protected)
router.post("/", authMiddleware, projectController.createProject);
router.put("/:id", authMiddleware, projectController.updateProject);
router.delete("/:id", authMiddleware, projectController.deleteProject);

module.exports = router;
