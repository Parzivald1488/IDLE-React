import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
    defaultName: 'Документация',
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  webpackFinal: async (config) => {
    config.resolve.extensions.push(".ts", ".tsx");

    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
              localIdentName: '[path][name]__[local]--[hash:base64:8]',
            },
          },
        },
        "sass-loader",
      ],
    });

    return config;
  },
};

export default config;