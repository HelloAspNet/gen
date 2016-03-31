var webpack = require('webpack');
var config = {
  entry: [
    'webpack-hot-middleware/client',
    './index.js'
  ],

  output: {
    path: './',
    filename: 'built.js'
  },
  node: {
    fs: "empty"
  },
  devServer: {
    inline: true,
    port: 3000
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({
    //  mangle: {
    //    except: ['GeneratorFunction', 'GeneratorFunctionPrototype']
    //  }
    //}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: ["syntax-async-functions", "syntax-async-generators"]
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  }

};

module.exports = config;