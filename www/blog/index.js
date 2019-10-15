const handlebars = require("express-handlebars");
const markdown = require("markdown-js");
const express = require("express");
const path = require("path");
const fs = require("fs");
const db = require('posts/database');
const app = express();

app.engine('hbs', handlebars({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '/views'),
    extname: ".hbs"
}));

app.set('view engine', 'hbs');

app.get('/blog/', (req, res) => {
    let str = "";
    for (let i = 0; i < db.length; i++) {
        str += "<a href=\""+db[i].url+"\"/><ul id=\"clickable\">"+db[i].title+"<aside>"+db[i].date+"</aside></ul></a>";
    }
    res.render("main", {
        blog_data: str
    });
});

app.get('/blog/:post', (req, res) => {
    let loc = "posts/" + req.params.post + ".md";
    console.log(loc);
    try {
        let str = fs.readFileSync(loc, "utf8");
        let result = markdown.makeHtml(str);
        res.render("main", {
            post_data: result
        });
    } catch(error) {
        let str = "";
        for (let i = 0; i < db.length; i++) {
            str += "<a href=\""+db[i].url+"\"/><ul id=\"clickable\">"+db[i].title+"<aside>"+db[i].date+"</aside></ul></a>";
        }
        res.render("main", {
            blog_data: str
        });
    }
    
});

app.listen(3000);