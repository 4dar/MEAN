var mongoose = require('mongoose');
var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    firstName: { type: String, validate: /[a-z]/ },
    lastName: { type: String, validate: /[a-z]/ },
    email: { 
        type: String, 
        unique: true,
        validate: {
            validator: function( value ) {
            return emailRegex.test( value );
            },
            message: "Email failed validation" } 
    },
    password: { 
        type: String, 
        validate: {
            validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
            },
            message: "Password failed validation, you must have at least 1 number, uppercase and special character" } 
    },
    birthday: Date,

},
    {timestamps: true}
);


UserSchema.pre('save', function(done){
    console.log('We bout to do bcrypt');
    bcrypt.hash(this.password, 10)
    .then(hashed_password => {
        this.password = hashed_password;
        done();
    })
    .catch(error => {
        console.log(error);
        done();
    })
  });

var User = mongoose.model('User', UserSchema);