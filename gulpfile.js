var gulp   = require('gulp');
var jade   = require('gulp-jade');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var watch  = require('gulp-watch');

var jade_path     = 'jade/*.jade'
   ,stylus_path   = 'assets/stylesheets/stylus/*.styl'
   ,js_path       = 'assets/javascripts/*.js'
   ,compiled_path = 'compiled_assets/';

gulp.task('default', ['jade', 'stylus', 'javascripts']);

gulp.task('jade', function() {
  return gulp.src(jade_path)
    .pipe(watch(jade_path))
    .pipe(jade())
    .pipe(gulp.dest(compiled_path));
});

gulp.task('stylus', function() {
  gulp.src(stylus_path)
    .pipe(watch(stylus_path))
    .pipe(stylus({ compress: true }))
    .pipe(gulp.dest(compiled_path));
});

gulp.task('javascripts', function() {
  gulp.src(js_path)
    .pipe(uglify())
    .pipe(gulp.dest(compiled_path));
});
