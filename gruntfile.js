module.exports = function(grunt) {
  grunt.initConfig({

nightwatch: {
   
    options: {
      cwd: './'
             },

  

    browserstack: {
      argv: {
        env: 'browserstack'
             },
      settings: {
        silent: true
                }
                 },

    'all' : {
      argv: {
        env: 'default,browserstack'
            }
            }


  
}
});

grunt.loadNpmTasks('grunt-nightwatch');

grunt.registerTask('default','nightwatch');

};