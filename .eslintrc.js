const path = require('path');
module.exports = {
  "parser": "babel-eslint",
  "extends": ['airbnb'],
  "env": {
    browser: true,
    node: true,
    es6: true,
  },
  "settings": {
    "import/resolver": {
      "webpack":{
        config:path.join(__dirname, 'webpack.common.js')//解决webpack alias问题
      }
    }
  },
  "rules": {
    "linebreak-style": ["off"],//强制使用一致的换行符风格
    "max-len":["error",{"code":120,"ignoreComments": true}],
    "quotes":["off"],//不强制单双引号
    "no-underscore-dangle":["off"],//允许悬空下划线

    "import/no-extraneous-dependencies":["error",{"devDependencies":["webpack.*.js","postcss.config.js"]}],//webpack不用校验该规则

    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],//允许jsx文件用js后缀
    "react/require-default-props": ["off"],//关闭默认参数，不需要
    "react/forbid-prop-types": ["off"],
    "react/button-has-type": ["off"],
    "react/destructuring-assignment": ["off"],
    'react/jsx-one-expression-per-line': ['off']
  },
};
