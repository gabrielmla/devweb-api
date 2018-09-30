var express = require('express');
var router  = express.Router();

var ficController = require('./fic.controller');

/**
 * @api {get} /fic Get all Fics
 * @apiName GetFics
 * @apiGroup Fic
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Object[]} fics All fics registred.
 */
router.get('/', ficController.index);

router.get('/search', ficController.searchFics);

/**
 * @api {get} /fic Get all Fics
 * @apiName GetFics
 * @apiGroup Fic
 * @apiVersion 1.0.0
 *
 * @apiSuccess {String} title  Title of the Fic.
 * @apiSuccess {String} _author  User _id author of the Fic.
 * @apiSuccess {String} category  Category of the Fic.
 * @apiSuccess {String} genre  Genres of the Fic.
 */
router.get('/:fic_id', ficController.show);

/**
 * @api {get} /chapter Get all Fics of one Author (User)
 * @apiName GetChapters
 * @apiGroup Chapter
 * @apiVersion 1.0.0
 *
 * @apiParam user_id  Id of the author.
 *
 * @apiSuccess {Object[]} chapters All Fics with the author id registred.
 */
router.get('/user/:user_id', ficController.ficsByUser);

/**
 * @api {post} /fic Create a Fic
 * @apiName PostFic
 * @apiGroup Fic
 * @apiVersion 1.0.0
 *
 * @apiParam title  Title of the Fic.
 * @apiParam _author  User _id author of the Fic.
 * @apiParam category  Category of the Fic.
 * @apiParam genre Genres of the Fic.
 *
 * @apiSuccess {Object} result The operation result.
 * @apiSuccess {String} result.title  Title of the Fic.
 * @apiSuccess {String} result._author  User _id author of the Fic.
 * @apiSuccess {String} result.category  Category of the Fic.
 * @apiSuccess {String[]} result.genre  Genres of the Fic.
 * @apiSuccess {String} msg Response message.
 */
router.post('/', ficController.create);

/**
 * @api {put} /fic/:id Update a Fic
 * @apiName PutFic
 * @apiGroup Fic
 * @apiVersion 1.0.0
 *
 * @apiParam [title]  Title of the Fic.
 * @apiParam [_author]  User _id author of the Fic.
 * @apiParam [category]  Category of the Fic.
 * @apiParam [genre] Genres of the Fic.
 *
 * @apiSuccess {Object} result The operation result.
 * @apiSuccess {String} result.title  Title of the Fic.
 * @apiSuccess {String} result._author  User _id author of the Fic.
 * @apiSuccess {String} result.category  Category of the Fic.
 * @apiSuccess {String[]} result.genre  Genres of the Fic.
 * @apiSuccess {String} msg Response message.
 */
router.put('/:fic_id', ficController.update);

/**
 * @api {delete} /fic/:id Delete Fic
 * @apiName DeleteFic
 * @apiGroup Fic
 * @apiVersion 1.0.0
 *
 * @apiParam id Fics unique ID.
 *
 * @apiSuccess msg Response message.
 */
router.delete('/:fic_id', ficController.delete);

module.exports = router;
