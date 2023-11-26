import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { IBuildOptions } from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildPlugins = ({ paths }: IBuildOptions): webpack.WebpackPluginInstance[] => [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({ template: paths.entry.html }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
];