var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var passport = require('passport');

router.get('/', function(req, res, next) {
  if(req.isAuthenticated()) {
    unirest.get('https://api.linkedin.com/v1/people/~:(id,num-connections,picture-url)')
      .header('Authorization', 'Bearer ' + req.user.token)
      .header('x-li-format', 'json')
      .end(function (response) {
        res.render('index', { title: "Linked In with Passport", profile: response.body});
      })
  } else {
    res.render('index', { title: 'Express', profile: ""});
  }
});

module.exports = router;
