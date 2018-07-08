'use strict';
var ftp = require('vinyl-ftp');
module.exports = function () {
    $.gulp.task('host', function () {
        var conn = ftp.create({
            host: 'vh78.timeweb.ru',
            user: 'co44499',
            password: 'degray7303723',
            log: $.gp.util.log
        });

        var globs = [
            'build/**'
        ];

        // using base = '.' will transfer everything to /public_html correctly
        // turn off buffering in gulp.src for best performance

        return $.gulp.src(globs, {
                base: './build/',
                buffer: false
            })
            .pipe(conn.newer('/test.webskar.ru/public_html/')) // only upload newer files
            .pipe(conn.dest('/test.webskar.ru/public_html/'));
    })
};