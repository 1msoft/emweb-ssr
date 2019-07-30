// 路由配置
export default {

  LoginRegister: {
    text: '登陆-注册', path: '/login-register', parent: 'Root',
    component: 'LoginRegister',
    nav: false, exact: true,
  },

  Index: {
    text: '首页', path: '/', parent: 'Root',
    nav: false, exact: false,
  },

  Home: {
    text: '首页', path: '/', parent: 'Index',
    component: 'HomePage', icon: "iconshouye",
    nav: true, exact: false,
  },

  Example: {
    text: '演示', path: '/example', parent: 'Index',
    component: 'Example', icon: "iconzidianpeizhi",
    nav: true, exact: false,
  },

  BasisForm: {
    text: '基础表单', path: '/basicForm', parent: 'Index',
    component: 'BasisForm', icon: "iconMail-xiaoxi",
    nav: true, exact: false,
  },

  NotFound: {
    text: '404', path: '/404', parent: 'Index',
    component: 'NotFound', icon: "iconMail-xiaoxi",
    nav: true, exact: true,
  },
};
