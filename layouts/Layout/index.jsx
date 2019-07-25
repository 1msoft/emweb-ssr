import React, { useState } from 'react';
import { withRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useObserver } from "mobx-react-lite";
import { Layout } from 'antd';

import { useStore } from '@stores/';

const Header = dynamic(import('../Head'));
const SideMenu = dynamic(() => import('../SideMenu'), { ssr: false });
const Content = dynamic(import('../Content'));

const routers = [
  {
    "key": "HomePage",
    "title": "首页", "url": "/", "icon": "iconMail-xiaoxi"
  },
  {
    "key": "Example",
    "title": "演示", "url": "/example", "icon": "iconMail-xiaoxi",
  },
  {
    "key": "404",
    "title": "404", "url": "/404", "icon": "iconMail-xiaoxi",
  }
];

let MainComponent = (props) => useObserver(() => {
  const store = useStore();
  const [collapse, useCollapse] = useState(false);
  return (
    <Layout className="container">
      {/* 左侧边栏 */}
      <SideMenu
        {...props}
        collapse={collapse}
        useCollapse={useCollapse}
        selectKeys={[]}
        openKeys={[]}
        dataSource={routers} />
      {/* 主内容 */}
      <Content
        {...props}
        useCollapse={useCollapse}
        routerList={[]}
        breadcrumbs={[]}>
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
