"use strict";

var gulp = require('gulp'),
	browserSync = require('browser-Sync').create();


// 1 task: compile less to scss
//lessc src/css/less/bootstrap-custom.less src/css/main.css
// find example of task which can run comand in the console
gulp.task('serve', function(){
    browserSync.init({
        server: 'public'
    });

        
});

