const path = require("path");

module.exports = {
  entry: { main: "./index.js" },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    clean: true
  },
  mode:'development',
  target:'node',

  module:{
    rules:[
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"

      }
    ]
  }
};
