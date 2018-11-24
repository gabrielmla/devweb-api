var User = require("../resources/user/user.model");
var Chapter = require("../resources/chapter/chapter.model");
var Fic = require("../resources/fic/fic.model");

/*
 *    FINDS
 */

exports.findChapters = () => {
  let chapters = Chapter.find({})
    .populate("_author")
    .populate("_fic")
    .exec();

  return chapters;
};

exports.findChapterById = chapterId => {
  let chapter = Chapter.findById(chapterId)
    .populate("_author")
    .populate("_fic")
    .exec();

  return chapter;
};

exports.findChaptersByQuery = query => {
  let chapters = Chapter.find(query)
    .populate("_author")
    .populate("_fic")
    .exec();

  return chapters;
};

/*
 *    CREATES/UPDATES
 */

exports.createChapter = body => {
  let chapter = new Chapter(body);

  return chapter.save();
};

exports.updateChapter = (id, body) => {
  let chapter = Chapter.updateOne({ _id: id }, { $set: body }).exec();

  return chapter;
};

/*
 *    DELETES
 */

exports.deleteChapter = async id => {
  let chapter = await Chapter.findById(id).exec();
  let fic = Fic.findOneAndUpdate(
    { _id: chapter._fic },
    { $pull: { _chapters: chapter._id } }
  ).exec();
  let author = User.findOneAndUpdate(
    { _id: chapter._author },
    { $pull: { _chapters: chapter._id } }
  );
  let deleteChapter = Chapter.deleteOne({ _id: id }).exec();

  return deleteChapter;
};
