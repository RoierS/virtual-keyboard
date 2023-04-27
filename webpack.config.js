const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|svg|jpeg|gif)$/,
        type: 'asset/resource'
      },
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        filename: 'index.html',
    }),
    // new CopyWebpackPlugin({
    //     patterns: [
    //         {
    //             from: path.resolve(__dirname, 'src', 'assets'),
    //             to: path.resolve(__dirname, 'dist', 'assets'),
    //         },
    //     ],
    // })
  ],
  devServer: {
    watchFiles: path.resolve(__dirname, 'src'),
    port: 9000,
    },
};