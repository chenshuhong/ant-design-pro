/**
 * @Author: 陈树鸿
 * @Date: 2019-02-13
 */

export default [
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "layout_user" */'@/layouts/UserLayout'),
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: () => import(/* webpackChunkName: "page_login" */'@/pages/User/Login') },
    ],
  },
  // app
  {
    path: '/',
    name: 'app',
    component: () => import(/* webpackChunkName: "layout_basic" */'@/layouts/BasicLayout'),
    routes: [
      { path: '/', redirect: '/dashboard/analysis' },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: () => import(/* webpackChunkName: "page_analysis" */'@/pages/Dashboard/Analysis'),
          },
        ],
      },
    ],
  },
];
