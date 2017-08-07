var express = require('express');
var router = express.Router();
var indexDao=require('../dao/index');
// // 链接mongodb数据库
// // 链接mongodb数据库
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
// // Connection URL
// var url = 'mongodb://localhost:27017/yang';

// //yang是主数据库
//  MongoClient.connect(url, function (err, db) {
//       assert.equal(null, err);
//       console.log("Connected successfully to server");
//       findDocuments(db, function (s) {
//         console.info(s)
//         db.close();
//       })
//     });

// //col是数据库中的一个文档

// var findDocuments = function (db, callback) {
//   // Get the documents collection
//   var collection = db.collection('col');
//   // Find some documents
//   collection.find({}).toArray(function (err, docs) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(docs)
//     callback(docs);
//   });
// }

/* GET home page. */
router.get('/', indexDao.index());
router.get('/toAboutMe', function(req, res, next) {
  res.render('about/about',{
    title:'关于我们',
     current:"aboutme"
  });
});


module.exports = router;
