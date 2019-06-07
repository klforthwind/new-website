const handlebars = require("express-handlebars");
const markdown = require("markdown-js");
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.engine('hbs', handlebars({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '/views'),
    extname: ".hbs"
}));
app.set('view engine', 'hbs');

app.get('/blog/', (req, res) => {
    res.render("main");
});

app.get('/blog/:post', (req, res) => {
    const loc = "posts/" + req.params.post + ".md";
    console.log(loc);
    const str = fs.readFileSync(loc, "utf8");
    const result = markdown.makeHtml(str);
    res.render("main", {
        post_data: result
    });
});

app.listen(3000);