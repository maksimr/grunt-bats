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
                jshintrc: '.jshintrc'
            }
        },

        // Configuration to be run (and then tested).
        bats: {
            tests: ['test/*_test.bats']
        },

        'npm-contributors': {
            options: {
                commitMessage: 'chore: update contributors'
            }
        },

        bump: {
            options: {
                commitMessage: 'chore: release v%VERSION%',
                pushTo: 'origin'
            }
        },

        'auto-release': {
            options: {
                checkTravisBuild: true
            }
        },

        watch: {
            files: '<%= jshint.all %>',
            tasks: 'test'
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['bats']);
    grunt.registerTask('release', 'Bump the version and publish to NPM.', function(type) {
        type = type || 'patch';

        grunt.task.run([
            'npm-contributors',
            'bump:' + type,
            'npm-publish'
        ]);
    });

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);
};
