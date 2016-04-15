module.exports= {
  context: __dirname,
  entry: './js/layout.js',
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  output:{
    path: __dirname,
    filename: 'scripts.min.js'
  }
}
