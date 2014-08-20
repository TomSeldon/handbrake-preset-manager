'use strict';

var gulp = require('gulp'),
    chalk = require('chalk'),
    expand = require('glob-expand'),
    concat = require('gulp-concat'),
    closure = require('gulp-closure-compiler'),
    paths = require('../gulp-helpers/paths');

gulp.task('compile', function() {
    var closureOptions, src;

    closureOptions = {

        compilerPath: paths.vendor +
            '/closure-compiler/lib/vendor/compiler.jar',

        fileName: paths.build.filename,

        compilerFlags: {

            compilation_level: 'ADVANCED_OPTIMIZATIONS',

            language_in: 'ECMASCRIPT5_STRICT',

            angular_pass: true,

            externs: [
                paths.vendor +
                    '/closure-compiler-git/contrib/externs/angular-1.2.js',

                paths.vendor +
                    '/closure-compiler-git/contrib/externs/jquery-1.9.js',

                __dirname + '/../custom-externs/semantic-ui.js'
            ],

            generate_exports: true,

            manage_closure_dependencies: true,

            js_output_file: paths.build

        }

    };

    src = ['bower_components/closure-library/closure/goog/base.js']
        .concat(paths.app)
        .concat(paths.states)
        .concat(paths.components);

    return gulp.src(src)
        .pipe(closure(closureOptions))
        .pipe(gulp.dest(paths.build.directory))
        .on('end', function() {
            console.log(
                chalk.green.bold('Application compiled successfully')
            );
        });
});
