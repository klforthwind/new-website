const handlebars = require("express-handlebars");
const markdown = require("markdown-js");
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

let db = [
    {
        "title": "OSI Seven Layer Model",
        "url": "osi-model",
        "date": "June 1st"
    },
    {
        "title": "Setting Up Basic React App",
        "url": "react-init",
        "date": "May 31st"
    },
    {
        "title": "Insomnia / Postman",
        "url": "insomnia-postman",
        "date": "May 31st"
    },
	{
        "title": "Update On The Blog",
        "url": "update05302019",
        "date": "May 30th"
    },
    {
        "title": "Node, Npm, and Express",
        "url": "node-express",
        "date": "May 30th"
    },
    {
        "title": "HTTP Statuses",
        "url": "http-statuses",
        "date": "May 29th"
    },
    {
        "title": "REST Api Using Python Flask",
        "url": "rest-flask-python",
        "date": "May 29th"
    },
    {
        "title": "Helpful PostgreSQL Information",
        "url": "postgresql-database",
        "date": "May 28th"
    },
    {
        "title": "How I Set Up This Blog",
        "url": "blog-creation",
        "date": "May 27th"
    },
    {
        "title": "Apache2 Concrete5 Website With phpMyAdmin",
        "url": "concrete5-website",
        "date": "May 26th"
    },
    {
        "title": "First Post",
        "url": "first-post",
        "date": "May 24th"
    }
];

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