/**
 * @Author: 陈树鸿
 * @Date: 2018-10-30
 */
import { combineReducers } from 'redux';
import { store } from 'src';
import auth from 'models/auth';

const reducers = {
  auth,
};

// 把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore 方法。
// 合并后的 reducer 可以调用各个子 reducer，并把它们返回的结果合并成一个 state 对象。
// 由 combineReducers() 返回的 state 对象，会将传入的每个 reducer 返回的 state 按其传递给 combineReducers() 时对应的 key 进行命名。
export default combineReducers(reducers);

/**
 * 当实现代码分割，需要立即加载一些reducer时候
 * @param key
 * @param reducer
 */
export function injectReducer(key, reducer) {
  reducers[key] = reducer;
  store.replaceReducer(combineReducers(reducers));
}
