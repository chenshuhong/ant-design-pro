/**
 * @Author: 陈树鸿
 * @Date: 2019-02-11
 */
import ReactDom from "react-dom";
import React from "react";
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "models";
import AppLayout from "layouts/AppLayout";
import "./index.less";

// compose:从右到左把接收到的函数合成后的最终函数。
// 当检测到当前浏览器装有redux-devtool时用该插件的的compose取代redux的compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Redux 应用只有一个单一的 store
// createStore(reducer, [preloadedState], enhancer) 参数说明
// reducer (Function): 接收两个参数，分别是当前的 state 树和要处理的 action，返回新的 state 树。
// [preloadedState] (any): 初始时的 state。 在同构应用中，你可以决定是否把服务端传来的 state 合成（hydrate）后传给它，或者从之前保存的用户会话中恢复一个传给它。
// enhancer (Function): Store enhancer 是一个组合 store creator 的高阶函数，返回一个新的强化过的 store creator。这与 middleware 相似，它也允许你通过复合函数改变 store 接口。
// eslint-disable-next-line import/prefer-default-export
export const store = createStore(
  rootReducer /* preloadedState */,
  composeEnhancers(applyMiddleware(ReduxThunk)),
);

// <Provider> 让所有容器组件都可以访问 store，而不必显示地传递它。只需要在渲染根组件时使用即可
const element = (
  <Provider store={store}>
    <AppLayout />
  </Provider>
);

const root = document.createElement("div");
document.body.appendChild(root);
ReactDom.render(element, root);
