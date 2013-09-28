/*
 * grunt-bats
 * https://github.com/maksimr/grunt-bats
 *
 * Copyright (c) 2013 Maksim Ryzhikov
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc',
            },
        },

        // Configuration to be run (and then tested).
        bats: {
            tests: ['test/*_test.bats'],
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['bats']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);
};
