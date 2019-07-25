import React from 'react';
import { Container } from 'next/app';
import { PageTransition } from 'next-page-transitions';

import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import { InjectStoreContext } from '../stores';

import '@assets/iconFont/iconfont.css';
import '@assets/styles/system-style.less';

const MyApp = (props) => {
  const { Component, pageProps } = props;
  return (
    <Container>
      <LocaleProvider locale={zhCN}>
        <InjectStoreContext>
          <Component.Layout {...props}>
            <Component {...pageProps}/>
          </Component.Layout>
        </InjectStoreContext>
      </LocaleProvider>
    </Container>
  );
};

MyApp.getInitialProps = async (context) => {
  const { Component } = context;
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(context);
  }

  return { pageProps };
};

export default MyApp;
