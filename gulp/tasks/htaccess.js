module.exports = function () {
  $.gulp.task('htaccess', () => {
    return $.gulp.src('./ht.access')
      .pipe($.gp.concat('.htaccess'))
      .pipe($.gulp.dest('./build/'));
  });
};
