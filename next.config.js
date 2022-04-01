/** @type {import('next').NextConfig} */

const withAntdLess = require('next-plugin-antd-less');

module.exports = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV !== 'production' ? '' : '/rider_meta',
  ...withAntdLess({
    modifyVars: { '@primary-color': '#04f' }, // optional
    lessVarsFilePath: './src/styles/variables.less', // optional
    lessVarsFilePathAppendToEndOfContent: false, // optional
    // optional https://github.com/webpack-contrib/css-loader#object
    cssLoaderOptions: {
      mode: 'local',
      exportLocalsConvention: 'camelCase',
      exportOnlyLocals: false,
    },

    // for Next.js ONLY
    nextjs: {
      localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
    },
  }),
};
