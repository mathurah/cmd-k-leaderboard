import React from 'react';

import StaticContent from './StaticContent';
import Votes from './Votes';

import { Box } from '@chakra-ui/react';
const Container = ({ options, Toggle, submitOption, toggleAdd }) => {
  return (
    <Box as="main" w="95%" h="100%" d="flex">
      <StaticContent />
      <Votes
        options={options}
        Toggle={Toggle}
        submitOption={submitOption}
        toggleAdd={toggleAdd}
      />
    </Box>
  );
};

export default Container;
