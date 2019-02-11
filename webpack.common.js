const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * css loader 配置,加载顺序 less-loader>post-loader>css-loader>style-loader,但写的顺序要与之相反
 * less-loader：把less文件转化为css文件
 * post-loader：把css文件通过post插件转化为css文件
 * css-loader：加载css文件
 * style-loader：使用<style></style>将样式注入到我们的HTML页面
 * @param isOpenCssModule 是否开启cssmodule 当是nodemodule里的css时不开启
 * @param isLess 是否less后缀，是的话才加入lessloader，antd的锅
 * @returns {*[]}
 */
function getCssModuleLoaders(isOpenCssModule, isLess) {
  const loaders = [
    {
      loader: 'css-loader',
      options: {
        importLoaders: 2, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, less-loader,针对css里面的@import资源
        modules: isOpenCssModule, // 开启css module
        localIdentName: '[path][name]_[local]-[hash:base64:8]',
      },
    },
    'postcss-loader',
  ];
  if (isLess) {
    loaders.push({
      loader: 'less-loader',
      options: {
        javascriptEnabled: true,
      },
    });
  }
  return loaders;
}

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'], // 入口文件，这里可以把babel-polyfill引进来
  plugins: [
    new CleanWebpackPlugin(['dist']), // 每次构建清除dist目录
    new HtmlWebpackPlugin({
      title: 'React Todo Demo',
      template: './src/index.html',
    }), // 会自动把output生成的bundle与事先配置好template关联起来
  ],
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出目录
    filename: '[name].js', // 文件命名
    chunkFilename: '[name].js', // 代码分离每个chunk命名格式
  },
  optimization: {
    // webpack 在入口 chunk 中，包含了某些样板(boilerplate)，特别是 runtime 和 manifest
    // 利用runtimeChunk提取模板，防止每次改动入口文件不管有没变化都会变化
    runtimeChunk: {
      name: entryPoint => `runtime~${entryPoint.name}`,
    },
    splitChunks: {
      chunks: 'async',
      minSize: 30000, // 形成一个新代码块最小的体积
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  resolve: {
    // 设置别名
    alias: {
      src: path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      utils: path.resolve(__dirname, 'src/utils'),
      configs: path.resolve(__dirname, 'src/configs'),
      assets: path.resolve(__dirname, 'src/assets'),
      models: path.resolve(__dirname, 'src/models'),
    },
  },
  module: {
    rules: [{
      test: /\.(css)$/,
      use: getCssModuleLoaders(false, false),
      exclude: path.resolve(__dirname, 'src'),
    }, {
      test: /\.(css)$/,
      use: getCssModuleLoaders(true, false),
      include: path.resolve(__dirname, 'src'),
    }, {
      test: /\.(less)$/,
      use: getCssModuleLoaders(false, true),
      exclude: path.resolve(__dirname, 'src'),
    }, {
      test: /\.(less)$/,
      use: getCssModuleLoaders(true, true),
      include: path.resolve(__dirname, 'src'),
    }, {
      test: /\.js$/,
      loader: 'eslint-loader',
      enforce: "pre",
      include: path.resolve(__dirname, 'src'), // 指定检查的目录
    }, {
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader', // Rule.loader 是 Rule.use: [ { loader } ] 的简写。
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 1024 * 10,
        },
      },
    }],
  },
};
