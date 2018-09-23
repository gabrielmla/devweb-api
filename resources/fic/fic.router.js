var express = require('express');
var router  = express.Router();

var ficController = require('./fic.controller');

router.get('/', ficController.index);

router.get('/:fic_id', ficController.show);

router.post('/', ficController.create);

router.put('/:fic_id', ficController.update);

router.delete('/:fic_id', ficController.delete);

module.exports = router;
