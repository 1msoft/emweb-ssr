import React from 'react';
import Router from 'next/router';
import NavButton from '@components/NavButton';

import { Divider, Icon } from 'antd';
import { Header } from '@1msoft/kant-ui';

import Notification from './Notification';
import UserCenter from './UserCenter';
import LoadingBar from './LoadingBar';
import HeaderSearch from '@components/HeaderSearch';
import MiniSearch from './MiniSearch';

import { useStore } from '@stores';
import './index.less';
import logo from '@assets/images/logo.png';

export default (props) => {
  const store = useStore();
  const searchList = [
    {
      title: '订单',
      path: '/',
    },
    {
      title: '订单查询',
      path: '/home',
    },
    {
      title: '管理',
      path: '/',
    }
  ];

  return (
    <Header className="header">
      <div className="sub-nav">
        <NavButton />
      </div>
      <Divider
        type="vertical"
        className="between-vertical" />
      <div
        onClick={() => Router.push('/')}
        className="logo">
          <img src={logo} alt="logo" />
      </div>
      {
        props.isMobile ?
          <span
            className="drawer-switch-wrapper"
            onClick={() => store.menuStatus.setProperty('drawer', true)}
          >
            <span className="inner-box">
              <Icon type="swap" />
            </span>
          </span> : null
      }
      <div className="header-search-wrapper">
        {
          !props.isMobile ?
            <HeaderSearch
              searchList={searchList}
              searchRecord={[]}
            /> : null
        }
      </div>
      <div className="header-action">
        <MiniSearch />
        <Notification/>
        <Divider type="vertical" className="divider-vertical" />
        <UserCenter />
      </div>
      <LoadingBar />
    </Header>
  );
};
