var User          = require('../resources/user/user.model');
var Fic           = require('../resources/fic/fic.model');

/*
 *    FINDS
*/

exports.findFics = () => {
  let fics = Fic
    .find({})
    .populate('_author')
    .populate('_chapters')
    .exec();

  return fics;
}

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

/*
 *    CREATES/UPDATES
 */

exports.createFic = (body) => {
  let fic = new Fic(body).save();

  return fic;
}

exports.updateFic = (id, body) => {
  let fic = Fic
    .updateOne({ _id: id }, { $set: body })
    .exec();

  return fic;
}

/*
 *    DELETES
 */

 exports.deleteFic = async (id) => {
   let fic = await Fic.findById(id).exec();
   let deleteChaptersPromises = fic._chapters.map((chapterId) => {
     Chapter.deleteOne({ _id: chapterId }).exec();
   });

   Promise.all(deleteChaptersPromises).then(() => {
     let deleteFic = Fic.deleteOne({ _id: id }).exec();
     return deleteFic;
   });
 }
