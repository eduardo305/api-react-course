process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = require('chai').expect;
const sinon = require('sinon');
const should = chai.should();

const AuthController = require('../../controllers/authController');
const User = require('../../models/user');
const config = require('../../config/config');

describe('AuthController', function() {

  beforeEach(function() {
    this.user = new User({
      "email": "tdd@test.com",
      "password": "$2a$10$vSGrBx0/5AlgM189RwOEzutS1PqDc67PouYeFKBr4A3gItZZTASra",
      "_id": "578d5a675942b10f5c4d269a"
    });

    this.savedToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Nzg5MzBlOGRkNjA5ODdlMmNkNTM2MjMiLCJpYXQiOjE0NjkyMjU0ODE1MTl9.t9LXWeLvpgYbO3TLFBbsnJzYynrNzsDNksdK3mvetKM";
  });

  describe('#signup', function() {
    it('it should sign the user up', sinon.test(function() {
      
    }));
  });
});