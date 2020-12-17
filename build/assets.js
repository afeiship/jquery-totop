(function () {
  'use strict';

  const gulp = require('gulp');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@feizheng/gulp-*', '@jswork/gulp-*']
  });

  gulp.task('images', function () {
    return gulp.src('src/assets/*.png').pipe(gulp.dest('dist'));
  });

  gulp.task('styles', function () {
    return gulp
      .src('src/assets/*.scss')
      .pipe($.sass())
      .pipe($.jswork.pkgHeader())
      .pipe(gulp.dest('dist'));
  });
})();
