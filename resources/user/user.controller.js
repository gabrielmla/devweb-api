var User = require("./user.model");
var userRepository = require("../../dataStore/user.repository");
var RequestStatus = require("../../constants/requestStatus");
var RequestMsgs = require("../../constants/requestMsgs");

exports.index = (req, res) => {
  userRepository
    .findUsers()
    .catch(err => {
      res.status(RequestStatus.BAD_REQUEST).send(err);
    })
    .then(result => {
      res.status(RequestStatus.OK).json({ users: result });
    });
};

exports.show = (req, res) => {
  userRepository
    .findUserByProfileName(req.params.profile_name)
    .then(user => {
      res.status(RequestStatus.OK).json(user);
    })
    .catch(error => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};

exports.create = (req, res) => {
  userRepository
    .createUser(req.body)
    .then(createdUser => {
      res
        .status(RequestStatus.OK)
        .json({ result: createdUser, msg: "User created." });
    })
    .catch(err => {
      if (err && err.name === "MongoError" && err.code === 11000) {
        res.status(RequestStatus.FORBIDDEN).json(RequestMsgs.DUPLICATED_ENTITY);
      } else {
        res.status(RequestStatus.BAD_REQUEST).json(err);
      }
    });
};

exports.update = (req, res) => {
  userRepository
    .updateUser(req.params.user_id, req.body)
    .then(updatedUser => {
      res
        .status(RequestStatus.OK)
        .json({ result: updatedUser, msg: "User updated." });
    })
    .catch(error => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};

exports.addFavFic = (req, res) => {
  userRepository
    .addFavorite(req.params.user_id, req.params.fic_id)
    .then(updatedUser => {
      res
        .status(RequestStatus.OK)
        .json({ result: updatedUser, msg: "Fic favorited." });
    })
    .catch(error => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};

exports.removeFavFic = (req, res) => {
  userRepository
    .removeFavorite(req.params.user_id, req.params.fic_id)
    .then(updatedUser => {
      res
        .status(RequestStatus.OK)
        .json({ result: updatedUser, msg: "Favorite Fic removed." });
    })
    .catch(error => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};

exports.delete = (req, res) => {
  userRepository
    .deleteUser(req.params.user_id)
    .then(() => {
      res.status(RequestStatus.OK).json({ msg: "User deleted." });
    })
    .catch(error => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};
