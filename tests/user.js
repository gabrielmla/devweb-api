const app       = require('../app');
const request   = require('supertest');
const User      = require('../resources/user/user.model');
const mongoose  = require('mongoose');
const userId = new mongoose.Types.ObjectId;

var prepareData = async () => {
  runTests();
}

var runTests = () => {
  describe('Create User', () => {
    let data = {
      "_id": userId.toString(),
      "username": "dummyUser",
      "email": "dummyUser@test.com",
      "password": "dummy",
      "gender": "other"
    }
    it('respond with 200 created', (done) => {
      request(app)
      .post('/user')
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

  describe('Index User', () => {
    it('respond with json containing a list of all users', (done) => {
      request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });
  });

  describe('Show User', () => {
    it('respond with json containing a user', (done) => {
      request(app)
      .get('/user/' + userId.toString())
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        if (!('profile_name' in res.body)) throw new Error("missing profile_name key");
        if (!('username' in res.body)) throw new Error("missing username key");
        if (!('email' in res.body)) throw new Error("missing email key");
        if (('password' in res.body)) throw new Error("password field should not be present");
      })
      .expect(200, done);
    });
  });

  describe('Create a invalid User', () => {
    let data = {
      "username": "dummy",
      "password": "dummy"
    }
    it('respond with 400 no email', (done) => {
      request(app)
      .post('/user')
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

  describe('Delete User', () => {
    it('Respond with User Deleted', (done) => {
      request(app)
      .delete('/user/' + userId.toString())
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
