const express = require("express");

// Configuration
const app = express();
const PORT = process.env.PORT || 4000;

// Connection string
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}!`);
});