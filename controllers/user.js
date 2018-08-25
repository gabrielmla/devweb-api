var User = require('../models/User');
var RequestStatus = require('../constants/requestStatus');

exports.index = (req, res) => {
  User.find({})
	  .catch((err) => {
	    res.status(RequestStatus.BAD_REQUEST).send(err);
	  })
	  .then((result) => {
	    res.status(RequestStatus.OK).json(result);
	  });
};

exports.show = (req, res) => {
	User.findById(req.params.user_id)
		.then((user) => {
			res.status(RequestStatus.OK).json(user);
		})
		.catch((error) => {
			res.status(RequestStatus.BAD_REQUEST).json(error);
		});
};

exports.create = (req, res) => {
  var user = new User(req.body);

  user.generateHash(req.body.password)
  	.then((hash) => {
  		user.password = hash;
  		user.save((err) => {
  			if (err && err.name === 'MongoError' && err.code === 11000) {
					res.status(RequestStatus.FORBIDDEN).send(err);
        } else {
          res.status(RequestStatus.OK).send('User created.');
        }
  		});
  	})
  	.catch((error) => {
  		res.status(RequestStatus.BAD_REQUEST).send(err);
  	});
};

exports.update = (req, res) => {
	User.updateOne({ _id: req.params.user_id }, { $set: req.body })
		.then(() => {
			res.status(RequestStatus.OK).send('User updated!');
		})
		.catch((error) => {
			res.status(RequestStatus.BAD_REQUEST).json(error);
		});
};

exports.delete = (req, res) => {
	User.deleteOne({ _id: req.params.user_id })
		.then(() => {
			res.status(RequestStatus.OK).send('User deleted.');
		})
		.catch((error) => {
			res.status(RequestStatus.BAD_REQUEST).send(error);
		});
};