const pugBem = require('gulp-pugbem');

module.exports = function () {
  $.gulp.task('pug', () => {
    return $.gulp.src('./dev/pug/pages/*.pug')
      .pipe($.gp.pug({
        plugins: [pugBem],
        locals: {
          nav: JSON.parse($.fs.readFileSync('./data/navigation.json', 'utf8')),
          content: JSON.parse($.fs.readFileSync('./data/content.json', 'utf8')),
          menuGlobal: JSON.parse($.fs.readFileSync('./data/menu.json', 'utf8'))
        },
        pretty: true
      }))
      .on('error', $.gp.notify.onError(function (error) {
        return {
          title: 'Pug',
          message: error.message
        };
      }))
      .pipe($.gulp.dest('./build/'))
      .on('end', $.browserSync.reload);
  });
};
