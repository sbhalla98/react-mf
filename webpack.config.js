const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');
const { dependencies } = require("./package.json");
const dotenv = require('dotenv');
const webpack = require('webpack');


//call dotenv and it will return an Object with a parsed key 
const env = dotenv.config().parsed;
console.log(env,dotenv,process.env.NODE_ENV);
  
//reduce it to a nice object, the same as before
const envKeys = env && Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});


const config = {
    entry: './index.js',
//   mode: "production",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "[name].js",
  },
  target: 'web',
  devServer: {
    port: '5000',
    static: {
      directory: path.join(__dirname, 'public')
},
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: 'babel-loader', 
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    }),
    new ModuleFederationPlugin({
        name: 'host',
        filename: "host.js",
        remotes:{
            remote: "remote@https://react-mf-remote.vercel.app/app.js"
        },
        shared: {
            ...dependencies,
            react: {
                eager: true,
              },
          }
    }),
  ]
}

module.exports = (env, argv) => {
    console.log(env, argv);
    return config
  
};