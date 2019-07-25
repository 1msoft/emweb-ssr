import React from 'react';
import TableList from './subpage/TableList';
import HeaderBlock from './subpage/HeaderBlock';
import OperationBlock from './subpage/OperationBlock';
import ExampleStore from './store';
import Layout from '@layouts/Layout';

let Example = (props) => {
  return (
    <ExampleStore>
      <div className="container-block">
        <HeaderBlock />
        <OperationBlock />
        <TableList />
      </div>
    </ExampleStore>
  );
};

Example.getInitialProps = async (context) => {
  return {};
};
Example.Layout = Layout;

export default Example;
