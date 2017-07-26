var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main',{
    title:'拍财富投标平台',
    current:"index"
  });
});
router.get('/toAboutMe', function(req, res, next) {
  res.render('about/about',{
    title:'关于我们',
     current:"aboutme"
  });
});


module.exports = router;
