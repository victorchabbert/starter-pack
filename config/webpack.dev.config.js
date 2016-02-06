/* eslint array-bracket-spacing: 0 */
import path from 'path'
import webpack from 'webpack'
import _debug from 'debug'

const debug = _debug('app:webpack:dev:config')
debug('Creating webpack configuration.')

const webpackConfig = {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr',
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: [
            'transform-object-rest-spread',
            'transform-runtime'
          ],
          presets: [
            'es2015',
            'react',
            'react-hmre'
          ]
        }
      }
    ]
  }
}
debug('Webpack configuration created.')
export default webpackConfig
