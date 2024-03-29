// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const envConfig = require('./env-config');

module.exports = {
  basePath: process.env.MOUNT_URL ?? '',
  staticAssetPrefix: process.env.STATIC_ASSET_PREFIX ?? '',
  assetPrefix: process.env.ASSET_PREFIX ?? '',
  output: 'export',
  trailingSlash: true,
  env: envConfig,
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/home': { page: '/' },
  //   }
  // },
  webpack: (config, {dev}) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    // Important: return the modified config
    return config;
  },
};
