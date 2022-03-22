const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.get("/thoughts", controllers.thought_ctrl.thoughtIndex);

module.exports = router;