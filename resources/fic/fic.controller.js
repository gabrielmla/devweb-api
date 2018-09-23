var Fic           = require('./fic.model');
var RequestStatus = require('../../constants/requestStatus');
var RequestMsgs   = require('../../constants/requestMsgs');

exports.index = (req, res) => {
  Fic.find({})
	  .catch((err) => {
	    res.status(RequestStatus.BAD_REQUEST).send(err);
	  })
	  .then((result) => {
	    res.status(RequestStatus.OK).json({ fics: result });
	  });
};

exports.show = (req, res) => {
	Fic.findById(req.params.fic_id)
		.then((fic) => {
			res.status(RequestStatus.OK).json(fic);
		})
		.catch((error) => {
			res.status(RequestStatus.BAD_REQUEST).json(error);
		});
};

exports.create = (req, res) => {
  var fic = new Fic(req.body);

  fic.save()
    .then((createdFic) => {
      res.status(RequestStatus.OK).json({ result: createdFic, msg: 'Fic created.' });
    })
    .catch((error) => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};

exports.update = (req, res) => {
	Fic.updateOne({ _id: req.params.fic_id }, { $set: req.body })
		.then((updatedFic) => {
			res.status(RequestStatus.OK).json({result: updatedFic, msg: 'Fic updated.'});
		})
		.catch((error) => {
			res.status(RequestStatus.BAD_REQUEST).json(error);
		});
};

exports.delete = (req, res) => {
	Fic.deleteOne({ _id: req.params.fic_id })
		.then(() => {
			res.status(RequestStatus.OK).json({msg: 'Fic deleted.'});
		})
		.catch((error) => {
			res.status(RequestStatus.BAD_REQUEST).json(error);
		});
};
