module.exports = function () {

  $.gulp.task('styles:dev', () => {
    return $.gulp.src('./dev/static/stylus/main.styl')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.stylus({
        'include css': true
      }))
      .on('error', $.gp.notify.onError(function (error) {
        return {
          title: 'Stylus',
          message: error.message
        };
      }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
      }))
      .pipe($.gp.concat('main.min.css'))
      .pipe($.gulp.dest('./build/static/css/'))
      .pipe($.browserSync.reload({
        stream: true
      }));
  });

  $.gulp.task('styles:build', () => {
    return $.gulp.src('./dev/static/stylus/main.styl')
      .pipe($.gp.stylus({
        'include css': true
      }))
      .pipe($.gp.autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
      }))
      .pipe($.gulp.dest('./build/static/css/'))
      .pipe($.gp.csscomb())
      .pipe($.gp.csso())
      .pipe($.gp.concat('main.min.css'))
      .pipe($.gulp.dest('./build/static/css/'))
  });

  $.gulp.task('styles:libs', () => {
    return $.gulp.src('./dev/static/stylus/libs.styl')
      .pipe($.gp.stylus({
        'include css': true
      }))
      .pipe($.gp.autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
      }))
      .pipe($.gp.concat('libs.css'))
      .pipe($.gulp.dest('./build/static/css/'))
      .pipe($.gp.csscomb())
      .pipe($.gp.csso())
      .pipe($.gp.concat('libs.min.css'))
      .pipe($.gulp.dest('./build/static/css/'))
  });

};
