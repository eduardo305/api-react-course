process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = require('chai').expect;
const sinon = require('sinon');
const should = chai.should();

const UserController = require('../../controllers/userController');
const UserDAO = require('../../persistence/userDAO');

describe('UserController', function() {

  describe('#fetchAll', function() {
    it('should call UserDAO.fetchAll methods', sinon.test(function() {
      const UserDAOSpy = this.spy(UserDAO, 'fetchAll');
      UserController.fetchAll();
      expect(UserDAOSpy.firstCall.args).to.be.empty;
      expect(UserDAOSpy.firstCall.args).to.have.lengthOf(0);
      expect(UserDAOSpy.calledOnce, 'UserDAO.fetchAll should be called only once').to.be.ok;
    }));
  });

  describe('#fetchUser', function() {
    it('should call UserDAO.fetchUser method', sinon.test(function() {
      const UserDAOSpy = this.spy(UserDAO, 'fetchUser');
      
      const request = {
        params: {
          id: '578d5a675942b10f5c4d269a'
        }
      };

      UserController.fetchUser(request);
      expect(UserDAOSpy.firstCall.args).not.to.be.empty;
      expect(UserDAOSpy.firstCall.args).to.have.lengthOf(1);
      expect(UserDAOSpy.firstCall.args).to.contain(request.params.id);
      expect(UserDAOSpy.calledOnce, 'UserDAO.fetchUser should be called only once').to.be.ok;
    }));
  });
});