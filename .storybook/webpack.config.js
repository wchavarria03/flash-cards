const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./src/styles'],
              sourceMap: true,
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, '../src/styles/base/resources/resources.scss'),
              ],
            },
          }
        ],
        include: path.resolve(__dirname, "../src/")
      }
    ],
  }
};