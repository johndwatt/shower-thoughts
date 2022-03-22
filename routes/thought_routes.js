const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.get("/thoughts", controllers.thought_ctrl.thoughtIndex);
router.get("/thoughts/:id", controllers.thought_ctrl.thoughtShow);

module.exports = router;