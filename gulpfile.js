'use strict';
var gulp = require('gulp'),
  browserSync = require('browser-sync').create();
 //同步浏览器刷新
  var config = {
  baseDir: 'http://localhost:3000',
  watchFiles: [ __dirname+'/views/*' ]
}

gulp.task('tb', function() {
  browserSync.init({
    files: config.watchFiles,
    proxy: config.baseDir,
    port: 5000
  });
})
