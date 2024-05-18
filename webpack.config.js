const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "fs": false,
      "querystring": false,
      "http": false,
      "net": false,
      "crypto": false,
      "zlib": false
    }
    
  },
  mode: 'production',
};
