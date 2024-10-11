import React from 'react';
import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb
    items={[
      {
        title: 'Home',
      },
      {
        title: <p className='text-primary-emphasis'>An Application</p>,
      },
    ]}
  />
);
export default App;