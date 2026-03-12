const express = require("express");
const contactController = require("./contact.controller");
const authMiddleware = require("../../middleware/auth.middleware");

const router = express.Router();

router.get("/", contactController.getAll);
router.post("/", authMiddleware, contactController.create);
router.put("/:id", authMiddleware, contactController.update);
router.delete("/:id", authMiddleware, contactController.remove);

module.exports = router;
