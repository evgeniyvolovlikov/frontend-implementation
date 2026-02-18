import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { buildResolvers } from './config/build/build-resolvers';
import { buildDevServer } from './config/build/build-dev-server';
import type { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv): webpack.Configuration => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};

	const mode = env?.mode || 'development';
	const port = env?.port || 3000;

	const isDev = mode === 'development';

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
		devServer: buildDevServer(),
	};
};
