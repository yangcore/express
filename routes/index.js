var express = require('express');
var router = express.Router();
var indexDao=require('../mongo/mongo');

/* GET home page. */
// router.get('/', indexDao.index());
router.get('/', function(req,res,next){
 res.render('main',{
    title:'首页',
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
