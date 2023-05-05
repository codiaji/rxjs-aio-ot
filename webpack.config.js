const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "production",
  target: ["web", "es5"],
  output: {
    environment: {
      arrowFunction: false,
    },
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  devServer: {
    static: "./dist/",
    hot: true,
    open: true,
  },
};
