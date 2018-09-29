const app       = require('../app');
const request   = require('supertest');
const Fic       = require('../resources/chapter/chapter.model');
const User      = require('../resources/user/user.model');
const mongoose  = require('mongoose');
const ficId     = new mongoose.Types.ObjectId;
const chapterId = new mongoose.Types.ObjectId;

var prepareData = async () => {
  new User({
    "username": "dummyAuthor",
    "email": "dummyAuthor@test.com",
    "password": "dummy",
    "gender": "other"
  }).save().then((dummyAuthor) => {
    runTests(dummyAuthor);
  });
}

var runTests = (dummyAuthor) => {
  describe('Create Fic', () => {
    let data = {
      "_id": ficId.toString(),
      "title": "dummy",
      "_author": dummyAuthor._id,
      "category": "dummy",
      "genre": ["comedy", "yaoi"],
      "text": "dummy fic about a gay foo bar."
    }
    it('respond with 200 created', (done) => {
      request(app)
      .post('/fic')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
    });
  });

  describe('Index Fic', () => {
    it('respond with json containing a list of all fics', (done) => {
      request(app)
      .get('/fic')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });
  });

  describe('Show Fic', () => {
    it('respond with json containing a fic', (done) => {
      request(app)
      .get('/fic/' + ficId.toString())
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        if (!('title' in res.body)) throw new Error("missing profile_name key");
        if (!('_author' in res.body)) throw new Error("missing username key");
        if (!('language' in res.body)) throw new Error("missing email key");
        if (!('category' in res.body)) throw new Error("missing category key");
        if (!('genre' in res.body)) throw new Error("missing genre key");
      })
      .expect(200, done);
    });
  });

  describe('Create a invalid Fic', () => {
    let data = {
      "username": "dummy",
      "password": "dummy"
    }
    it('respond with 400 invalid fields', (done) => {
      request(app)
      .post('/fic')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
    });
  });

  // CHAPTER
  describe('Create Chapter', () => {
    let data = {
      "_id": chapterId.toString(),
      "title": "dummy",
      "_author": dummyAuthor._id,
      "_fic": ficId.toString(),
      "text": "dummy fic about foo bar."
    }
    it('respond with 200 created', (done) => {
      request(app)
      .post('/chapter')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
    });
  });

  describe('Index Chapter', () => {
    it('respond with json containing a list of all chapters', (done) => {
      request(app)
      .get('/chapter')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });
  });

  describe('Show Chapter', () => {
    it('respond with json containing a chapter', (done) => {
      request(app)
      .get('/chapter/' + chapterId.toString())
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        if (!('title' in res.body)) throw new Error("missing title key");
        if (!('_author' in res.body)) throw new Error("missing author key");
        if (!('text' in res.body)) throw new Error("missing text key");
        if (!('_fic' in res.body)) throw new Error("missing _fic key");
      })
      .expect(200, done);
    });
  });

  describe('Create a invalid Chapter', () => {
    let data = {
      "username": "dummy",
      "password": "dummy"
    }
    it('respond with 400 invalid fields', (done) => {
      request(app)
      .post('/chapter')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
    });
  });

  describe('Delete Chapter', () => {
    it('Respond with Chapter Deleted', (done) => {
      request(app)
      .delete('/chapter/' + chapterId.toString())
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
    });
  });

  describe('Delete Fic', () => {
    it('Respond with Fic Deleted', (done) => {
      request(app)
      .delete('/fic/' + ficId.toString())
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
    });
  });

  describe('Delete dummy Author', () => {
    it('Respond with User Deleted', (done) => {
      request(app)
      .delete('/user/' + dummyAuthor._id.toString())
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
    });
  });
}

prepareData();
