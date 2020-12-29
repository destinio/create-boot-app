const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    port: 9000,
    publicPath: '/',
    clientLogLevel: 'debug',
    open: 'Google Chrome',
    watchContentBase: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
})
