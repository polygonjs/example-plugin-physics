const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


// loaders
const glsl = require('./loaders/glsl');
const ts = require('./loaders/ts');
const babel = require('./loaders/babel');


const plugins = [
	new CleanWebpackPlugin(),
	new HtmlWebpackPlugin({
		title: 'Polygonjs Physics Example',
		template: 'index.html',
		// filename: 'index.html',
		chunks: ['index'],
	}),

];


module.exports = (env = {}) => {

	return {
		context: path.resolve(__dirname, '../../'), // to automatically find tsconfig.json
		entry: {
			index: './src/polygonjs/load_template.js',
		},
		node: {
			fs: 'empty', // to attempt bundling ammo-typed without error in prod
		},
		plugins: plugins,
		resolve: {
			// modules: [path.resolve(__dirname, '../../node_modules')],
			extensions: ['.ts', '.js'],
		},
		module: {
			rules: [
				ts(env, true),
				glsl,
				babel,
			],
		},
	};
};
