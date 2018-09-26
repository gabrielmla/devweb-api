const app = require('../app');
const request = require('supertest');
const Chapter = require('../resources/chapter/chapter.model');
const User = require('../resources/user/user.model');
const chapterId = new mongoose.Types.ObjectId;

const dummyAuthor = await new User(){
  "username": "dummy",
  "email": "dummy@test.com",
  "password": "dummy",
  "gender": "other"
}).save();

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
      if (!('author' in res.body)) throw new Error("missing author key");
      if (!('text' in res.body)) throw new Error("missing text key");
    })
    .expect(200, done);
  });
});

describe('Create Chapter', () => {
  let data = {
    "_id": chapterId.toString(),
    "title": "dummy",
    "author": "dummy@test.com",
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

describe('Create Chapter', () => {
  let data = {
    "username": "dummy",
    "password": "dummy"
  }
  it('respond with 400 no email', (done) => {
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
