import webpack from 'webpack';
import { IBuildOptions } from "./types/config";
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';


export const buildWebpackConfig = (options: IBuildOptions): webpack.Configuration => {
  const { mode, paths } = options;
  const { entry, output } = paths;
  const isDev = mode === 'development';

  return {
    entry: entry.scripts,
    output: {
      filename: '[name].[contenthash].js',
      path: output,
      clean: true,
    },
    mode,
    module: {
      rules: buildLoaders({ ...options, isDev }),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins({ ...options, isDev }),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
};