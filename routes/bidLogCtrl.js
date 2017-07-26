var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/toBidLog', function(req, res, next) {
  res.render('bid/bidlog',{
    title:'投标记录',
    current:'myaccount',
    leftcurrent:'bidlog'
  });
});
module.exports = router;