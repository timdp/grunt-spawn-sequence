module.exports = function(grunt) {
  'use strict';

  var spawnseq = require('../lib/spawn_sequence.js');

  grunt.registerMultiTask('spawn_sequence', function() {
    var options = this.options({
      commands: []
    });
    spawnseq(grunt, options.commands, this.async());
  });
};
