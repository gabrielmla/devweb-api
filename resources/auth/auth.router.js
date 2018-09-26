// Imports gerais
var express = require('express');
var router = express.Router();

var authController = require('./auth.controller');

/**
 * @api {get} /auth Get the current logged user (if there is one)
 * @apiName Status
 * @apiGroup Auth
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Object} user The logged user.
 * @apiSuccess {Boolean} status True = if there is a user | False = if there is not a user.
 */
router.get('/', authController.status);

/**
 * @api {post} /user Create user session
 * @apiName Login
 * @apiGroup Auth
 * @apiVersion 1.0.0
 *
 * @apiParam username  Username name of the User.
 * @apiParam password  Password of the User.
 *
 * @apiSuccess {String} msg Login successful.
 */
router.post('/', authController.login);

/**
 * @api {delete} /auth Delete user session
 * @apiName Logout
 * @apiGroup Auth
 * @apiVersion 1.0.0
 *
 * @apiSuccess {String} msg Logged out.
 */
router.delete('/', authController.logout);

module.exports = router;
