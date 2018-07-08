'use strict';

var psi = require('psi');
module.exports = function () {
    $.gulp.task('mobile', function () {
        return psi($.config.site, {
            nokey: 'true',
            strategy: 'mobile',
        }).then(function (data) {
            console.log('Speed score: ' + data.ruleGroups.SPEED.score);
            console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
        });
    });

    $.gulp.task('desktop', function () {
        return psi($.config.site, {
            nokey: 'true',
            strategy: 'desktop',
        }).then(function (data) {
            console.log('Speed score: ' + data.ruleGroups.SPEED.score);
        });
    });
};