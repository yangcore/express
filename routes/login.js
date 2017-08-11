var express = require('express');
var router = express.Router();
var User=require('../mongo/mongo').User;
//   var BSON = require('bson').BSONPure;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login',{
        title:'登录账户'
  });
});

router.post('/', function(req, res, next) {
  console.info(req.body);
  User.find(req.body)(function (err, e) {
            if (err) return console.error(err);
            console.info(e,'dsdsd ')
          if(e.length>0){
                res.redirect('/');
            }else{
                var fluffy = new User({name:'mmm',password:'3333'});
                    fluffy.save(function(err,e){
                        if(err) return console.info(err);
                         res.redirect('/login');
                    })
            }
})
});

// router.post('/del',function(req,res){
//     console.info(BSON)
//     console.info('进来',req.body.id);
//     User.remove({"_id":req.body.id}).then(function(){
//         res.send({code:1001})
//     })

// })
module.exports = router;