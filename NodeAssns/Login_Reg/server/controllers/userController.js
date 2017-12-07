var mongoose = require('mongoose')
var User = mongoose.model('User')
var bcrypt = require('bcrypt');
var session = require("express-session")

module.exports = {
    index: function(req, res){
        res.render('index');
    },

    register: function(req, res){
        var newUser = new User({
            firstName: req.body.firstName, 
            lastName: req.body.lastName, 
            email: req.body.email, 
            password: req.body.password, 
            birthday: req.body.birthday
            });

        if(req.body.password === req.body.pconfirm){
            newUser.save(function(err, newUser) {
        
            if(err) {
                console.log(err);
                console.log('Something went horribly wrong');
            } else { 
                console.log('Successfully Registered');
            }
            res.redirect('/');
            })
        }
        else{
            console.log('Your passwords do not match');
        }

    },

    login: function(req, res){
        User.findOne({email: req.body.email}, function(errMess, dbUser){
            console.log('This is initial dbUser', dbUser)
            if(req.body.email === dbUser.email){
                bcrypt.compare(req.body.password, dbUser.password)
                .then(function(){
                    req.session.sessionId = dbUser._id;
                    console.log(dbUser._id);
                    console.log('Logged in. User in session is:', req.session.sessionId);
                    res.redirect('/success');
                })
                .catch(errMess)
                
            }
            else{
                console.log(errMess);
                console.log('Login Failed');
                res.redirect('/');
            }
                
        })
    },
    success: function(req, res){
        res.render('success');
    },

    logout: function(req, res){
        req.session.destroy();
        console.log('User has logged out');
        res.redirect('/');
    }

}

