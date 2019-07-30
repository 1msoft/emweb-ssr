import React, { useState } from 'react';
import { withRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useObserver } from "mobx-react-lite";
import { Layout } from 'antd';

import { useStore } from '@stores/';

const Header = dynamic(import('../Head'));
const SideMenu = dynamic(() => import('../SideMenu'), { ssr: false });
const Content = dynamic(import('../Content'));
const LoginLoading = dynamic(import('../LoginLoading'));

// 获取有效路由列表
const getRouters = (routers) => {
  const routerList = [];
  for (let router of Object.keys(routers)) {
    routers[router].parent !== 'Root' && routers[router].path &&
    routerList.push({
      key: router,
      path: routers[router].path,
      exact: routers[router].exact,
      redirect: routers[router].redirect,
      component: routers[router].component,
    });
  }
  return routerList;
};

// 获取页面以及父级页面(链级)
const getRouterChain = (currRoute, routers) => {
  const routerList = [{
    path: currRoute.path,
    text: currRoute.text,
    icon: currRoute.icon,
  }];
  const parent = (parentName) => {
    const val = routers[parentName];
    if (parentName !== 'Index' && val && val.parent !== 'Root') {
      routerList.unshift({
        path: val.path,
        text: val.text,
        icon: val.icon,
      });
      parent(val.parent);
    }
  };
  parent(currRoute.parent);
  return routerList;
};

// 过滤出有效的RouterTree
const getRouteTree = (routeTree = []) => {
  const loop = (data) => {
    return data.map((item, index) => {
      const val = {
        key: item.name,
        title: item.text,
        url: item.path,
        icon: item.icon,
        className: item.className,
      };
      if (item.children) {
        val.child = loop(item.children);
      }
      return val;
    });
  };
  return loop(routeTree);
};

let MainComponent = (props) => useObserver(() => {
  const store = useStore();

  const routeHelper = store.app.routeHelper;
  // 当前路由
  const currRoute = routeHelper.matchRoute(props.router.pathname);
  const currRouteName = currRoute ? currRoute.routeName : null;

  // 根目录路由
  let rootRoute = routeHelper.findRouteByName('Index');
  let rootRouteName = rootRoute ? rootRoute.routeName : null;

  const leftNavInfo = routeHelper.getRouteTree(rootRouteName, currRouteName);

  const routerTree = getRouteTree(leftNavInfo.routeTree);

  const routerList = getRouters(routeHelper._routes);

  const breadcrumbs = getRouterChain(currRoute, routeHelper._routes);

  const [collapse, useCollapse] = useState(false);
  return (
    <Layout style={{ flexDirection: 'row' }}>
      {/* 左侧边栏 */}
      <SideMenu
        {...props}
        collapse={collapse}
        useCollapse={useCollapse}
        selectKeys={leftNavInfo.selectedKeys}
        openKeys={leftNavInfo.openKeys}
        dataSource={routerTree} />
      {/* 主内容 */}
      <Content
        {...props}
        useCollapse={useCollapse}
        routerList={routerList}
        breadcrumbs={breadcrumbs} >
        {props.children}
      </Content>
    </Layout>
  );
});

const Index = withRouter((props) => {
  return (
    <main className="private-layout">
      <Layout>
        {/* 头部 */}
        <Header/>

        {/* 主体 */}
        <MainComponent {...props}/>

        {/* 加载页 */}
        <LoginLoading />
      </Layout>
      <style jsx>{`
        .private-layout {
          height: 100%;
        }
      `}</style>
    </main>
  );
});

export default Index;
