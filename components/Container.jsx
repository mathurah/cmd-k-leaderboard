import React from 'react';

import StaticContent from './StaticContent';
import Votes from './Votes';

const Container = ({ Toggle, toggleAdd }) => {
  return (
    <>
      <Votes Toggle={Toggle} toggleAdd={toggleAdd} />
      <StaticContent />
    </>
  );
};

export default Container;
