const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.get("/random", controllers.home_ctrl.randomThought);

module.exports = router;