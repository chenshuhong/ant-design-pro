const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// 这里用到了merge.smartStrategy,他会智能合并loader的内容,并设置use顺序
const config = merge.smartStrategy({
  'module.rules.use': 'prepend',
})(common, {
  // 会将 process.env.NODE_ENV 的值设为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。
  mode: 'development',
  // 当 webpack 打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。
  // 例如，如果将三个源文件（a.js, b.js 和 c.js）打包到一个 bundle（bundle.js）中，而其中一个源文件包含一个错误，那么堆栈跟踪就会简单地指向到 bundle.js。
  // 这并通常没有太多帮助，因为你可能需要准确地知道错误来自于哪个源文件。
  // 为了更容易地追踪错误和警告，JavaScript 提供了 source map 功能，将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map 就会明确的告诉你。
  devtool: 'eval',

  // 在代码发生变化后自动编译代码
  // 以下配置告知 webpack-dev-server，在 localhost:8080(默认端口,可通过port配置) 下建立服务，将 dist 目录下的文件，作为可访问文件。同时启用 webpack 的模块热替换特性：
  devServer: {
    contentBase: 'dist',
    port: 8082,
    hot: true,
  },
  module: {
    rules: [{
      test: /\.(css)$/,
      use: ['style-loader'],
      include: path.resolve(__dirname, 'src'),
    }, {
      test: /\.(css)$/,
      use: ['style-loader'],
      exclude: path.resolve(__dirname, 'src'),
    }, {
      test: /\.(less)$/,
      use: ['style-loader'],
      include: path.resolve(__dirname, 'src'),
    }, {
      test: /\.(less)$/,
      use: ['style-loader'],
      exclude: path.resolve(__dirname, 'src'),
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

module.exports = config;
