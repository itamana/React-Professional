const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	output : {
		filename: "bundle.js"
	},
	plugins:[
		new HtmlWebpackPlugin({template: './src/index.html'})
	]
}