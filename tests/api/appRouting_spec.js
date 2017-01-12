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

// describe('App routes', function() {

//   it('should return simple message on GET /', function(done) {
//     chai.request(server)
//       .get('/')
//       .end(function(error, response) {
//         response.should.have.status(200);
//         response.should.be.json;
//         response.body.success.should.be.ok;
//         response.body.message.should.not.be.undefined;
//         response.body.message.should.be.equal('This is the Plano Investimentos API');
      
//         done();
//       });
//   });
// });