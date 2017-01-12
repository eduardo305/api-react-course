// This Spec is commented out because it relies on a database connection
// In case you have one DB instance setup on the server, you can just uncomment
// these tests and they will automatically be part of the test suit.
// Since the connection with the DB may timout eventually, please give it a try
// once again until you see the tests succeding

// process.env.NODE_ENV = 'test';

// const sinon = require('sinon');
// const chai = require('chai');
// const expect = require('chai').expect;
// const should = chai.should();
// const chaiHttp = require('chai-http');

// const server = require('../../server');

// chai.use(chaiHttp);

// describe('User routes', function() {

//   it('should fetch all users on GET /api/v1/users', function(done) {
//     chai.request(server)
//       .get('/api/v1/users/')
//       .end(function(error, response) {
//         response.should.have.status(200);
//         response.should.be.json;
//         response.body.data.should.be.a('array');
//         response.body.data.should.not.be.empty;
//         response.body.data.should.not.be.undefined;
      
//         done();
//       });
//   });

//   it('should fetch one user on GET api/v1/users/:id', function(done) {
//     chai.request(server)
//       .get('/api/v1/users/578d5a675942b10f5c4d269a')
//       .end(function(error, response) {
//         response.should.have.status(200);
//         response.should.be.json;
//         response.body.data.should.not.be.empty;
//         response.body.data.should.not.be.undefined;
//         response.body.data.should.contain.key('email');
        
//         done();
//       });
//   });

//   it('should return an error if non valid id is provided to GET api/v1/users/:id', function(done) {
//     chai.request(server)
//       .get('/api/v1/users/123')
//       .end(function(error, response) {
//         response.body.success.should.not.be.ok;
        
//         done();
//       });
//   });
// });