const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../app")));
app.use(express.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
    const { name, email } = req.body;
    console.log(`Received form submission: Name - ${name}, Email - ${email}`);
    res.send("Form submitted successfully!");
});

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = { app, server };
