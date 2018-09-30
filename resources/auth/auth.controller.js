var passport = require('passport');
var _        = require('underscore');
var RequestStatus = require('../../constants/requestStatus');

exports.login = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(RequestStatus.UNAUTHORIZED).json({ err: info });
    }

    req.logIn(user, function(err) {
      if (err) {
        return res.status(RequestStatus.INTERNAL_SERVER_ERROR).json({ err: err, msg: 'Could not log in user' });
      }

      res.status(RequestStatus.OK).json({ msg: 'Login successful!' });

    });
  })(req, res, next);
}

exports.logout = function(req, res) {
  req.logout();
  res.status(RequestStatus.OK).send('Logged out!');
}

exports.status = function(req, res) {
  var user = req.user;
  if (user) {
    res.status(RequestStatus.OK).json({user: user, status: true});
  } else {
    res.status(RequestStatus.OK).json({status: false});
  }
}

exports.authorizeAdmin = function(req, res, next) {
  let user = req.user;

  if (user && user.is_admin) {
    next();
  } else {
    res.status(RequestStatus.UNAUTHORIZED).send('Unauthorized (only admins can access this resource)');
  }
}

exports.authorizeUser = function(req, res, next) {
  let user = req.user;

  if (user) {
    next();
  } else {
    res.status(RequestStatus.UNAUTHORIZED).send('Unauthorized');
  }
}
