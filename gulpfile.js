'use strict';

var gulp = require('gulp');

// copy static files
gulp.task('default', [], function() {
  return gulp.src([
    'bower_components/bootstrap/dist/**/*',
    'bower_components/fontawesome/**/*',
    'bower_components/roboto-fontface/**/*',
    'bower_components/angular/angular.min.js',
    'bower_components/angular-animate/angular-animate.min.js',
    'bower_components/angular-slidedeck/angular-slidedeck.min.*',
    'img/*',
    'index.*'
  ], {base: './'})
    .pipe(gulp.dest('gh-pages'));
});
