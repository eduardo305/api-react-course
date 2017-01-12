const chai = require('chai');
const expect = require('chai').expect;
const assert = require('chai').assert;
const sinon = require('sinon');
const should = chai.should();
const sinonAsPromissed = require('sinon-as-promised');

const UserDAO = require('../../persistence/userDAO');
const AllUsersMock = require('../mocks/users/allUsers');
const OneUserMock = require('../mocks/users/oneUser.json');

describe('UserDAO', function() {

  describe('#fetchAll', function() {
    it('should fetch a list of users', sinon.test(function() {
      const userDAOStub = this.stub(UserDAO, 'fetchAll');
      userDAOStub.resolves(AllUsersMock);
      
      return userDAOStub().then(function(response) {
        assert.equal(response.data.length, 17, 'response length is bigger than 20');
      });
    }));
  });

  describe('#fetchUser', function() {
    it('should fetch one specific user', sinon.test(function() {
      const userDAOStub = this.stub(UserDAO, 'fetchUser');
      userDAOStub.resolves(OneUserMock);

      return userDAOStub('578d5a675942b10f5c4d269a').then(function(response) {
        expect(response.data).to.contain.key('email');
        expect(response.data).to.contain.key('password');
        expect(response.data).to.contain.key('_id');
        expect(response.data).not.to.be.null;
        expect(response).to.contain.key('success');
        expect(response.success).to.be.ok;
        expect(response).to.be.equal(OneUserMock);
      });
    }));
  });
});