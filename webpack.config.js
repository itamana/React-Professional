const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin =  require("webpack-pwa-manifest");
const path = require("path");
const Workbox = require("workbox-webpack-plugin");

module.exports = {
  output : {
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins:[
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new WebpackPwaManifestPlugin({
      name: "PetGram | Your pets photos app",
      shortname: "PetGram",
      description: "With PetGram you can find pretty pets photos",
      background_color: "#fff",
      theme_color: "#b1a",
      icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    new Workbox.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp("https://(res.cloudinary.com|images.unsplash.com)"),
          handler: "CacheFirst",
          options: {
            cacheName: "images"
          }
        },
        {
          urlPattern: new RegExp("https://https://react-professional-server-9txja36ig.vercel.app"),
          handler: "NetworkFirst",
          options: {
            cacheName: "api"
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use : {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
}