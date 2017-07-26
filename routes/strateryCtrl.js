var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/toMyStrategy', function(req, res, next) {
  res.render('strategy/myStrategy',{
      title:'我的策略',
      current:'myaccount',
      leftcurrent:'mystrategy'
  });
});
module.exports = router;