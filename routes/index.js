var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.set('Content-Type', 'text/html');
  // res.send(new Buffer('<p>some html</p>'));
  // res.set('views', __dirname +  '/views');
  res.render('main');
});


module.exports = router;
