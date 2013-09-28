/*
 * grunt-bats
 * https://github.com/maksimr/grunt-bats
 *
 * Copyright (c) 2013 Maksim Ryzhikov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    var path = require('path');

    var testDone = function(err, result, code) {
        var verbose = grunt.verbose;
        var log = grunt.log;

        if (!code) {
            result.stdout.split('\n').forEach(log.writeln, log);
            return null;
        }

        // error handling
        verbose.error();
        (result.stdout || result.stderr).split('\n').forEach(function(lineOutput) {

            // success message
            if (lineOutput.indexOf('ok') === 0) {
                log.ok(lineOutput);
                return;
            }

            // error message
            if (lineOutput.indexOf('not ok') === 0) {
                log.error(lineOutput);
                return;
            }

            log.writeln('   ' + lineOutput);
        });

        return false;
    };

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('bats', 'Bats is a test framework for shell', function() {
        var files = this.filesSrc;
        var done = this.async();

        grunt.log.writeln('Running shell tests...');

        grunt.util.spawn({
            cmd: path.resolve('../vendor/bats/bin/bats'),
            args: files
        }, function() {
            done(testDone.apply(this, arguments));
        }.bind(this));
    });
};
