const express = require("express");
const markdown = require("markdown");
const app = express();

app.get('/blog/', (req, res) => {
    res.send("Welcome to Express!");
});

app.get('/blog/:post', (req, res) => {
    res.send(`This is the ${req.params.name} Post!`);
});

app.listen(3000);