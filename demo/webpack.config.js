/* eslint-disable */
var path = require('path');

module.exports = function (env = {}) {
  return {
    mode: env.prod ? 'production' : 'development',
    devtool: env.prod ? '' : 'cheap-module-eval-source-map',
    watch: !env.prod,
    entry: './demo/demo.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: path.resolve(__dirname, './tsconfig.demo.json'),
              },
            },
          ],
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader?limit=512',
        },
      ],
    },
  };
};
