import path from 'path';
import { buildResolvers } from './config/build/build-resolvers';

export default () => {
	return {
		mode: 'development',
		entry: path.resolve(__dirname, 'index.ts'),
		output: {
			path: path.resolve(__dirname, 'build'),
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
	};
};
