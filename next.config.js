const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}

module.exports = withCSS(withSass({
  webpack (config, options) {
      config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
              loader: 'url-loader',
              options: {
                  limit: 100000
              }
          }
          // Fixes npm packages that depend on `fs` module
        });
      config.node = {
        fs: 'empty'
      }
      return config;
  }
}));