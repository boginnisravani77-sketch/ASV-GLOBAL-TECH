const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 5000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
    .connect("mongodb://127.0.0.1:27017/asv_global_tech")
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((error) => {
        console.log("MongoDB Connection Error:", error);
    });

// Test Route
app.get("/", (req, res) => {
    res.send("ASV Global Tech Backend Running...");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});