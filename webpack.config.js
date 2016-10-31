const webpack = require('webpack');

module.exports = {
  entry : './src/index.js',
  output : {
    filename : 'dist/hooksjs.min.js',
    sourceFilename : '[file].map',
    library: 'Hooksjs',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module : {
    loaders : [{
      test : /\.js?$/,
      exclude : /node_modules/,
      loader : 'babel-loader'
    }],
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false
        },
      }),
    ]
  }
};
