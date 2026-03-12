const express = require("express");
const skillController = require("./skill.controller");
const authMiddleware = require("../../middleware/auth.middleware");

const router = express.Router();

router.get("/", skillController.getAll);
router.post("/", authMiddleware, skillController.create);
router.put("/:id", authMiddleware, skillController.update);
router.delete("/:id", authMiddleware, skillController.remove);

module.exports = router;
