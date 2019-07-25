import React from 'react';
import { Icon } from 'antd';

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1201129_njr6l3i6s0r.js', // 在 iconfont.cn 上生成
});

export default (props) => {
  return <MyIcon {...props} />
}
