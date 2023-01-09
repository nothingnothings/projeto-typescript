const path = require("path");

const CleanPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: "./src/app.ts",
  mode: 'production',
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),


},
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'none',  //desnecessários na production
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
]
};
