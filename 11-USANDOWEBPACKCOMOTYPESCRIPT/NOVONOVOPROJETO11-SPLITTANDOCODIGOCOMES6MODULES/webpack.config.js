const path = require("path");

module.exports = {
  entry: "./src/app.ts",
  mode: 'development',
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
    publicPath: 'dist', ///necessário para fazer o 'WEBPACK-DEV-SERVER 'funcionar corretamente, com auto-reload....
    

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
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".ts", ".js"],
  },
};
