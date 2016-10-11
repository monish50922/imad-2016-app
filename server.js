var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var Articleone={
    title:'Article One | Monish Poojari',
    heading:'Article One',
    date:'sep 5 2016',
    content:`
            <p>
                This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....
            </p> 
            <p>
                This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....
            </p>
            <p>
                This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....This is My First article Displayed....
            </p>
    
    `,
    
};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
var htmltemplate =`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
     
    </head>

    <body>
        <div class="container">
        
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
           ${heading}
        </h3>
        <div>
            Sept18,2016
        </div>
        <div> 
            ${content}
        </div>
    </div>
    </body>
</html>
`;
return htmltemplate;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/Article-one',function(req,res){
    res.send(createTemplate(Articleone));
    
});
app.get('/Article-two',function(req,res){
   res.sendFile(path.join(__dirname,'ui','articletwo.html'));
});
app.get('/Article-three',function(req,res){
   res.sendFile(path.join(__dirname,'ui','articlethree.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
