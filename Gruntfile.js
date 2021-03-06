module.exports = function(grunt) {

    grunt.initConfig({

        clean: {
            release: ['css']
        },

        topcoat: {
            options: {
                browsers: ['last 2 versions'],
                namespace: 'topcoat'
            },
            compile: {
                files: [{
                        expand: true,
                        cwd: 'test/fixtures',
                        src: ['*.css'],
                        dest: 'css/',
                        ext: '.css'
                    }
                ]
            }
        },

        topdoc: {
            usageguides: {
                options: {
                    source: 'css',
                    destination: "demo",
                    template: "node_modules/topdoc-theme/",
                    templateData: {
                        "title": "Topcoat",
                        "subtitle": "CSS for clean and fast web apps",
                        "homeURL": "http://topcoat.io"
                    }
                }
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'css',
                src: ['*.css', '!*.min.css'],
                dest: 'css',
                ext: '.min.css'
            }
        },

        simplemocha: {
            all: {
                src: ['test/*.test.js']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-topcoat');
    grunt.loadNpmTasks('grunt-topdoc');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-simple-mocha');

    grunt.registerTask('default', ['clean', 'build', 'test', 'release']);
    grunt.registerTask('build', ['topcoat']);
    grunt.registerTask('test', ['simplemocha']);
    grunt.registerTask('release', ['cssmin', 'topdoc']);

};
