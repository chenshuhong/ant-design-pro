/**
 * @Author: 陈树鸿
 * @Date: 2019-02-14
 */
import React from "react";
import { hot } from "react-hot-loader/root";
// 一般来说，如果你有一个响应请求的服务器，则你应该使用 <BrowserRouter> ，如果你使用的是静态文件的服务器，则应该使用 <HashRouter>
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import routerConfig from "configs/router.config";

const App = () => (
  <Router>
    <Switch>
      {routerConfig.map(route => (
        <Route key={route.name} path={route.path} component={import(route.compoent).then(module => module)} />
      ))}
    </Switch>
  </Router>
);

export default hot(App);
