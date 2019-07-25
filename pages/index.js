import React from 'react';

import Layout from '@layouts/Layout';
import { Button } from '@1msoft/kant-ui';

const Home = (props) => {
  return (
    <div>
      <Button>Home</Button>
    </div>
  );
};

Home.getInitialProps = async (context) => {
  return {};
};

Home.Layout = Layout;

export default Home;
