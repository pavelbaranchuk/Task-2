const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "js", "index.js"),
  devServer: {
    contentBase: "./dist"
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
