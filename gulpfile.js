var gulp         = require('gulp');
var jade         = require('gulp-jade');
var stylus       = require('gulp-stylus');
var concat       = require('gulp-concat');
var connect      = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');


var paths = {
  jade: 'jade/*.jade',
  stylus: 'assets/stylesheets/stylus/**/*.styl',
  compiled: 'compiled_assets/'
};

var autoprefixerOptions = {
  browsers: [
      '> 1%',
      'last 2 versions',
      'firefox >= 4',
      'safari 7',
      'safari 8',
      'IE 8',
      'IE 9',
      'IE 10',
      'IE 11'
  ],
  cascade: false
}

gulp.task('default', ['connect', 'watch']);

gulp.task('connect', function() {
  connect.server({
    root: paths.compiled_assets,
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch(paths.jade, ['jade']);
  gulp.watch(paths.stylus, ['stylus']);
});

gulp.task('jade', function() {
  return gulp.src(paths.jade)
    .pipe(jade())
    .pipe(gulp.dest(paths.compiled));
});

gulp.task('stylus', function() {
  return gulp.src('assets/stylesheets/stylus/main.styl')
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(stylus({ compress: true }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest(paths.compiled));
});
