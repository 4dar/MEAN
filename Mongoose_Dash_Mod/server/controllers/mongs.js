var mongoose = require('mongoose')
var Mong = mongoose.model('Mong')


module.exports = {

    index: function(req, res){
        Mong.find({}, function(errors, dbMongs){
            if(errors) {
                console.log('Something went horribly wrong');
            }
            res.render('index', {mongs: dbMongs});
            
        })
    },
    edit: function(req, res){
        Mong.findOne({_id: req.params.id}, function(errors, dbMong){
            if(errors) {
                console.log('Something went horribly wrong');
            }
            res.render('edit', {thisMong: dbMong});
        })
    },
    profile: function(req, res){
        Mong.findOne({_id: req.params.id}, function(errors, dbMong){
            if(errors) {
                console.log('Something went horribly wrong');
            }
            res.render('profile', {thisMong: dbMong});
        })
    },
    update: function(req, res){
        Mong.update({_id: req.params.id}, {name: req.body.name, age: req.body.age, hobby: req.body.hobby}, function(errors){
            if(errors){
                console.log('Problem updating Mongoose');
            }
            res.redirect(`/profile/${req.params.id}`);
            }
        );
    },
    create: function(req, res){
        var newMong = new Mong({name: req.body.name, age: req.body.age, hobby: req.body.hobby});
        newMong.save(function(err) {
            
            if(err) {
              console.log('Something went horribly wrong');
            } else { 
              console.log('Successfully created a Mongoose!');
            }
            res.redirect('/');
        })
    }

}