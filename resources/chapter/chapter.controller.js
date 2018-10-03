var Chapter           = require('./chapter.model');
var chapterRepository = require('../../dataStore/chapter.repository');
var RequestStatus     = require('../../constants/requestStatus');
var RequestMsgs       = require('../../constants/requestMsgs');

exports.index = (req, res) => {
  chapterRepository.findChapters()
	  .catch((err) => {
	    res.status(RequestStatus.BAD_REQUEST).json(err);
	  })
	  .then((result) => {
	    res.status(RequestStatus.OK).json({ chapters: result });
	  });
};

exports.chaptersByUser = (req, res) => {
  chapterRepository.findChaptersByQuery({_author: req.params.user_id})
    .then((chapters) => {
      res.status(RequestStatus.OK).json({ chapters: result });
    })
    .catch((error) => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
}

exports.show = (req, res) => {
	chapterRepository.findChapterById(req.params.chapter_id)
		.then((chapter) => {
			res.status(RequestStatus.OK).json(chapter);
		})
		.catch((error) => {
			res.status(RequestStatus.BAD_REQUEST).json(error);
		});
};

exports.create = (req, res) => {
  chapterRepository.createChapter(req.body)
    .then((createdChapter) => {
      res.status(RequestStatus.OK).json({ result: createdChapter, msg: 'Chapter created.' });
    })
    .catch((error) => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};

exports.update = (req, res) => {
	chapterRepository.updateChapter(req.params.chapter_id, req.body)
		.then((updatedChapter) => {
			res.status(RequestStatus.OK).json({result: updatedChapter, msg: 'Chapter updated.'});
		})
		.catch((error) => {
			res.status(RequestStatus.BAD_REQUEST).json(error);
		});
};

exports.delete = (req, res) => {
	chapterRepository.deleteChapter(req.params.chapter_id)
		.then(() => {
			res.status(RequestStatus.OK).json({msg: 'Chapter deleted.'});
		})
		.catch((error) => {
			res.status(RequestStatus.BAD_REQUEST).json(error);
		});
};
