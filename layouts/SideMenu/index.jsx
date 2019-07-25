import React from 'react';
import { withRouter } from 'next/router';
import { Drawer } from 'antd';
import { SideMenu } from '@1msoft/kant-ui';
import { useStore } from '@stores';
import Router from 'next/router';
import { useObserver } from "mobx-react-lite";
// import { setCookie } from '@utils/helper.js';
import './index.less';

const component = withRouter((props) => {
  const store = useStore();
  return props.isMobile ? (
    <Drawer
      visible={store.menuStatus.drawer}
      placement="left"
      closable={false}
      width="auto"
      className="custom-drawer-wrapper"
      onClose={() => store.menuStatus.setProperty('drawer', false)}
    >
      <SideMenu
        useCollapsed={false}
        selectedKeys={props.selectKeys}
        openKeys={props.openKeys}
        dataSource={props.dataSource}
        inlineOpenStyle="normal"
        onJumpway={url => Router.push(url)}
        siderProps={{ theme: "light" }}
        retractMode={store.menuStatus.retract}
        isCollapsed={store.menuStatus.collapsed}
        // onSiderCollapse={(val) => { setCookie('menu_status', val); }}
      />
    </Drawer>
  ) : (
    <SideMenu
      useCollapsed={true}
      selectedKeys={props.selectKeys}
      openKeys={props.openKeys}
      dataSource={props.dataSource}
      inlineOpenStyle="normal"
      onJumpway={url => Router.push(url)}
      siderProps={{ theme: "light" }}
      retractMode={store.menuStatus.retract}
      isCollapsed={store.menuStatus.collapsed}
      // onSiderCollapse={(val) => { setCookie('menu_status', val); }}
    />
  );
});

export default component;
