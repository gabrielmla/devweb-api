var express = require('express');
var router  = express.Router();

var chapterController = require('./chapter.controller');

/**
 * @api {get} /chapter Get all Chapters
 * @apiName GetChapters
 * @apiGroup Chapter
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Object[]} chapters All chapters registred.
 */
router.get('/', chapterController.index);

/**
 * @api {get} /chapter Get all Chapters
 * @apiName GetChapters
 * @apiGroup Chapter
 * @apiVersion 1.0.0
 *
 * @apiSuccess {String} chapter.title  Title of the Chapter.
 * @apiSuccess {String} chapter._author  User id author of the Chapter.
 * @apiSuccess {String} chapter._fic  Fic id that the Chapter belongs.
 * @apiSuccess {String} chapter.text  Text of the Chapter.
 */
router.get('/:chapter_id', chapterController.show);

/**
 * @api {get} /chapter Get all Chapters of one Author (User)
 * @apiName GetChapters
 * @apiGroup Chapter
 * @apiVersion 1.0.0
 *
 * @apiParam user_id  Id of the author.
 *
 * @apiSuccess {Object[]} chapters All chapters with the author id registred.
 */
router.get('/user/:user_id', chapterController.chaptersByUser);

/**
 * @api {post} /chapter Create a Chapter
 * @apiName PostChapter
 * @apiGroup Chapter
 * @apiVersion 1.0.0
 *
 * @apiParam title  Title of the Chapter.
 * @apiParam _author  User id author of the Chapter.
 * @apiParam _fic  Fic id that the Chapter belongs.
 * @apiParam text Text of the Chapter.
 *
 * @apiSuccess {Object} result The operation result.
 * @apiSuccess {String} result.title  Title of the Chapter.
 * @apiSuccess {String} result._author  User id author of the Chapter.
 * @apiSuccess {String} result._fic  Fic id that the Chapter belongs.
 * @apiSuccess {String} result.text  Text of the Chapter.
 * @apiSuccess {String} msg Response message.
 */
router.post('/', chapterController.create);

/**
 * @api {put} /chapter/:id Update a Chapter
 * @apiName PutChapter
 * @apiGroup Chapter
 * @apiVersion 1.0.0
 *
 * @apiParam [title]  Title of the Chapter.
 * @apiParam [_author]  User id author of the Chapter.
 * @apiParam [_fic]  Fic id that the Chapter belongs.
 * @apiParam [text] Text of the Chapter.
 *
 * @apiSuccess {Object} result The operation result.
 * @apiSuccess {String} result.title  Title of the Chapter.
 * @apiSuccess {String} result._author  User id author of the Chapter.
 * @apiSuccess {String} result._fic  Fic id that the Chapter belongs.
 * @apiSuccess {String} result.text  Text of the Chapter.
 * @apiSuccess {String} msg Response message.
 */
router.put('/:chapter_id', chapterController.update);

/**
 * @api {delete} /chapter/:id Delete Chapter
 * @apiName DeleteChapter
 * @apiGroup Chapter
 * @apiVersion 1.0.0
 *
 * @apiParam id Chapters unique ID.
 *
 * @apiSuccess msg Response message.
 */
router.delete('/:chapter_id', chapterController.delete);

module.exports = router;
