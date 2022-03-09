
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./field-editor-reference.cjs.production.min.js')
} else {
  module.exports = require('./field-editor-reference.cjs.development.js')
}
