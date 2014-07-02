'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    spawn_sequence: {
      test: {
        options: {
          commands: [
            {
              name: 'Get the number of lines in LICENSE',
              cmd: 'wc',
              args: ['-l', 'LICENSE']
            },
            {
              name: 'If the license is 22 lines long, run a dummy command',
              before: function(prevResult) {
                return /^\s*22\s/.test(prevResult);
              },
              cmd: 'true'
            }
          ]
        }
      }
    },
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['spawn_sequence']);
};
