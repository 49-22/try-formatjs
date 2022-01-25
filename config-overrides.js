const { override, addBabelPlugins } = require("customize-cra");

module.exports = override(
  addBabelPlugins([
    "formatjs",
    {
      "idInterpolationPattern": "[sha512:contenthash:base64:6]",
      "ast": true
    }
  ])
);
