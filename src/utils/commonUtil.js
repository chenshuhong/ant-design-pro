/**
 * @Author: 陈树鸿
 * @Date: 2019-02-12
 */
import Loadable from 'react-loadable';// react-loadable 对于有动态导入的组件来说是一个高阶组件。它可以自动处理各种边缘情况，并且使代码拆分变得简单！
import Loading from '@/components/Loading';
import React from 'react';
/**
 * 模拟耗时操作
 * @param time
 * @returns {Promise<any>}
 */
export function sleep(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export function getLoadableComponent(componentImportFn, props) {
  const Component = Loadable({
    loader: componentImportFn,
    loading: Loading,
  });
  return (
    <Component {...props} />
  );
}
