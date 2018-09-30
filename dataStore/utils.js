var User          = require('../resources/user/user.model');
var Fic           = require('../resources/fic/fic.model');
var Chapter       = require('../resources/chapter/chapter.model');
var _             = require('underscore');

/*
 *    FINDS
*/
exports.findFicById = (ficId) => {
  let fic = Fic
    .findOneAndUpdate({ "_id": ficId }, {$inc: { "views" : 1 }})
    .populate('_author')
    .populate('_chapters')
    .exec();

  return fic;
}

exports.findFicsByQuery = (query) => {
  let fics = Fic
    .find(query)
    .populate('_author')
    .populate('_chapters')
    .exec();

  return fics;
}

exports.findFicsCategories = () => {
  let categories = Fic
    .find({})
    .select('category')
    .exec();

  return categories;
}

exports.findFicsGenres = () => {
  let genres = Fic
    .find({})
    .select('genre')
    .exec();

  return categories;
}

exports.findChapterById = (chapterId) => {
  let chapter = Chapter
    .findById(chapterId)
    .populate('_author')
    .populate('_chapters')
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
 *    CREATES
*/

/*
 *    DELETES
*/
