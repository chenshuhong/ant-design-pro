const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge.smartStrategy({
  'module.rules.use': 'prepend',
})(common, {
  // 会将 process.env.NODE_ENV 的值设为 production。
  // 启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.
  mode: 'production',
  output: {
    filename: '[name].[chunkhash:16].js', // 文件命名
    chunkFilename: '[name].[chunkhash:16].js', // 代码分离每个chunk命名格式
  },
  module: {
    rules: [{
      test: /\.(css)$/,
      use: [MiniCssExtractPlugin.loader],
      exclude: path.resolve(__dirname, 'src'),
    }, {
      test: /\.(css)$/,
      use: [MiniCssExtractPlugin.loader],
      include: path.resolve(__dirname, 'src'),
    }, {
      test: /\.(less)$/,
      use: [MiniCssExtractPlugin.loader],
      exclude: path.resolve(__dirname, 'src'),
    }, {
      test: /\.(less)$/,
      use: [MiniCssExtractPlugin.loader],
      include: path.resolve(__dirname, 'src'),
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:16].css',
      chunkFilename: '[name].[contenthash:16].css',
    }),
  ],
});
