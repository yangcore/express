'use strict';
var gulp = require('gulp'),
  browserSync = require('browser-sync').create();
 //同步浏览器刷新
  var config = {
  baseDir: 'http://localhost:3000',
  watchFiles: [ 'D:/other/express/views/*' ]
}

gulp.task('tb', function() {
  console.info(__dirname)
  browserSync.init({
    files: config.watchFiles,
    proxy: config.baseDir,
    port: 5000
  });
})
