var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan         = require('morgan');
var path           = require('path');
var mongoose       = require('mongoose');
var passport       = require('passport');
var swagger        = require('swagger-express');
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

require('./config/passport')(passport);
app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 60 * 60 // = 30 minutos de sessão
  }),
  secret: process.env.SESSION_SECRET || 'local-secret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(morgan('dev'));

app.use('/static', express.static('public'));

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// ==================================
app.get('/', (req, res) => {
	res.send('Fanfic API.');
});

var userRoutes = require('./routes/user');
app.use('/user', userRoutes);

var authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// ==================================

// API documentation UI
app.use(swagger.init(app, {
  apiVersion: '1.0',
  swaggerVersion: '1.0',
  basePath: 'http://localhost:3000',
  swaggerURL: '/swagger',
  swaggerJSON: '/api-docs.json',
  swaggerUI: './doc/swagger/',
  apis: ['./controllers/auth.js','./doc/api.yml']
}));

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(PORT);
console.log('Deployed on port ' + PORT);

// expose app
exports = module.exports = app;