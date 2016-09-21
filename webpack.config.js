var webpack = require('webpack');
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}});
var definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: '"production"',
  },
});

module.exports = {
  entry: './demo/demo.jsx',
  output: {
    path: './demo/dist/', filename: 'bundle.js'
  },
  module: {
    loaders:[{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react',
    }, { 
      test: /\.css$/, 
      loader: 'style-loader!css-loader' 
    }, { 
      test: /\.(png|jpg)$/, 
      loader: 'url-loader?limit=512'
    }]
  },
  plugins: [
    uglifyJsPlugin, definePlugin
  ]
};
