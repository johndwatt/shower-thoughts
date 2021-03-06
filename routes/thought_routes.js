const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.get("/thoughts", controllers.thought_ctrl.thoughtIndex);
router.get("/thoughts/:id", controllers.thought_ctrl.thoughtShow);
router.post("/thoughts", controllers.thought_ctrl.thoughtCreate);
router.put("/thoughts/:id", controllers.thought_ctrl.thoughtUpdate);
router.delete("/thoughts/:id", controllers.thought_ctrl.thoughtDestroy);

module.exports = router;