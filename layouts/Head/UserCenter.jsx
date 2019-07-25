import React from 'react';

import {
  Icon,
  Menu,
  Avatar,
  Dropdown,
} from 'antd';
import Link from 'next/link';
import { withRouter } from 'next/router'

import avatar from '../../assets/images/avatar.png';
import './UserCenter.less';

const MenuItem = Menu.Item;
const MenuDivider = Menu.Divider;

/**
 * 个人资料
 */
const MenuComponent = (props) => {
  const onClick = ({ key }) => {};

  const menus = [
    {
      key: 'personalData',
      icon: 'iconyonghu-geren',
      text: '个人资料',
      path: '/user',
      className: 'personal-data',
    },
    {
      key: 'changePassword',
      icon: 'iconyonghu-xiugaimima',
      text: '修改密码',
      className: 'change-password',
    },
    {
      key: 'setting',
      icon: 'iconyonghu-shezhi',
      text: '设置',
      path: '/setting',
      className: 'setting',
    },
    {
      key: 'divider',
    },
    {
      key: 'helpCenter',
      icon: 'iconyonghu-bangzhu',
      text: '帮助中心',
      path: '/help-center',
      className: 'help-center',
    },
    {
      key: 'feedBack',
      icon: 'iconyonghu-yijian',
      text: '意见反馈',
      path: '/feed-back',
      className: 'feed-back',
    },
    {
      key: 'divider',
    },
    {
      key: 'logout',
      icon: 'iconyonghu-tuichu',
      text: '退出登录',
      path: '/login',
      className: 'logout',
    },
  ];
  return (
    <Menu onClick={onClick} className="menu">
      {menus.map((menu, index) => {
        if (menu.key === 'divider') {
          return <MenuDivider className="menu-divider" key={index}/>;
        }
        return (
          <MenuItem className={`${menu.className} menu-item`} key={menu.key}
            onClick={() => { menu.onChange ? menu.onChange() : null; } }
          >
            {
              menu.path ?
                <Link href={menu.path}>
                  <a>
                    <i className={`menu-item-icon iconfont ${menu.icon}`} />
                    {menu.text}
                  </a>
                </Link> :
                <span>
                  <i className={`menu-item-icon iconfont ${menu.icon}`} />
                  {menu.text}
                </span>
            }
          </MenuItem>
        );
      })}
    </Menu>
  );
};

let DropDown =  (props) => {
  return (
    <Dropdown
      className="dropdown"
      overlay={<MenuComponent {...props} />}
      overlayClassName="overlay-container"
      getPopupContainer={() => document.querySelector('.user-drop-down')}
    >
      <span className="user-drop-down">
        <Avatar
          icon="user"
          src={avatar}
          className="user-img"
        />
        <span className="user-name">Hi, Jeffery</span>
        <Icon
          type="right"
          className="icon-allow"
        />
      </span>
    </Dropdown>
  );
};

DropDown = withRouter(DropDown);

export default DropDown;
