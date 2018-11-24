var dotenv = require("dotenv").load();
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var morgan = require("morgan");
var path = require("path");
var cors = require("cors");
var mongoose = require("mongoose");
var passport = require("passport");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);

// ENVIROMENT VARIABLES
var PORT = process.env.PORT || 5000;
var ENV = process.env.ENVIROMENT || "development";

// Mongoose Connection
var db = require("./config/db");
var db_url;
if (ENV == "production") {
  db_url = db.url;
} else {
  db_url = db.local_url;
}

mongoose.connect(
  db_url,
  { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);

// Passport Session
require("./config/passport")(passport);
app.use(
  session({
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 60 * 60 // = 60 minutos de sessão
    }),
    secret: process.env.SESSION_SECRET || "local-secret",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Morgan
app.use(morgan("dev"));

// Static files
app.use("/static", express.static("public"));
app.use("/api", express.static(__dirname + "/public/apidoc"));

// parse application/json
app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride("X-HTTP-Method-Override"));

// ======= ROUTES
var corsOptions = require("./config/cors");
if (ENV == "production") {
  // CorsOptions
  app.use(cors());
} else {
  app.use(cors());
}

app.get("/", (req, res) => {
  res.send("Fanfic API.");
});

var authRoutes = require("./resources/auth/auth.router");
app.use("/auth", authRoutes);

var userRoutes = require("./resources/user/user.router");
app.use("/user", userRoutes);

var ficRoutes = require("./resources/fic/fic.router");
app.use("/fic", ficRoutes);

var chapterRoutes = require("./resources/chapter/chapter.router");
app.use("/chapter", chapterRoutes);

// start app ===============================================
app.listen(PORT);
console.log("Deployed on port " + PORT);

// expose app
exports = module.exports = app;
