'use strict';

var gulp = require('gulp'),
    paths = require('../gulp-helpers/paths');

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['lint', 'compile']);
    gulp.watch(paths.less, ['less']);
});
