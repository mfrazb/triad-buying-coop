const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// APPROACH - add variable for process.env.NODE_ENV

module.exports = {
  // APPROACH LECTURE: add mode: process.env.NODE_ENV
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },
  devServer: {
    // can add static directory where files can be served from
    // don't need necessarily b/c devServer uses RAM to generate
    // static: {}
    port: 8080,
    hot: true,
    open: true,
    proxy: {
      // APPROACH - '/api': 'http://localhost:3000' like from and to
      // localhost:8080/api will point to localhost:3000
      '/api': {
        target: 'http://localhost:8080',
        router: () => 'http://localhost:3000',
        logLevel: 'debug',
      },
    },
  },

  plugins: [
    new HTMLWebpackPlugin({
      // APPROACH - add title: 'Development'
      template: './client/index.html',
    }),
    // APPROACH - can add MiniCssExtractPlugin
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        // APPROACH - use /\.s[ac]ss$/i
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        // sass-loader - transform scss to css
        // css-loader - allow webpack to understand/process CSS files
        // style-loader - injects CSS into DOM by adding style tags
        //
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
    ],
  },

  resolve: {
    // resolve - don't have to use file extension on imports
    extensions: ['.js', '.jsx'],
  },
  // APPROACH LECTURE - can add devtool property
};
