var mongs = require('../controllers/mongs.js');


module.exports = function(app){

app.get('/', function(req, res){
    mongs.index(req, res);
});

app.get('/newPage', function(req, res){
    res.render('new');
});

app.get('/editMongoose/:id', function(req, res){
    mongs.edit(req, res);
});

app.get('/profile/:id', function(req, res){
    mongs.profile(req, res);
});

app.post('/updateMong/:id', function(req, res){
    mongs.update(req, res);    
});

app.post('/createMongoose', function(req, res) {
    mongs.create(req, res);
})

}
