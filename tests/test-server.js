process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

const server = require('../server');
const User = require('../models/user');

chai.use(chaiHttp);

describe('Users', function() {

  //User.collection.drop();

  beforeEach(funciton(done) {
    const newUser = new User({
      email: 'tdd@test.com',
      password: '123'
    });

    newUser.save(function(error) {
      done();
    })
  });

  afterEach(function(done) {
    //User.collection.drop();
    //done();
  });

  it('should fetch all users on /users GET', function(done) {
    chai.request(server)
      .get('/api/v1/users')
      .end(function(error, response) {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('object');
        response.body.data.should.be.a('array');
        response.body.data[0].should.have.property('email');
        response.body.data[0].should.have.property('password');
        done();
      })
  });

});