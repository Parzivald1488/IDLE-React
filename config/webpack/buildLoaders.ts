import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { IBuildOptions } from './types/config';

export const buildLoaders = (options: IBuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]',
          },
        },
      },
      "sass-loader",
    ],
  };

  return [
    typeScriptLoader,
    styleLoader,
  ]
};