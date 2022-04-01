const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
  ],
  webpackFinal: async (config) => {
    [].push.apply(config.resolve.plugins, [
      new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
    ]);

    return config;
  },
  staticDirs: ['../public'],
  framework: '@storybook/react',
};
