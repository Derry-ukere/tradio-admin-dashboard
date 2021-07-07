import React from 'react';
import RowOne from '../molecule/welcome/RowOne';
import RowTwo from '../molecule/welcome/RowTwo';

const Welcome = () => {
  return (
    <div className="container-fluid">
      <RowOne />
      <RowTwo />
    </div>
  );
};

export default Welcome;
