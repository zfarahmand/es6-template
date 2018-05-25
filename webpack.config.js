var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/app.js',
	output: { path: __dirname + '/build/'  , filename: 'bundle.js' },
	watch: true,
	module: {
		rules: [{
			test: /\.jsx?/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: [ 'es2015']
			}
		}]
	}
} 
//in order to use react add 'react' to the presets