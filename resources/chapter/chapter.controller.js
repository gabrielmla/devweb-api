var Chapter = require("./chapter.model");
var Fic = require("../fic/fic.model");
var User = require("../user/user.model");
var chapterRepository = require("../../dataStore/chapter.repository");
var ficRepository = require("../../dataStore/fic.repository");
var RequestStatus = require("../../constants/requestStatus");
var RequestMsgs = require("../../constants/requestMsgs");

exports.index = (req, res) => {
  chapterRepository
    .findChapters()
    .catch(err => {
      res.status(RequestStatus.BAD_REQUEST).json(err);
    })
    .then(result => {
      res.status(RequestStatus.OK).json({ chapters: result });
    });
};

exports.chaptersByUser = (req, res) => {
  chapterRepository
    .findChaptersByQuery({ _author: req.params.user_id })
    .then(chapters => {
      res.status(RequestStatus.OK).json({ chapters: result });
    })
    .catch(error => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};

exports.show = (req, res) => {
  chapterRepository
    .findChapterById(req.params.chapter_id)
    .then(chapter => {
      res.status(RequestStatus.OK).json(chapter);
    })
    .catch(error => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};

exports.create = async (req, res) => {
  let fic = await Fic.findById(req.body._fic);
  let author = await User.findById(req.body._author);

  if (fic && author) {
    chapterRepository
      .createChapter(req.body)
      .then(createdChapter => {
        User.findOneAndUpdate(
          { _id: createdChapter._author },
          { $addToSet: { _chapters: createdChapter._id } }
        ).exec();

        ficRepository.addChapter(fic._id, createdChapter._id);

        res
          .status(RequestStatus.OK)
          .json({ result: createdChapter, msg: "Chapter created." });
      })
      .catch(error => {
        res.status(RequestStatus.BAD_REQUEST).json(error);
      });
  } else {
    res
      .status(RequestStatus.BAD_REQUEST)
      .json({ msg: "The fic_id or author_id sent does not exists." });
  }
};

exports.update = (req, res) => {
  chapterRepository
    .updateChapter(req.params.chapter_id, req.body)
    .then(updatedChapter => {
      res
        .status(RequestStatus.OK)
        .json({ result: updatedChapter, msg: "Chapter updated." });
    })
    .catch(error => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};

exports.delete = (req, res) => {
  chapterRepository
    .deleteChapter(req.params.chapter_id)
    .then(() => {
      res.status(RequestStatus.OK).json({ msg: "Chapter deleted." });
    })
    .catch(error => {
      res.status(RequestStatus.BAD_REQUEST).json(error);
    });
};
