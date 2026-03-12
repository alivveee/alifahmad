const express = require("express");
const experienceController = require("./experience.controller");
const authMiddleware = require("../../middleware/auth.middleware");

const router = express.Router();

router.get("/", experienceController.getAll);
router.post("/", authMiddleware, experienceController.create);
router.put("/:id", authMiddleware, experienceController.update);
router.delete("/:id", authMiddleware, experienceController.remove);

module.exports = router;
