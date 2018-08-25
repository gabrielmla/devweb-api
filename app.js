var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var path           = require('path');
var mongoose       = require('mongoose');
var passport       = require('passport');
var session        = require('express-session');
var MongoStore     = require('connect-mongo')(session);

var db = require('./config/db');
var PORT = process.env.PORT || 3000;
var ENV = process.env.ENVIROMENT || 'development'

var db_url;
if (ENV == 'production') {
  db_url = db.url;
} else {
  db_url = db.local_url;
}

mongoose.connect(db_url, { useNewUrlParser: true });

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// ==================================
app.get('/', (req, res) => {
	res.send('Fanfic API.');
});

// ==================================

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(PORT);
console.log('Deployed on port ' + PORT);

// expose app
exports = module.exports = app;