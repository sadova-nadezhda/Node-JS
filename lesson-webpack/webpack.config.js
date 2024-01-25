const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')

const mode = process.env.NODE_ENV || 'development'
const devMode = mode === 'development'

const config = {
  mode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true
    // publicPath: "/dist/"
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    port: 3000,
    client: {
      overlay: true,
    },
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
}

module.exports = config
