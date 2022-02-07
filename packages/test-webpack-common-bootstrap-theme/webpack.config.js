const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          // Ensures CSS files are generated and
          // that CSS isn't inserted inline, in
          // the JS bundle
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.woff|woff2|otf|eot|ttf|jpg|png|jpeg|svg$/,
        type: "asset/resource",
      },
    ],
  },
};
