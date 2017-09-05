/**
 * Created by yangzonglong on 16/5/3.
 */
var webpack = require('webpack');
var PAGE = process.env.PAGE;
var MODE = process.env.MODE;
module.exports = {
	entry: {
		'index': './src/js/index.es6.js',
		'show': './src/js/show.es6.js'
	},
	output: {
		path: './' + PAGE + '/js',
		filename: '[name].min.js'
	},
	module: {
		loaders: [{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}, {
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.scss/,
				loader: 'css-loader!sass-loader'
			},
			{
				test: /\.html/,
				loader: 'html-loader'
			}, {
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url',
				query: {
					limit: 10000,
					filename: "src/img",
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	plugins: MODE === 'build' ? [new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		}
	})] : []
	//	plugins: [
	//		new CommonsChunkPlugin("admin-commons.js", ["ap1", "ap2"])
	//	]
}