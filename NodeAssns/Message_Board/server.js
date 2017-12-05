var session = require("express-session");
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var app = express();

mongoose.connect('mongodb://localhost/messageBoard');
// Message Schema
var MessageSchema = new mongoose.Schema({
    username: String,
    message: String,
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
},
    {timestamps: true}
);
mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');

// Comment Schema
var CommentSchema = new mongoose.Schema({
    username: String,
    comment: String,
    _message: {type: Schema.Types.ObjectId, ref: 'Message'}
},
    {timestamps: true}
);
mongoose.model('Comment', CommentSchema); 
var Comment = mongoose.model('Comment');

// app shit
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));

// BEGIN // DOING // CODE // STUFF // 

app.get('/', function(req, res){
    Message.find({})
    .populate('_comments')
    .exec(function(errors, dbMessages){
        if(errors) {
            console.log('Something went horribly wrong... RIP');
        }
        console.log("DB MESSAGES IN GET /")
        console.log(dbMessages);
        res.render('index', {messages: dbMessages});
    })
});

app.post('/leaveComment/:id', function(req, res) {
    Message.findOne({_id: req.params.id}, function(errMess, dbMessage){
        console.log("DB MESSAGES ")
        console.log(dbMessage);

    var newComment = new Comment({username: req.body.username, comment: req.body.comment});
        newComment._message = dbMessage._id

        console.log("DB NEW COMMENT BE4 SAVE")
        console.log(newComment)
        newComment.save(function(err){
                dbMessage._comments.push(newComment);
                dbMessage.save(function(errors){
                    res.redirect('/');
                })
        })
    })
})

app.post('/createMessage', function(req, res) {
    var newMessage = new Message({username: req.body.username, message: req.body.message});
    newMessage.save(function(err) {
        
        if(err) {
          console.log('Something went horribly wrong');
        } else { 
          console.log('Successfully created a Message');
        }
        res.redirect('/');
    })
})
app.post('/deleteMessage', function(req,res){
    Message.remove({});
    res.redirect('/');
})


app.listen(8000, function(){
    console.log(__dirname);
    console.log("Listening on port 8000");
});




// <% for(var i = 0; i < messages.length; i++) { %>
//     <fieldset>
//         <h4>Name: <%= messages[i].username %></h4>
//         <h5>Message: <%= messages[i].message %> </h5>
//         <% for(var k = 0; k <= messages[i]._comments.length; k++) { %>
//             <h6><%= messages[i]._comments[k] %></h6>
//         <% } %>