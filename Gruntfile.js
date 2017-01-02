module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'nested', // must be 'compressed' on production
                sourceComments: false // must be 'false' on production
            },
            dist: {
                files: {
                    'css/style.css': 'css/style.scss'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['sass']);
};
