module.exports = function () {

  $.gulp.task('svg', () => {
    return $.gulp.src('./dev/static/img/svg-sprites/*.svg')
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
        .pipe($.gp.cheerio({
          run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
          },
          parserOptions: {xmlMode: true}
        }))
        .pipe($.gp.replace('&gt;', '>'))
        .pipe($.gp.svgSprite({
          mode: {
            // view: {
            //   sprite: "sprite-view.svg"
            // },
            symbol: {
              sprite: "sprite.svg"
            }
          }
        }))
        .pipe($.gulp.dest('./build/static/img/svg-sprites/'));
  });

};
