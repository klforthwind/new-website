// database.js
exports.db = [
    {
        "title": "Another Update On The Blog",
        "url": "update07132019",
        "date": "July 13th"
    },
    {
        "title": "AVR != ARM",
        "url": "avr-arm",
        "date": "July 9th"
    },
    {
        "title": "Blog Switch From Python Flask to NodeJS React",
        "url": "blog-language-switch",
        "date": "June 8th"
    },
    {
        "title": "I'm Graduating!",
        "url": "graduation",
        "date": "June 7th"
    },
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
]

exports.getPostList = function() {
    let str = "";
    for (let i = 0; i < exports.db.length; i++) {
        str += "<a href=\""+exports.db[i].url+
        "\"/><ul id=\"clickable\">"+exports.db[i].title+
        "<aside>"+exports.db[i].date+"</aside></ul></a>";
    }
    return str;
}
