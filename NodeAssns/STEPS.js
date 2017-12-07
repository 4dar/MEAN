// SETUP STEPS
var session = require("express-session");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'secretssecretsarenofunloljktheyamazing'}));


mongoose.connect('mongodb://localhost/DB_name');

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
   })
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'


// BEGIN CODE // // // // // // // // // // // // // //

app.get('/', function(req, res){
  res.render('index');
});

app.listen(8000, function(){
  console.log(__dirname);
  console.log("Listening on port 8000");
});


// STEPS //

npm init -y
copy what's needed from other package.json file

// PACKAGE .JSON
{
  "name": "Login_Reg",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^1.0.3",
    "body-parser": "^1.15.0",
    "ejs": "^2.5.7",
    "express": "^4.13.4",
    "express-session": "^1.15.6",
    "mongoose": "^4.13.5"
  }
}


npm install

// END SETUP


// MONGODB commands "Document oriented Database" 
// Document aka row ... (JSON object) ... ("BSON objects" technically) - Binary JSON
// MongoDB collections don't all need to have the same fields... Very flexible!

clear => clears database
show dbs => shows all databases
use "db name" => uses a specific database
use "new db" => will make a new database
db => shows current database you are using
db.dropDatabase() => deletes a database
show collections => shows all collections aka tables
db.createCollection('name_of_new_collection') => create new collection
db.'collection_name'.drop() => deletes a collection
db.'collection_name'.insert({ document_name: "value" }) => inserts new document/row in database
db.'collection_name'.find() => retrieves all documents in collection in database
db.'collection_name'.find().pretty() => makes showing of collections organized
db.'collection_name'.find({ document_name: "value"}) => finds all entries matching object
db.'collection_name'.find({ document_name: "value", doc_name_2: "v2"}) => more specific of above
db.'collection_name'.find({_id: ObjectId("345kjadf32kjakjdafkjej")})  => query by id
db.'collection_name'.remove({ document_name: "value" }) => removes all collection entries with document_name of value
db.'collection_name'.remove({ document_name: "value" }, true) => removes JUST ONE matching this key/value pair
db.'collection_name'.update({ document_name: "value" }, { doc_2: "value2" }) => updates collection entry BUT overwrites all others key/value pairs in this entry except _id field
                        find this^ collection entry      adds this^ new object
db.'collection_name'.update({ document_name: "value" }, { $set: { doc_2: "value2" } }) => "update operator" , updates collection without overwriting other k/v pairs in this entry
db.'collection_name'.find({ number_of_students: {$gt: 15} }) => find all entries in collection whose number of students is greater than 15


// Here is a chart of the most frequently-used operators (take some time to play around with them):
name	description
$gt (greater than)	Use to query selectively on numerical-valued fields
$gte (greater than or equal to)	Use to query selectively on numerical-valued fields
$lt (less than)	Use to query selectively on numerical-valued fields
$lte (less than or equal to)	Use to query selectively on numerical-valued fields
$in (in array)	Use to find documents who have a particular value within an array.
$unset (in .update), removes a field



db.'collection_name'.update({_id: ObjectId("5463d871a6a96d5ed6252f4d")}, {$push: {interests: 'snowboarding'}}) => push a new value (snowboarding) to the current key of interests. 
db.'collection_name'.update({QUERY}, {$pop: {array_key: (1 or -1)}}) => removies either the first or last element from an array. (1 for last item, -1 for first item)
db.'collection_name'.update({QUERY}, {$pull: {array_key: VALUE}}) => removes a specified value from an array
db.'collection_name'.update({QUERY}, {$addToSet: {key: value}}) => similar to push, but will not add value if it already exists



*** MODULARIZATION ***

PROJECT FOLDER
  client/
    static/
    views/
      index.ejs
      main.ejs
  node_modules/
  server/
    config/
      mongoose.js
      routes.js
    controllers/
      quotes.js
    models/
      quote.js
  package.json
  server.js  

// config // mongoose_setup //

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/mongooseDash');
  
  var fs = require('fs')
  var path = require('path')
  
  var models_path = path.join(__dirname, '/../models');
  fs.readdirSync(models_path).forEach(function(file){
      if(file.indexOf('.js') > 0) {
          require(models_path+ '/' + file);
      }
  })

// // //