// 链接mongodb数据库
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017/yang';

//yang是主数据库


//col是数据库中的一个文档

var findDocuments = function (db, callback) {
  // Get the documents collection
  var collection = db.collection('col');
  // Find some documents
  collection.find({}).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

exports.index = function () {
  return function (req, res, next) {
    // Use connect method to connect to the server
    MongoClient.connect(url, function (err, db) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      findDocuments(db, function (docs) {
        res.render('main', {
          title: docs[0].title,
          current: "index"
        })
        db.close();
      })
    });
  }
}
