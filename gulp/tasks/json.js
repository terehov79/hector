module.exports = function () {
  $.gulp.task('json', () => {
    return $.gulp.src('./dev/static/json/**/*.*')
      .pipe($.gulp.dest('./build/static/json/'));
  });
};
