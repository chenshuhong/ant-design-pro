/* eslint-disable no-unused-vars */
/**
 * @Author: 陈树鸿
 * @Date: 2019-02-11
 */
import { sleep } from '@/utils/commonUtil';

// action types
const LOGIN_ING = 'LOGIN_ING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

// action creater
const onLoginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

const onLoginError = () => ({
  type: LOGIN_ERROR,
});
const onLoginIng = () => ({
  type: LOGIN_ING,
});

// thunk
export function login() {
  return async (dispatch) => {
    dispatch(onLoginIng());
    await sleep(5000);
    dispatch(onLoginSuccess());
  };
}

// state
const defaultState = {
  isAuthenticated: true, // 是否已经登录
  isLoginIng: false, // 是否登录中
};

// reducer
const auth = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:// 登录成功
      return Object.assign({}, state, {
        isAuthenticated: true,
        isLoginIng: false,
      });
    case LOGIN_ERROR:// 登录失败
      return Object.assign({}, state, {
        isAuthenticated: false,
        isLoginIng: false,
      });
    case LOGIN_ING:// 登录中
      return Object.assign({}, state, {
        isAuthenticated: false,
        isLoginIng: true,
      });
    default:
      return state;
  }
};

export default auth;
