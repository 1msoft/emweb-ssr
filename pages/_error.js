import React from "react";
import Link from 'next/link';
import { Result, Button } from 'antd';
import PublicLayout from '@layouts/PublicLayout';

/**
 * 错误显示页面
 *
 * @class Error
 * @extends {React.Component}
 */
class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    console.log(res, '');
    return { statusCode };
  }

  render() {
    const subTitles = {
      403: '无权访问该页面',
      404: '访问的页面不存在',
      500: '服务器出错了',
    };
    return (
      <Result
        status={this.props.statusCode || '404'}
        title={this.props.statusCode || '404'}
        subTitle={subTitles[this.props.statusCode]}
        extra={<Button type="primary"><Link href="/"><a>返回首页</a></Link></Button>}
      />
    );
  }
}
Error.Layout = PublicLayout;
export default Error;
