const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/helloworld", (req, res) => {
    res.json({ message: "hello" });
});

app.listen(3000, () => {
    console.log("API running on http://localhost:3000");
});