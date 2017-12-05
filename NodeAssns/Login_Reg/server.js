var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/client/static"));
app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');


var session = require("express-session");
app.use(session({secret: 'codingdojorocks'}));


require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app)

app.listen(8000, function(){
    console.log(__dirname);
    console.log("Listening on port 8000");
});
