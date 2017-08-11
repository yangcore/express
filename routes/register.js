var express = require('express');
var router = express.Router();
var User=require('../mongo/mongo').User
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register',{
        title:'注册账户'
  });
});

router.post('/', function(req, res, next) {
  // console.info(req.body);
  var fluffy = new User(req.body);
  // User.create(req.body).then(function(result){
    // console.info(result);
    res.redirect('/');
  // })

fluffy.save(function (err, req,res) {
  if (err) return console.error(err);
   res.redirect('/');
});

});

module.exports = router;