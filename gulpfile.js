'use strict';

global.$ = {
    package: require('./package.json'),
    config: require('./gulp/config'),
    path: {
        task: require('./gulp/paths/tasks.js'),
        jsFoundation: require('./gulp/paths/js.foundation.js'),
        cssFoundation: require('./gulp/paths/css.foundation.js'),
        app: require('./gulp/paths/app.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'copy:image',
        'copy:fonts',
        'sprite:smith'
    ),
    $.gulp.parallel(
        'sass',
        'pug',
        'js:foundation',
        'js:process',
        'css:foundation'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'copy:image',
        'copy:fonts',
        'sprite:smith'
    ),
    $.gulp.parallel(
        'sass',
        'pug',
        'js:foundation',
        'js:process',
        'css:foundation'
    )
));
$.gulp.task('host', $.gulp.series(
    'clean',
    'sass',
    'pug',
    'js:foundation',
    'js:process',
    'copy:image',
    'copy:fonts',
    'css:foundation',
    'sprite:smith',
    'host',
    'mobile',
    'desktop'
));
$.gulp.task('psi', $.gulp.series(
    'mobile',
    'desktop'
));