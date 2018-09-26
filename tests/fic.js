const app = require('../app');
const request = require('supertest');
const Fic = require('../resources/chapter/chapter.model');
const User = require('../resources/user/user.model');
const ficId = new mongoose.Types.ObjectId;

const dummyAuthor = await new User(){
  "username": "dummy",
  "email": "dummy@test.com",
  "password": "dummy",
  "gender": "other"
}).save();

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
      if (!('author' in res.body)) throw new Error("missing username key");
      if (!('language' in res.body)) throw new Error("missing email key");
      if (!('category' in res.body)) throw new Error("password field should not be present");
      if (!('genre' in res.body)) throw new Error("missing genre key");
    })
    .expect(200, done);
  });
});

describe('Create Fic', () => {
  let data = {
    "_id": ficId.toString(),
    "title": "dummy",
    "author": dummyAuthor,
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

describe('Create Fic', () => {
  let data = {
    "username": "dummy",
    "password": "dummy"
  }
  it('respond with 400 no email', (done) => {
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
