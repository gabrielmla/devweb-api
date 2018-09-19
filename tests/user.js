const app = require('../app');
const request = require('supertest');
const User = require('../resources/user/user.model')

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
    .get('/user/' + '5b9e68e242d9db1d93464716')
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

describe('Create User', () => {
  let data = {
    "username": "dummy",
    "email": "dummy@test.com",
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

describe('Create User', () => {
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
