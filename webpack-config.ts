import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { buildResolvers } from './config/build/build-resolvers';

export default (): webpack.Configuration => {
	const paths = {
		entry: path.resolve(__dirname, 'index.ts'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
	};

	return {
		mode: 'development',
		entry: paths.entry,
		output: {
			path: paths.build,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},
		resolve: buildResolvers(),
		plugins: [
			new HtmlWebpackPlugin({
				template: paths.html,
			}),
		],
	};
};
