const presets = [
  ['@babel/env', {
    useBuiltIns: 'usage',
  }],
  ['@babel/preset-react'], // react jsx语法
];

const plugins = [
  'react-hot-loader/babel', // react 热更新插件
  ['import', { libraryName: 'antd', style: true }, 'antd'], // antd需要加载
  ['import', { libraryName: 'lodash', libraryDirectory: '', camel2DashComponentName: false }, 'lodash'], // antd需要加载
  '@babel/plugin-syntax-dynamic-import', // 动态导入语法
];

module.exports = { presets, plugins };
