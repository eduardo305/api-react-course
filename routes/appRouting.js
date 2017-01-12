var express = require('express');
var router = express.Router();

var passport = require('passport');
var requireAuth = passport.authenticate('jwt', { session: false });

router.route('/').get((request, response) => {
  response.send({ success: true, message: 'This is the React Course API'});
});

module.exports = router;
