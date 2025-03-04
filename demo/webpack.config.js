/* eslint-disable */
var path = require('path');

module.exports = function (env = {}) {
  const isProd = env.prod ?? false;
  return {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? false : 'eval-cheap-module-source-map',
    watch: !isProd,
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
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 512,
              },
            },
          ],
        },
      ],
    },
  };
};
