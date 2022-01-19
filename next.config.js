/** @type {import('next').NextConfig} */
const withAntdLess = require("next-plugin-antd-less");

module.exports = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV !== "production" ? "/rider-meta" : "",
  ...withAntdLess({
    modifyVars: { "@primary-color": "#04f" }, // optional
    lessVarsFilePath: "./src/styles/variables.less", // optional
    lessVarsFilePathAppendToEndOfContent: false, // optional
    // optional https://github.com/webpack-contrib/css-loader#object
    cssLoaderOptions: {
      // ...
      mode: "local",

      exportLocalsConvention: "camelCase",
      exportOnlyLocals: false,
      // ...
      getLocalIdent: (context, localIdentName, localName, options) => {
        return "whatever_random_class_name";
      },
    },

    // for Next.js ONLY
    nextjs: {
      localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
    },

    // Other Config Here...
    webpack(config) {
      return config;
    },
  }),
};
