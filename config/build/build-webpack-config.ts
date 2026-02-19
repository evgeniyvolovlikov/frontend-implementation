import type { Configuration } from 'webpack';
import type { BuildOptions } from "./types/config";
import { buildResolvers } from './build-resolvers';
import { buildDevServer } from './build-dev-server';
import { buildPlugins } from './build-plugins';
import { buildLoaders } from './build-loaders';

export function buildWebpackConfig(
	options: BuildOptions
): Configuration  {

	const { 
		mode, 
		paths, 
		isDev 
	} = options;

	return {
		mode,
		entry: paths.entry,
		output: {
			path: paths.build,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		module: {
			rules: buildLoaders(),
		},
		plugins: buildPlugins(options),
		resolve: buildResolvers(),
		devServer: buildDevServer(options),
		devtool: isDev && 'inline-source-map',
	}
}