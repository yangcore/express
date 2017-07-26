var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/toMyAccount', function(req, res, next) {
  res.render('myaccount/index',{
    title:'我的账户',
    current:'myaccount',
    leftcurrent:'myaccount'
  });
});
module.exports = router;
