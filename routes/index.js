var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log(req.session.passport.user)
  res.render('index', { title: 'Express', user: req.session.passport.user });
});

module.exports = router;
