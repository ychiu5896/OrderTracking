const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',
  mode: process.env.NODE_ENV,

  output: {
    path: path.join(__dirname , '/dist'),
    filename : 'bundle.js',
  },
  devServer:{
    static: {
      directory: path.resolve(__dirname,'dist'),
      publicPath:'/dist',
    },
    proxy:{
      '/**': 'http://localhost:3000'
    }
  },

  plugins: [
    new HTMLWebpackPlugin({
      title:'Development',
      template: './src/index.html'
    })
  ],


  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }

      },
      {
        test: /.(css|scss)$/,
        exclude: /node-modules/,
        use:['style-loader', 'css-loader']
      },
      {
        test: /\.(png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },

    ]
  }

};