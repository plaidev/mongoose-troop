
/*!
 * Analytics Machine - Plugins
 * Copyright(c) Thomas Blobaum
 * MIT Licensed
 */

require('directory')(__dirname + '/lib/', function (fn, filename) {
  if (filename === 'timestamp') {
    module.exports[filename] = fn
  }
})
