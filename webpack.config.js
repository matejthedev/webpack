const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  module: {
    rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
            // Creates `style` nodes from JS strings
            // "style-loader",
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
            ],
        },
        {
            test: /\.(?:js|mjs|cjs)$/,
            use: {
                "loader": "babel-loader",
                "options": {
                  "exclude": [
                    // \\ for Windows, / for macOS and Linux
                    /node_modules[\\/]core-js/,
                    /node_modules[\\/]webpack[\\/]buildin/,
                  ],
                  "presets": [
                    "@babel/preset-env"
                  ]
                }
            }
          }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }), 
    new MiniCssExtractPlugin({
        filename: 'styles.css',
    }),
  ],
};