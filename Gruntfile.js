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
              name: 'Verify that the number of lines is 19',
              before: function(prevResult) {
                return /^\s*19\s/.test(prevResult);
              }
            },
            {
              name: 'Run a dummy command',
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
