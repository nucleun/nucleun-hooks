module.exports = {
  entry : './src/index.js',
  output : {
    filename : 'dist/hooks.min.js',
    sourceFilename : '[file].map'
  },
  devtool: 'source-map',
  module : {
    loaders : [{
      test : /\.js?$/,
      exclude : /node_modules/,
      loader : 'babel-loader'
    }]
  }
};
