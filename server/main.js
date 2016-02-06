import express from 'express'
import webpack from 'webpack'
import webpackConfig from '../config/webpack.dev.config'

import renderApp from './renderApp'

import _debug from 'debug'
const debug = _debug('app:server')

debug('Creating server.')
const app = express()

const compiler = webpack(webpackConfig)
app.use(require('./middleware/webpack-dev')(compiler))
app.use(require('./middleware/webpack-hmr')(compiler))

app.use(renderApp)

export default app
