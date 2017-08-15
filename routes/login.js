var express = require('express');
var router = express.Router();
var User=require('../mongo/mongo').User;
var sha1 = require('sha1');
//   var BSON = require('bson').BSONPure;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login',{
        title:'登录账户'
  });
});

router.post('/', function(req, res, next) {
  req.body.password=sha1(req.body.password);
  User.find(req.body,function (err,e) {
        if (err) return console.error(err);
        if(e.length>0){
          delete req.body.password
          req.session.user = req.body;
          res.send({code:"0000",msg:'验证通过',url:'/',info:req.session.user});
        }else{
            res.send({code:"1001",msg:'用户名或密码错误'});
        }
})
});
module.exports = router;