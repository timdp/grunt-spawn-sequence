'use strict';

var esc = function(str) {
  return str.replace(/(\s)/g, '\\$1');
};

var spawnseq = function(grunt, commands, i, output, done, prevOutput) {
  if (typeof done === 'undefined') {
    if (typeof output === 'undefined') {
      // spawn(grunt, commands, done)
      done = i;
      output = null;
      i = 0;
    } else {
      // spawn(grunt, commands, output, done)
      done = output;
      output = i;
      i = 0;
    }
  }
  if (i >= commands.length) {
    done();
    return;
  }
  if (typeof commands[i].before === 'function') {
    var result = commands[i].before(prevOutput);
    if (result !== true) {
      grunt.log.error('Before hook on  "' + commands[i].name + '" failed');
      grunt.verbose.writeln('Result: ' + result);
      done(false);
      return;
    }
    grunt.verbose.writeln('Before hook on "' + commands[i].name + '" succeeded');
  }
  var cmd = commands[i].cmd;
  var args = commands[i].args || [];
  grunt.verbose.writeln('Running command: ' +
    esc(cmd) + ' ' + args.map(esc).join(' '));
  grunt.util.spawn(
    {cmd: cmd, args: args},
    function(err, out, code) {
      if (code !== 0) {
        grunt.log.error('Command "' + commands[i].name + '" failed: ' + code);
        if (out.stderr.length) {
          grunt.log.error(out.stderr);
        }
        done(false);
      } else {
        if (output) {
          output.push(out.stdout);
        }
        spawnseq(grunt, commands, i + 1, output, done, out.stdout);
      }
    }
  );
};

module.exports = spawnseq;
