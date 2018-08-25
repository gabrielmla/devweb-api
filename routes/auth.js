// Imports gerais
var express = require('express');
var router = express.Router();

// Imports especificos, nao precisa desses comentarios, soh de pular uma linha entre os dois
var authController = require('../controllers/auth');

router.get('/', authController.status);

router.post('/', authController.login);

router.delete('/', authController.logout);

module.exports = router;
