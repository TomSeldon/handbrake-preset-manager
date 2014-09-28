'use strict';

/**
 * @fileoverview
 *
 * Closure Compiler configuration.
 */

var paths = require('./gulp-helpers/paths');

/**
 * @type {Object}
 */
module.exports = {

    jar: paths.vendor +
        '/closure-compiler/lib/vendor/compiler.jar',

    compilation_level: 'SIMPLE_OPTIMIZATIONS',

    language_in: 'ECMASCRIPT5_STRICT',

    angular_pass: true,

    externs: [
        paths.vendor +
            '/closure-compiler-externs/contrib/externs/angular-1.2.js',

        paths.vendor +
            '/closure-compiler-externs/contrib/externs/jquery-1.9.js',

        __dirname + '/custom-externs/semantic-ui.js',

        __dirname + '/custom-externs/breeze.js'
    ],

    create_source_map: paths.build.directory +
        '/' + paths.build.filename + '.map',

    source_map_format: 'V3',

    generate_exports: true,

    manage_closure_dependencies: true,

    js_output_file: paths.build.directory + '/' +
        paths.build.filename,

    output_wrapper: '(function(){%output%})()' +
        '//# sourceMappingURL=/assets/js/app.min.js.map',

    define: [

        // State debugging
        'hpm.DEBUG_UI_STATE=false'

    ]

};
