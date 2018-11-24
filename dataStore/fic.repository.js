var User = require("../resources/user/user.model");
var Fic = require("../resources/fic/fic.model");
var Chapter = require("../resources/chapter/chapter.model");

/*
 *    FINDS
 */

exports.findFics = () => {
  let fics = Fic.find({})
    .populate("_author")
    .populate("_chapters")
    .exec();

  return fics;
};

exports.findFicById = ficId => {
  let fic = Fic.findOneAndUpdate({ _id: ficId }, { $inc: { views: 1 } })
    .populate("_author")
    .populate("_chapters")
    .exec();

  return fic;
};

exports.findPopularFics = popularity => {
  let query = {};
  switch (popularity) {
    case "day":
      query = {
        $gte: new Date(new Date() - 1 * 60 * 60 * 24 * 1000)
      };
    case "week":
      query = {
        $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000)
      };
    case "month":
      query = {
        $gte: new Date(new Date() - 30 * 60 * 60 * 24 * 1000)
      };
    default:
      query = {
        $lte: new Date()
      };
  }
  let fics = Fic.find({ updated_at: query }, { sort: { views: -1 } }).exec();
  return fics;
};

exports.findFicsByQuery = query => {
  let fics = Fic.find(query)
    .populate("_author")
    .populate("_chapters")
    .exec();

  return fics;
};

exports.findFicsCategories = () => {
  let categories = Fic.find({})
    .select("category")
    .exec();

  return categories;
};

exports.findFicsGenres = () => {
  let genres = Fic.find({})
    .select("genre")
    .exec();

  return categories;
};

/*
 *    CREATES/UPDATES
 */

exports.createFic = body => {
  let fic = new Fic(body);

  return fic.save();
};

exports.addChapter = (ficId, chapterId) => {
  return Fic.findOneAndUpdate(
    { _id: ficId },
    { $addToSet: { _chapters: chapterId } }
  ).exec();
};

exports.removeChapter = (ficId, chapterId) => {
  return Fic.findOneAndUpdate(
    { _id: ficId },
    { $pull: { _chapters: chapterId } }
  ).exec();
};

exports.updateFic = (id, body) => {
  let fic = Fic.updateOne({ _id: id }, { $set: body }).exec();

  return fic;
};

/*
 *    DELETES
 */

exports.deleteFic = async id => {
  let fic = await Fic.findById(id).exec();
  let deleteChaptersPromises = fic._chapters.map(chapterId => {
    Chapter.deleteOne({ _id: chapterId }).exec();
    User.findOneAndUpdate(
      { _id: fic._author },
      { $pull: { _chapters: chapterId } }
    ).exec();
  });

  Promise.all(deleteChaptersPromises).then(() => {
    let deleteFic = Fic.deleteOne({ _id: id }).exec();
    User.findOneAndUpdate(
      { _id: fic._author },
      { $pull: { _fics: id, fav_fics: id } }
    ).exec();
    return deleteFic;
  });
};
