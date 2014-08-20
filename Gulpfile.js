'use strict';

var gulp = require('gulp');

require('./gulp-tasks/compile');
require('./gulp-tasks/images');
require('./gulp-tasks/karma');
require('./gulp-tasks/less');
require('./gulp-tasks/lint');
require('./gulp-tasks/watch');

gulp.task('default', ['watch', 'compile']);
