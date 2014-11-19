module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! \n * <%= pkg.name %> v<%= pkg.version %> - <%= pkg.description %>\n *\n * <%= pkg.homepage %>\n * \n * Copyright (c) 2014 <%= pkg.author.name %> (<%= pkg.author.url %>)\n * Released under the <%= pkg.license %> license\n */\n\n',

        uglify: {
            dist: {
                options: {
                    banner: '<%= banner %>'
                },
                src: ['src/*.js'],
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        
        concat: {
            dist: {
                options: {
                    banner: '<%= banner %>'
                },
                src: ['src/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        
        jshint: {
            options: {
                jshintrc: true
            },
            files: ['src/*.js']
        },
        
        qunit: {
            unit: 'test.html'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('js', ['test', 'uglify', 'concat']);
    grunt.registerTask('default', ['js']);
    
};