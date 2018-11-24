var Fic = require("./fic.model");
var User = require("../user/user.model");
var ficRepository = require("../../dataStore/fic.repository");
var RequestStatus = require("../../constants/requestStatus");
var RequestMsgs = require("../../constants/requestMsgs");

exports.index = (req, res) => {
  ficRepository
    .findFics()
    .then(result => {
      if (result.length > 0) {
        res.status(RequestStatus.OK).json({ fics: result });
      } else {
        res
          .status(RequestStatus.NOT_FOUND)
          .json({ fics: result, msg: "No results found." });
      }
    })
    .catch(err => {
      res.status(RequestStatus.BAD_REQUEST).json(err);
    });
};

exports.popularFics = (req, res) => {
  ficRepository
    .findPopularFics(req.query.popularity)
    .then(result => {
      if (result.length > 0) {
        res.status(RequestStatus.OK).json({ fics: result });
      } else {
        res
          .status(RequestStatus.NOT_FOUND)
          .json({ fics: result, msg: "No results found." });
      }
    })
    .catch(err => {
      res.status(RequestStatus.BAD_REQUEST).json(err);
    });
};

exports.ficsByUser = (req, res) => {
  ficRepository
    .findFicsByQuery({ _author: req.params.user_id })
    .then(result => {
      if (result.length > 0) {
        res.status(RequestStatus.OK).json({ fics: result });
      } else {
        res
          .status(RequestStatus.NOT_FOUND)
          .json({ fics: result, msg: "No results found." });
      }
    })
    .catch(error => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};

exports.searchFics = (req, res) => {
  ficRepository
    .findFicsByQuery(req.query)
    .then(result => {
      if (result.length > 0) {
        res.status(RequestStatus.OK).json({ fics: result });
      } else {
        res
          .status(RequestStatus.NOT_FOUND)
          .json({ fics: result, msg: "No results found." });
      }
    })
    .catch(error => {
      res.status(RequestStatus.BAD_REQUEST).send(error);
    });
};

exports.show = (req, res) => {
  ficRepository
    .findFicById(req.params.fic_id)
    .then(fic => {
      res.status(RequestStatus.OK).json(fic);
    })
    .catch(error => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};

exports.create = async (req, res) => {
  let author = await User.findById(req.body._author).exec();
  if (author) {
    ficRepository
      .createFic(req.body)
      .then(createdFic => {
        User.findOneAndUpdate(
          { _id: createdFic._author },
          { $addToSet: { _fics: createdFic._id } }
        ).exec();

        res
          .status(RequestStatus.OK)
          .json({ result: createdFic, msg: "Fic created." });
      })
      .catch(error => {
        res.status(RequestStatus.BAD_REQUEST).json(error);
      });
  } else {
    res.status(RequestStatus.BAD_REQUEST).json({ msg: "Author not found." });
  }
};

exports.addChapter = (req, res) => {
  ficRepository
    .addChapter(req.body.fic_id, req.body.chapter_id)
    .then(updatedFic => {
      res
        .status(RequestStatus.OK)
        .json({ result: updatedFic, msg: "Chapter added." });
    })
    .catch(error => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};

exports.removeChapter = (req, res) => {
  ficRepository
    .removeChapter(req.body.fic_id, req.body.chapter_id)
    .then(updatedFic => {
      res
        .status(RequestStatus.OK)
        .json({ result: updatedFic, msg: "Chapter removed." });
    })
    .catch(error => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};

exports.update = (req, res) => {
  ficRepository
    .updateFic(req.params.fic_id, req.body)
    .then(updatedFic => {
      res
        .status(RequestStatus.OK)
        .json({ result: updatedFic, msg: "Fic updated." });
    })
    .catch(error => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};

exports.delete = (req, res) => {
  ficRepository
    .deleteFic(req.params.fic_id)
    .then(() => {
      res.status(RequestStatus.OK).json({ msg: "Fic deleted." });
    })
    .catch(error => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};
