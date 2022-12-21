module.exports = function () {
  $.gulp.task('js:libs', () => {
    return $.gulp.src([
      'node_modules/jquery/dist/jquery.js',
      'node_modules/svg4everybody/dist/svg4everybody.js',
      // 'node_modules/vue/dist/vue.js',
      'node_modules/swiper/js/swiper.js',
      // 'node_modules/izimodal-1.6.0/js/iziModal.js',
      // 'node_modules/video.js/dist/video.js',
      // 'node_modules/videojs-youtube/dist/Youtube.js',
      'node_modules/rater-js/index.js',
      // 'node_modules/jquery-validation/dist/jquery.validate.js',
      // 'node_modules/jquery.maskedinput/src/jquery.maskedinput.js',
      // 'node_modules/page-scroll-to-id/jquery.malihu.PageScroll2id.js'
      // 'node_modules/vanilla-lazyload/dist/lazyload.js',
      // 'node_modules/vanilla-tilt/lib/vanilla-tilt.js'
    ])
      .pipe($.gp.concat('libs.js'))
      .pipe($.gulp.dest('./build/static/js/'))
      .pipe($.gp.uglify())
      .pipe($.gp.concat('libs.min.js'))
      .pipe($.gulp.dest('./build/static/js/'))
      .pipe($.browserSync.reload({
        stream: true
      }));
  });

  $.gulp.task('js:copy', () => {
    return $.gulp.src(['./dev/static/js/main.js'])
      .pipe($.gp.babel({
        presets: ['@babel/env']
      }))
      .pipe($.gp.concat('main.min.js'))
      .pipe($.gulp.dest('./build/static/js/'))
      .pipe($.browserSync.reload({
        stream: true
      }));
  });

  $.gulp.task('js:build', () => {
    return $.gulp.src(['./dev/static/js/main.js'])
      .pipe($.gp.babel({
        presets: ['@babel/env']
      }))
      .pipe($.gulp.dest('./build/static/js/'))
      .pipe($.gp.uglify())
      .pipe($.gp.concat('main.min.js'))
      .pipe($.gulp.dest('./build/static/js/'))
  });
};
