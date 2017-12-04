var session = require("express-session");
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/basicDB');

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
   })
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));

// // // // // // // // // // // // // // // // //

app.get('/', function(req, res){
    User.find({}, function(errors, dbUsers){
    res.render('index', {users: dbUsers});
    })
});

app.post('/users', function(req, res) {
    var new_user = new User({name: req.body.name, age: req.body.age});
    console.log(new_user);
    new_user.save(function(err) {
        
        if(err) {
          console.log('something went wrong');
        } else { 
          console.log('successfully added a user!');
        }
        res.redirect('/');
        })
})

app.listen(8000, function(){
    console.log(__dirname);
    console.log("Listening on port 8000");
});
