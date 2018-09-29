var Chapter       = require('./chapter.model');
var RequestStatus = require('../../constants/requestStatus');
var RequestMsgs   = require('../../constants/requestMsgs');

exports.index = (req, res) => {
  Chapter.find({})
	  .catch((err) => {
	    res.status(RequestStatus.BAD_REQUEST).send(err);
	  })
	  .then((result) => {
	    res.status(RequestStatus.OK).json({ chapters: result });
	  });
};

exports.show = (req, res) => {
	Chapter.findById(req.params.chapter_id)
		.then((chapter) => {
			res.status(RequestStatus.OK).json(chapter);
		})
		.catch((error) => {
			res.status(RequestStatus.BAD_REQUEST).json(error);
		});
};

exports.create = (req, res) => {
  var chapter = new Chapter(req.body);
  
  chapter.save()
    .then((createdChapter) => {
      res.status(RequestStatus.OK).json({ result: createdChapter, msg: 'Chapter created.' });
    })
    .catch((error) => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};

exports.update = (req, res) => {
	Chapter.updateOne({ _id: req.params.chapter_id }, { $set: req.body })
		.then((updatedChapter) => {
			res.status(RequestStatus.OK).json({result: updatedChapter, msg: 'Chapter updated.'});
		})
		.catch((error) => {
			res.status(RequestStatus.BAD_REQUEST).json(error);
		});
};

exports.delete = (req, res) => {
	Chapter.deleteOne({ _id: req.params.chapter_id })
		.then(() => {
			res.status(RequestStatus.OK).json({msg: 'Chapter deleted.'});
		})
		.catch((error) => {
			res.status(RequestStatus.BAD_REQUEST).json(error);
		});
};
