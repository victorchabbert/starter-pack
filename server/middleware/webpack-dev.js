import WebpackDevMiddleware from 'webpack-dev-middleware'
import _debug from 'debug'

const debug = _debug('app:server:webpack-dev')
export default function (compiler) {
  debug('Enabling Webpack Dev Middleware.')

  const middleware = WebpackDevMiddleware(compiler, {
    publicPath: '/',
    hot: true,
    quiet: false,
    noInfo: true,
    lazy: false,
    stats: {
      colors: true
    }
  })

  return middleware
}
