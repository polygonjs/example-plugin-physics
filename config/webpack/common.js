const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


const plugins = [
	new CleanWebpackPlugin(),
	new HtmlWebpackPlugin({
		title: 'Polygonjs Physics Example',
		template: 'index.html',
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
	};
};
