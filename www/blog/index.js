var markdown = require("markdown-js");
const express = require("express");
var fs = require("fs");
const app = express();

app.get('/blog/', (req, res) => {
    res.send("Welcome to Express!");
});

app.get('/blog/:post', (req, res) => {
    let loc = "posts/" + req.params.post + ".md";
    console.log(loc);
    let str = fs.readFileSync(loc, "utf8");
    let result = markdown.makeHtml(str);
    console.log(result);
    res.send(result);
});

app.listen(3000);