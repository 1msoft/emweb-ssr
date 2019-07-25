import React from 'react';
import './HeaderBlock.module.less';

let HeaderBlock = (props) => {
  return (
    <div className={'example-header'}>
      <i className={`iconfont iconicon1 example-header-icon`}></i>
      <span className={'example-header-text'}>查询表格</span>
    </div>
  );
};

export default HeaderBlock;
