/**
 * @Author: 陈树鸿
 * @Date: 2019-02-13
 */

export default [
  // user
  {
    path: '/user',
    component: 'layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: '/user/Login' },
    ],
  },
  // app
  {
    path: '/',
    component: 'layouts/BasicLayout',
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
            component: './Dashboard/Analysis',
          },
        ],
      },
    ],
  },
];
