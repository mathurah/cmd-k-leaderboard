import React from 'react';

import StaticContent from './StaticContent';
import Votes from './Votes';

import { Box } from '@chakra-ui/react';
const Container = ({
  options,
  Toggle,
  submitOption,
  toggleAdd,
  userVotes,
  filter,
  setFilter,
  votesLoading,
}) => {
  return (
    // <Box
    //   as="main"
    //   w="95%"
    //   d="flex"
    //   flexFlow="wrap-reverse"
    //   marginTop="40vh"
    //   // position="fixed"
    //   // overflowY="scroll"
    //   // maxHeight="70vh"
    // >
    <>
      <Votes
        options={options}
        Toggle={Toggle}
        submitOption={submitOption}
        toggleAdd={toggleAdd}
        userVotes={userVotes}
        filter={filter}
        setFilter={setFilter}
        loading={votesLoading}
      />
      <StaticContent />
    </>
    // </Box>
  );
};

export default Container;
