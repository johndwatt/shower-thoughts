// Modules
const express = require("express");
const cors = require("cors");
const env = require('dotenv');
const routes = require("./routes");

// Configuration
env.config();
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(require("./middleware/logger"));

// API Routes
app.use("/api/v1/home", routes.home);
app.use("/api/v1", routes.thoughts);

// Connection string
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}!`);
});