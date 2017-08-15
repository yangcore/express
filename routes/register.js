var express = require('express');
var router = express.Router();
var User=require('../mongo/mongo').User;
var sha1 = require('sha1');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register',{
        title:'注册账户'
  });
});

router.post('/checkName', function(req, res, next) {
  
   User.find({name:req.body.name},function(err,e){
     console.info(e,'dsdsd');
     if(e.length>0){
       res.send({code:"1001",msg:'用户名已存在'});
     }else{
       res.send({code:"0000",msg:'验证通过'});
     }
   })
 });
router.post('/add', function(req, res, next) {
  req.body.password=sha1( req.body.password);
  var fluffy = new User(req.body);
  User.find({name:req.body.name},function(err,e){
    if(e.length>0){
      res.send({code:"1001",msg:'用户名已存在'});
    }else{
      delete req.body.password
      req.session.user = req.body;
      fluffy.save(function (err) {
        if (err) return console.error(err);
        res.send({code:"0000",msg:'注册成功',url:"/"});
      });
    }
  })
});

module.exports = router;