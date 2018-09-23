var express = require('express');
var router  = express.Router();

var chapterController = require('./chapter.controller');

router.get('/', chapterController.index);

router.get('/:chapter_id', chapterController.show);

router.post('/', chapterController.create);

router.put('/:chapter_id', chapterController.update);

router.delete('/:chapter_id', chapterController.delete);

module.exports = router;
