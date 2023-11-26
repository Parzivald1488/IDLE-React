import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import { IBuildEnv } from './config/webpack/types/config';

const PORT = 3000;
const MODE = 'development';

const config: (env: IBuildEnv) => webpack.Configuration = (env) => {
  const PORT = env.port ?? 3000;
  const MODE = env.mode ?? 'development';

  return buildWebpackConfig({
    mode: MODE,
    paths: {
      entry: {
        scripts: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
      },
      output: path.resolve(__dirname, 'build'),
    },
    port: PORT,
  });
};

export default config;