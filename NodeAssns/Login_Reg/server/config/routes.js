var users = require('../controllers/userController.js');

module.exports = function(app){

app.get('/', function(req, res){
    users.index(req, res);
});

app.post('/register', function(req, res){
    users.register(req, res);
});

app.post('/login', function(req, res){
    users.login(req, res);
});

app.get('/success', function(req, res){
    users.success(req, res);
});

app.post('/logout', function(req, res){
    users.logout(req, res);
});

}