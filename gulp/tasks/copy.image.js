'use strict';
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var imageminPngquant = require('imagemin-pngquant');
module.exports = function () {
  $.gulp.task('copy:image', function () {
    return $.gulp.src('./source/img/**/*.*')
      .pipe($.gp.plumber())
      .pipe($.gulp.dest($.config.root + '/assets/img/'))
      .pipe($.gp.imagemin(
        [
          imageminJpegRecompress({
            progressive: true,
            max: 80,
            min: 70
          }),
          imageminPngquant({
            quality: '80'
          })
        ], {
          verbose: true
        }))
      .pipe($.gulp.dest($.config.root + '/assets/img/'));
  });
};