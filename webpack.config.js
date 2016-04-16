module.exports= {
  context: __dirname,
  entry: './js/layout.js',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015'],
        plugins: ['transform-class-properties'],
      }
    }]
  },
  output:{
    path: __dirname,
    filename: 'scripts.min.js'
  }
}
