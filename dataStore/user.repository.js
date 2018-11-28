var User = require("../resources/user/user.model");
var Chapter = require("../resources/chapter/chapter.model");
var Fic = require("../resources/fic/fic.model");
var ficRepository = require("./fic.repository");

/*
 *    FINDS
 */

exports.findUsers = () => {
  let users = User.find({}).exec();

  return users;
};

exports.findUserById = userId => {
  let user = User.findById(userId)
    .populate("_fics")
    .populate("_chapters")
    .populate("fav_fics")
    .exec();

  return user;
};

exports.findUserByProfileName = profileName => {
  let user = User.find({ "profile_name": profileName })
    .populate("_fics")
    .populate("_chapters")
    .populate("fav_fics")
    .exec();

  return user;
}

/*
 *    CREATES/UPDATES
 */

exports.createUser = async body => {
  let user = new User(body);
  let hashPassword = await user.generateHash(body.password);
  user.profile_name = body.username;
  user.password = hashPassword;

  return user.save();
};

exports.updateUser = (id, body) => {
  let user = User.updateOne({ _id: id }, { $set: body }).exec();

  return user;
};

exports.addFavorite = (userId, ficId) => {
  return User.findOneAndUpdate(
    { _id: userId },
    { $addToSet: { fav_fics: ficId } }
  ).exec();
};

exports.removeFavorite = (userId, ficId) => {
  return User.findOneAndUpdate(
    { _id: userId },
    { $pull: { fav_fics: ficId } }
  ).exec();
};

/*
 *    DELETES
 */

exports.deleteUser = async userId => {
  let fics = await Fic.find({ _author: userId }).exec();
  let ficsDeletePromises = fics.map(fic => {
    ficRepository.deleteFic(fic._id);
  });

  Promise.all(ficsDeletePromises).then(() => {
    let deleteUser = User.deleteOne({ _id: userId }).exec();
    return deleteUser;
  });
};
