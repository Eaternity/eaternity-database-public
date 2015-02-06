module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    meta:
      banner: """
/***************************************************************************************
 * Chosen, a Select Box Enhancer for jQuery by Patrick Filler for                      *
 * [Harvest](http://getharvest.com)                                                    *
 * Available for use under the [MIT License](http://en.wikipedia.org/wiki/MIT_License) *
 *                                                                                     *
 * Copyright (c) 2011 by Harvest                                                       *
 *                                                                                     *
 * Permission is hereby granted, free of charge, to any person obtaining               *
 * a copy of this software without restriction, including without                      *
 * limitation the rights to use, copy, modify merge, publish, distribute,              *
 * sublicense, and/or sell copies of the Software, and to permit persons               *
 * to whom the Software is furnished to do so, subject to the following                *
 * conditions:                                                                         *
 *                                                                                     *
 * The above copyright notice and this permission notice shall be                      *
 * included in all copies or substantial portions of the Software.                     *
 *                                                                                     *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,                     *
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF                  *
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND                               *
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE              *
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION              *
 * OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM OUT OF OR IN CONNECTION               *
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.                     *
 **************************************************************************************/
      """
    coffeelint:
      options:
        max_line_length:
          value: 80
          level: 'ignore'
      main: [
        'Gruntfile.coffee'
        'src/main/coffeescript/*.coffee'
        'src/main/coffeescript/*.coffee'
      ]
    watch:
      files: [
        'Gruntfile.coffee'
        'src/main/coffeescript/*.coffee'
        'src/main/coffeescript/*.coffee'
      ]
    coffee:
      options:
        join: true
        map: true
      main:
        files: [
          src: [
            'src/main/coffeescript/*.coffee'
          ]
          dest: 'index.js'
        ]
    copy:
      main:
        files:[
          src: [
            'src/main/resources/*.css'
            'src/main/resources/*.png'
          ]
          dest: 'dist/resources/'
          filter: 'isFile'
        ]
    cssmin:
      main:
        options:
          banner: '<%= meta.banner %>'
        files:[
          src: [
            'src/main/resources/*.css'
          ]
          dest: 'dist/resources/chosen.min.css'
        ]
    
  grunt.loadNpmTasks('grunt-contrib')
  grunt.loadNpmTasks('grunt-mocha')
  grunt.loadNpmTasks('grunt-coffeelint')
  grunt.loadNpmTasks('grunt-bump')


  grunt.registerTask('default', ['coffeelint', 'coffee', 'cssmin', 'copy'])