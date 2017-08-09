var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: 'Article one ! Manodhar Nianwal',
        heading: 'Article one', 
        date: 'September 7, 2017',           
        content: ` 
         <p>
            This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
         </p>
         <p>
            This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
         </p>
         <p>
              This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
         </p> ` 
    },
        
    'article-two': {
        title: 'Article Two ! Manodhar Nianwal',
        heading: 'Article Two', 
        date: 'September 8, 2017',           
        content: ` 
         <p>
            This is the content for my Second article. This is the content for my Second article. This is the content for my Second article. This is the content for my Second article. This is the content for my Second article. This is the content for my Second article.
        </p> `   
    },
    
    'article-three': {
        title: 'Article Three ! Manodhar Nianwal',
        heading: 'Article Three', 
        date: 'September 9, 2017',           
        content: `   
         <p>
            This is the content for my Third article. This is the content for my Third article. This is the content for my Third article. This is the content for my Third article. 
         </p> `    
    },
};
      
function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=divice-width, initail-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <o href ="/">home</o>
        </div>
        <hr>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
            <div>
            ${content}
            </div>
        </div>
    </body>
    </html>
 `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
  counter = counter + 1;
  res.send(counter.toString());
});

app.get('/:articleName', function(req,res) {
    // articleName = article-one
    // articles[articleName] .... {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80
var names = [];
app.get('/submit-name:name', function(raq, res) {
// get the name from the request
var name; req.params.name;

names.push(names);
// JSON: Javascript Object Notation
res.send(JSON.stringify(names));
});

var port = 80;
app.listen(port, function (){ 
  console.log(`IMAD course app listening on port ${port}!`);
});
