export type BuildMode = 'production' | 'development';

export interface IBuildPaths {
  entry: {
    scripts: string;
    html: string;
  },
  output: string;
}

export interface IBuildOptions {
  mode: BuildMode;
  paths: IBuildPaths;
  port: number;
  isDev?: boolean;
}

export interface IBuildEnv {
  mode: BuildMode;
  port: number;
}