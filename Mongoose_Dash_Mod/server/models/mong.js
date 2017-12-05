var mongoose = require('mongoose');

var MongSchema = new mongoose.Schema({
    name: String,
    age: Number,
    hobby: String,
},
    {timestamps: true}
);

var Mong = mongoose.model('Mong', MongSchema);