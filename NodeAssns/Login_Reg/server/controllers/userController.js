var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {
    index: function(req, res){
        res.render('index');
    },

    register: function(req, res){
        var newUser = new User({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, password: req.body.password, birthday: req.body.birthday});
        newUser.save(function(err) {
            
            if(err) {
                console.log('Something went horribly wrong');
            } else { 
                console.log('Successfully Registered');
            }
            res.redirect('/');
        })
    },

    login: function(req, res){
        res.redirect('/success');
    },


}