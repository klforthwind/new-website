var markdown = require("markdown-js");
const express = require("express");
var fs = require("fs");
const app = express();

app.get('/blog/', (req, res) => {
    res.send("Welcome to Express!");
});

app.get('/blog/:post', (req, res) => {
    let str = fs.readFileSync(`${req.params.name}.md`, "utf8");
    let result = markdown.makeHtml(str);
    console.log(result);
    res.send(result);
});

app.listen(3000);