var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/toMyAccount', function(req, res, next) {
  // res.send('respond with a resource');
  // res.set('views', __dirname +  '/views/myaccount');
  res.render('myaccount/index');
});
// /myaccount/toMyAccount
module.exports = router;
