var webpack = require("webpack");
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: { warnings: false }
});
var definePlugin = new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: '"production"'
  }
});

module.exports = {
  entry: "./demo/demo.jsx",
  output: {
    path: __dirname + "/demo/dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ["@babel/react", "@babel/preset-env"],
          plugins: ["@babel/proposal-class-properties"]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=512"
      }
    ],
    plugins: [uglifyJsPlugin, definePlugin]
  }
};
