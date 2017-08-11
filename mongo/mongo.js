var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/yang");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.info('链接成功');
});

var UserSchema =mongoose.Schema({
  name:String,
  password:String
});

exports.User=mongoose.model('User', UserSchema);