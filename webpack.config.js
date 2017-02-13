'use strict';

module.exports = {
  context: __dirname,
  entry: {
    app: './frontend/src/app.js',
  },
  output: {
    path: `${__dirname}/frontend/dist`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ],
  },
  resolveLoader: {
    modules: ['node_modules', `${__dirname}/node_modules`],
  }
};
