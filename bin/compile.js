/* eslint no-console: 0 */
require('babel-register')
const debug = require('debug')('app:bin:compile')

debug('Creating webpack compiler.')
const compiler = require('webpack')(require('../config/webpack.prod.config'))

debug('Compiling.')
compiler.run(function (err, stats) {
  const jsonStats = stats.toJson()

  console.log(stats.toString({
    chunks: false,
    chunkModules: false,
    colors: true
  }))

  if (err) {
    debug('Webpack compiler encountered a fatal error:', err)
    process.exit(1)
  } else if (jsonStats.errors.length > 0) {
    debug('Webpack compiler encountered errors:')
    console.log(jsonStats.errors)
    process.exit(1)
  } else if (jsonStats.warnings.length > 0) {
    debug('Webpack compiler encountered warnings:')
    console.log(jsonStats.warnings)
    const fail_on_warning = false
    if (fail_on_warning) {
      process.exit(1)
    }
  } else {
    debug('No errors or warnings encountered.')
  }
})
