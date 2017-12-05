var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    birthday: Date,

},
    {timestamps: true}
);

var User = mongoose.model('User', UserSchema);