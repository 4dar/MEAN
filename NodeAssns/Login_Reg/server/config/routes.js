var users = require('../controllers/userController.js');

module.exports = function(app){

app.get('/', function(req, res){
    users.index(req, res);
});

app.post('/register', function(req, res){
    users.register(req, res);
})

app.get('/login', function(req, res){
    users.login(req, res);
})






}