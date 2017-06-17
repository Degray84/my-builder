'use strict';

module.exports = function() {
    $.gulp.task('sprite:smith', function() {
        return $.gulp.src('./source/sprites/{*.png,*.gif}')
            // .pipe($.del($.config.root + '/assets/img/sprites'))
            .pipe($.gp.imagemin())
            .pipe($.gp.spritesmith({
                /* this whole image path is used in css background declarations */
                imgName: 'img/sprites/sprite.png',
                cssName: 'css/sprite.css'
            }))
            .pipe($.gulp.dest($.config.root + '/assets'));
    })
};