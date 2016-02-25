/* eslint array-bracket-spacing: 0 */
import path from 'path'
import webpack from 'webpack'
import _debug from 'debug'

const debug = _debug('app:webpack:prod:config')
debug('Creating webpack configuration.')

const webpackConfig = {
  entry: [
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
    new webpack.optimize.DedupePlugin()
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
            'react'
          ]
        }
      }
    ]
  }
}
debug('Webpack configuration created.')
export default webpackConfig
