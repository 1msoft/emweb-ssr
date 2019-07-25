import React from 'react';
import dynamic from 'next/dynamic';

import { Layout } from 'antd';
import './index.less';

const Breadcrumb = dynamic(import('../Breadcrumb'));

const { Content, Footer } = Layout;
// import LoadingBlock from '../GlobalLoading';

export default (props) => {
  return (
    <Layout className="main-content">

      {/* 面包屑 */}
      <Breadcrumb />

      {/* 内容 */}
      <Content className="content">
        {props.children}
      </Content>

      {/* 尾部 */}
      <Footer className="footer">Copyright  2019 英迈软件技术部出品</Footer>

      {/* <LoadingBlock isLocal={true}/> */}
    </Layout>
  );
};
