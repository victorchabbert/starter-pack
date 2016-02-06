/* eslint array-bracket-spacing: 0 */
require('babel-register')

const server = require('../server/main')
const debug = require('debug')('app:bin:server')

server.listen(3000)
debug('Server running at localhost:3000.')
