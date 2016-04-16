module.exports= {
  context: __dirname + "/jsx",
  entry: './layout.jsx',
  resolve: {
    extensions: ['', '.js', '.jsx'] // to discover  jsx files
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
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
