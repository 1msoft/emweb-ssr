import React from 'react';
import dynamic from 'next/dynamic';

import ExampleStore from './store';
import Layout from '@layouts/Layout';

const TableList = dynamic(import('./subpage/TableList'));
const EditBlocks = dynamic(import('./subpage/EditBlock'));
const SearchBlock = dynamic(import('./subpage/SearchBlock'));
const HeaderBlock = dynamic(import('./subpage/HeaderBlock'));
const OperationBlock = dynamic(import('./subpage/OperationBlock'));

let Example = (props) => {
  return (
    <ExampleStore>
      <div className="container-block">
        <HeaderBlock />
        <SearchBlock />
        <OperationBlock />
        <TableList />
        <EditBlocks />
      </div>
    </ExampleStore>
  );
};

Example.getInitialProps = async (context) => {
  return {};
};
Example.Layout = Layout;

export default Example;
