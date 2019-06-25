const webpack = require("webpack");
const styledJsxLoader = require("styled-jsx/webpack");

require("dotenv").config();

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        "process.env.APP_ENV": JSON.stringify(
          process.env.APP_ENV || "development"
        ),
        "process.env.WEATHER_API_KEY": JSON.stringify(
          process.env.WEATHER_API_KEY || ""
        ),
        "process.env.WEATHER_API_URL": JSON.stringify(
          process.env.WEATHER_API_URL || ""
        )
      })
    );
    config.module.rules.push({
      test: /\.glsl$/,
      use: [
        {
          loader: "emit-file-loader",
          options: {
            name: "dist/[path][name].[ext]"
          }
        },
        "babel-loader",
        "webpack-glsl-loader"
      ]
    });
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: styledJsxLoader.loader,
          options: {
            type: "scoped"
          }
        }
      ]
    });
    return config;
  },
  transpileModules: ["gsap"],
  exportPathMap: () => ({
    "/": { page: "/Index" }
  })
};
