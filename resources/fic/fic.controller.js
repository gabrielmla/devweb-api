var Fic           = require('./fic.model');
var ficRepository = require('../../dataStore/fic.repository');
var RequestStatus = require('../../constants/requestStatus');
var RequestMsgs   = require('../../constants/requestMsgs');

exports.index = (req, res) => {
  ficRepository.findFics()
	  .catch((err) => {
	    res.status(RequestStatus.BAD_REQUEST).json(err);
	  })
	  .then((result) => {
	    res.status(RequestStatus.OK).json({ fics: result });
	  });
};

exports.ficsByUser = (req, res) => {
  ficRepository.findFicsByQuery({_author: req.params.user_id})
    .then((result) => {
      res.status(RequestStatus.OK).json({ fics: result });
    })
    .catch((error) => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
}

exports.searchFics = (req, res) => {
  ficRepository.findFicsByQuery(req.body.query)
    .then((result) => {
      res.status(RequestStatus.OK).json({ fics: result });
    })
    .catch((error) => {
      res.status(RequestStatus.BAD_REQUEST).send(error);
    });
}

exports.show = (req, res) => {
	ficRepository.findFicById(req.params.fic_id)
		.then((fic) => {
			res.status(RequestStatus.OK).json(fic);
		})
		.catch((error) => {
			res.status(RequestStatus.BAD_REQUEST).json(error);
		});
};

exports.create = (req, res) => {
  ficRepository.createFic(req.body)
    .then((createdFic) => {
      res.status(RequestStatus.OK).json({ result: createdFic, msg: 'Fic created.' });
    })
    .catch((error) => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};

exports.update = (req, res) => {
	ficRepository.updateFic(req.params.fic_id, req.body)
		.then((updatedFic) => {
			res.status(RequestStatus.OK).json({result: updatedFic, msg: 'Fic updated.'});
		})
		.catch((error) => {
			res.status(RequestStatus.BAD_REQUEST).json(error);
		});
};

exports.delete = (req, res) => {
	ficRepository.deleteFic(req.params.fic_id)
		.then(() => {
			res.status(RequestStatus.OK).json({msg: 'Fic deleted.'});
		})
		.catch((error) => {
			res.status(RequestStatus.BAD_REQUEST).json(error);
		});
};
