module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      build: {
        src: ['src/bdgt.js', 'src/bdgt*.js', 'tmp/bdgt-templates.js'],
        dest: 'tmp/bdgt.min.js'
      },
      options: {
        mangle: false
      }
    },
    html2js: {
      dist: {
        src: ['src/*tpl.html'],
        dest: 'tmp/bdgt-templates.js'
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: 'tmp/*.js',
        dest: 'dist/app.js'
      }
    },
    clean: {
      tmp: {
        src: ['tmp']
      }
    }
  });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-html2js');

  // Default task(s).
  grunt.registerTask('default', ['html2js', 'uglify', 'concat', 'clean:tmp']);
}
