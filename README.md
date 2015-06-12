# grunt-spawn-sequence

[![npm](https://img.shields.io/npm/v/grunt-spawn-sequence.svg)](https://www.npmjs.com/package/grunt-spawn-sequence) [![Build Status](https://img.shields.io/travis/timdp/grunt-spawn-sequence.svg)](https://travis-ci.org/timdp/grunt-spawn-sequence) [![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

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

Copyright &copy; 2015 Tim De Pauw

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
