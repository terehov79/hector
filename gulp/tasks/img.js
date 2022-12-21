module.exports = function () {

  $.gulp.task('img:dev', () => {
    return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
      .pipe($.gulp.dest('./build/static/img/'));
  });

  $.gulp.task('img:build', () => {
    return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
      .pipe($.gp.tinypng('dc6gUSuhnR9gbjcZonU18tHhG2jNvDeF'))
      .pipe($.gulp.dest('./build/static/img/'));
  });
  
  $.gulp.task('svg:copy', () => {
    return $.gulp.src('./dev/static/img/svg/*.svg')
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        },
        plugins: [{
          removeDoctype: true
        }, {
          removeComments: true
        }, {
          cleanupNumericValues: {
            floatPrecision: 2
          }
        }, {
          convertColors: {
            names2hex: false,
            rgb2hex: false
          }
        }]
      }))
      .pipe($.gulp.dest('./build/static/img/svg/'));
  });

};
