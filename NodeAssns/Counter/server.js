// SETUP STEPS
var session = require("express-session");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));

// END SETUP

app.get('/', function(req, res){
    var count;
    if(!req.session.counter){
        req.session.counter = 1;
        count = req.session.counter;
    }
    else{
        req.session.counter +=1;
        count = req.session.counter;
    }
    res.render('index', { counter: count });
});

app.post('/addtwo', function(req, res){
    req.session.counter +=1;
    res.redirect('/');
});
  
app.post('/reset', function(req, res){
    req.session.destroy();
    res.redirect('/');
});

app.listen(8000, function(){
    console.log(__dirname);
    console.log("Listening on port 8000");
});

