var User = require('../models/User');
var RequestStatus = require('../constants/requestStatus');

/**
 * @api {get} /user Get all Users
 * @apiName GetUsers
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Object[]} users All users registred.
 * @apiSuccess {String} user.profile_name  Profile name of the User.
 * @apiSuccess {String} user.username  Username name of the User.
 * @apiSuccess {String} user.email  Email of the User.
 */
exports.index = (req, res) => {
  User.find({})
	  .catch((err) => {
	    res.status(RequestStatus.BAD_REQUEST).send(err);
	  })
	  .then((result) => {
	    res.status(RequestStatus.OK).json({ users: result });
	  });
};

/**
 * @api {get} /user/:id Get User
 * @apiName GetUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam id Users unique ID.
 *
 * @apiSuccess {String} profile_name  Profile name of the User.
 * @apiSuccess {String} username  Username name of the User.
 * @apiSuccess {String} email  Email of the User.
 */
exports.show = (req, res) => {
	User.findById(req.params.user_id)
		.then((user) => {
			res.status(RequestStatus.OK).json(user);
		})
		.catch((error) => {
			res.status(RequestStatus.BAD_REQUEST).json(error);
		});
};

/**
 * @api {post} /user Create a User
 * @apiName PostUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam profile_name  Profile name of the User.
 * @apiParam username  Username name of the User.
 * @apiParam email  Email of the User.
 *
 * @apiSuccess {Object} result The operation result.
 * @apiSuccess {String} result.profile_name  Profile name of the User.
 * @apiSuccess {String} result.username  Username name of the User.
 * @apiSuccess {String} result.email  Email of the User.
 * @apiSuccess {String} msg Response message.
 */
exports.create = (req, res) => {
  var user = new User(req.body);

  user.generateHash(req.body.password)
  	.then((hash) => {
  		user.password = hash;
  		user.save((err, createdUser) => {
  			if (err && err.name === 'MongoError' && err.code === 11000) {
					res.status(RequestStatus.FORBIDDEN).json(err);
        } else {
          res.status(RequestStatus.OK).json({ result: createdUser, msg: 'User created.' });
        }
  		});
  	})
  	.catch((error) => {
  		res.status(RequestStatus.BAD_REQUEST).json(err);
  	});
};

/**
 * @api {put} /user/:id Update a User
 * @apiName PutUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam [profile_name]  Optional updated profile_name field to the User.
 * @apiParam [username]  Optional updated username name to the User.
 * @apiParam [email]  Optional updated email to the User.
 *
 * @apiSuccess {Object} result The operation result.
 * @apiSuccess {String} result.profile_name  Profile name of the User.
 * @apiSuccess {String} result.username  Username name of the User.
 * @apiSuccess {String} result.email  Email of the User.
 * @apiSuccess {String} msg Response message.
 */
exports.update = (req, res) => {
	User.updateOne({ _id: req.params.user_id }, { $set: req.body })
		.then((updatedUser) => {
			res.status(RequestStatus.OK).json({result: updatedUser, msg: 'User updated.'});
		})
		.catch((error) => {
			res.status(RequestStatus.BAD_REQUEST).json(error);
		});
};

/**
 * @api {delete} /user/:id Delete User
 * @apiName DeleteUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam id Users unique ID.
 *
 * @apiSuccess msg Response message.
 */
exports.delete = (req, res) => {
	User.deleteOne({ _id: req.params.user_id })
		.then(() => {
			res.status(RequestStatus.OK).json({msg: 'User deleted.'});
		})
		.catch((error) => {
			res.status(RequestStatus.BAD_REQUEST).json(error);
		});
};
