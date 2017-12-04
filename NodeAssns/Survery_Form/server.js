
var session = require("express-session");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));


app.get('/', function(req, res){
    res.render('index');
});

app.get('/result_page', function(req, res){
    res.render('result', { "person": req.session.formData })
});

app.post('/survey', function(req, res){
    req.session.formData = req.body
    res.redirect('/result_page')
});

app.post('/back', function(req, res){
    res.redirect('/')
});


app.listen(8000, function(){
    console.log(__dirname);
    console.log("Listening on port 8000");
});




