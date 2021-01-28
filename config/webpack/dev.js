
const fs = require('fs');
const {merge} = require('webpack-merge');
const common = require('./common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => {
	const common_options = common(env);

	const config = merge(common_options, {
		mode: 'development',
		devtool: 'inline-source-map', // 'cheap-module-eval-source-map',
		devServer: {
			contentBase: path.join(__dirname, '../../public'),
			hot: true,
		},
	});

	// console.log('write debug');
	const debug_config_path = path.resolve(__dirname, './debug_dev_config.json');
	fs.writeFileSync(debug_config_path, JSON.stringify(config, null, 4));

	return config;
};
