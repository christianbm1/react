const path = require('path');
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
module.exports = {
  
  "stories": [

    "../src/stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            require("@babel/preset-typescript").default,
            require("@babel/preset-react").default,
            require("@babel/preset-env").default
          ]
        }
      },
      //require.resolve("react-docgen-typescript-loader")
    ]
  });

  config.module.rules.push({
    test: /\.jsx?$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          sourceType: 'unambiguous',
          babelrc: false,
          presets: [require("@babel/preset-react").default]
        }
      }
    ]
  });

  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader'],
    include: path.resolve(__dirname, '../'),
  });
  config.module.rules.push({
    test: /\.css$/,
    loaders: ['css-loader'],
    include: path.resolve(__dirname, '../'),
  });

  /*config.resolve.plugins = [
    ...(config.resolve.plugins || []),
    new TsconfigPathsPlugin({
      extensions: config.resolve.extensions,
    }),
  ];*/

  config.resolve.extensions.push(".ts", ".tsx");

    // Return the altered config
    return config;
  },
};