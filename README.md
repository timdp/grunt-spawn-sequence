# grunt-spawn-sequence

[![npm](https://img.shields.io/npm/v/grunt-spawn-sequence.svg)](https://www.npmjs.com/package/grunt-spawn-sequence) [![Dependencies](https://img.shields.io/david/timdp/grunt-spawn-sequence.svg)](https://david-dm.org/timdp/grunt-spawn-sequence) [![Build Status](https://img.shields.io/travis/timdp/grunt-spawn-sequence.svg)](https://travis-ci.org/timdp/grunt-spawn-sequence) [![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

Runs `grunt.util.spawn()` in sequence.

## Example

```js
grunt.initConfig({
  spawn_sequence: {
    git_commit:
      options: {
        commands: [
          {
            name: 'Get the name of the current branch',
            cmd: 'git',
            args: ['rev-parse', '--abbrev-ref', 'HEAD']
          },
          {
            name: 'Verify that we are on the master branch and commit',
            before: function (prevOutput) {
              return (prevOutput === 'master')
            },
            cmd: 'git',
            args: ['commit', '-a', '-m', 'Commit message']
          }
        ]
      }
    }
  }
})
```

## Author

[Tim De Pauw](https://tmdpw.eu/)

## License

MIT
