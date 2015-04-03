module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      build: {
        src: ['src/bdgt.js', 'src/bdgt.*.js'],
        dest: 'dist/bdgt.min.js'
      }
    }
  });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
}
