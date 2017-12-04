var session = require("express-session");
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/mongooseDash');

var MongSchema = new mongoose.Schema({
    name: String,
    age: Number,
    hobby: String,
},
    {timestamps: true}
);

mongoose.model('Mong', MongSchema); // We are setting this Schema in our Models as 'User'
var Mong = mongoose.model('Mong') // We are retrieving this Schema from our Models, named 'User'

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));

// // // // // // // // // 

app.get('/', function(req, res){
    Mong.find({}, function(errors, dbMongs){
        if(errors) {
            console.log('Something went horribly wrong');
        }
        res.render('index', {mongs: dbMongs});
    })
});

app.get('/newPage', function(req, res){
    res.render('new');
});

app.get('/editMongoose/:id', function(req, res){
    Mong.findOne({_id: req.params.id}, function(errors, dbMong){
        if(errors) {
            console.log('Something went horribly wrong');
        }
        res.render('edit', {thisMong: dbMong});
    })
});

app.get('/profile/:id', function(req, res){
    Mong.findOne({_id: req.params.id}, function(errors, dbMong){
        if(errors) {
            console.log('Something went horribly wrong');
        }
        res.render('profile', {thisMong: dbMong});
    })
});

app.post('/updateMong/:id', function(req, res){
    Mong.update({_id: req.params.id}, {name: req.body.name, age: req.body.age, hobby: req.body.hobby}, function(errors){
        if(errors){
            console.log('Problem updating Mongoose');
        }
        res.redirect(`/profile/${req.params.id}`);
        }
    );    
});

app.post('/createMongoose', function(req, res) {
    var newMong = new Mong({name: req.body.name, age: req.body.age, hobby: req.body.hobby});
    newMong.save(function(err) {
        
        if(err) {
          console.log('Something went horribly wrong');
        } else { 
          console.log('Successfully created a Mongoose!');
        }
        res.redirect('/');
    })
})

app.listen(8000, function(){
    console.log(__dirname);
    console.log("Listening on port 8000");
});
