var User          = require('../resources/user/user.model');
var Chapter       = require('../resources/chapter/chapter.model');

/*
 *    FINDS
*/

exports.findChapters = () => {
  let chapters = Chapter
    .find({})
    .populate('_author')
    .populate('_fic')
    .exec();

  return chapters;
}

exports.findChapterById = (chapterId) => {
  let chapter = Chapter
    .findById(chapterId)
    .populate('_author')
    .populate('_fic')
    .exec();

  return chapter;
}

exports.findChaptersByQuery = (query) => {
  let chapters = Chapter
    .find(query)
    .populate('_author')
    .populate('_fic')
    .exec();

  return chapters;
}

/*
 *    CREATES/UPDATES
 */

exports.createChapter = (body) => {
  let chapter = new Chapter(body).save();

  return chapter;
}

exports.updateChapter = (id, body) => {
  let chapter = Chapter
    .updateOne({ _id: id }, { $set: body })
    .exec();

  return chapter;
}

/*
 *    DELETES
 */

exports.deleteChapter = (id) => {
  let chapter = Chapter
    .deleteOne({ _id: id })
    .exec();

  return chapter;
}
