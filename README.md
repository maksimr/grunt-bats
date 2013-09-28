# grunt-bats

[![Build Status](https://travis-ci.org/maksimr/grunt-bats.png?branch=master)](https://travis-ci.org/maksimr/grunt-bats) [![Build Status](https://drone.io/github.com/maksimr/grunt-bats/status.png)](https://drone.io/github.com/maksimr/grunt-bats/latest)

> Grunt plugin for [Bats](https://github.com/sstephenson/bats). Bats is a TAP-compliant testing framework for Bash. It provides a simple way to verify that the UNIX programs you write behave as expected.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-bats --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bats');
```

## The "bats" task

### Overview
In your project's Gruntfile, add a section named `bats` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  bats: {
    your_target: {
      // Target-specific file lists
    },
  },
})
```

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  bats: {
    files: ['test/*_test.bats'],
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Maksim Ryzhikov. Licensed under the MIT license.
