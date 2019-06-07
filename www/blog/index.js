const express = require("express");
const app = express();

app.get('/blog/', (req, res) => {
    res.send("Welcome to Express!");
});

app.listen(3000);