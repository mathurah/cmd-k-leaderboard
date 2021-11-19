import React, { useState } from 'react';

import { TriangleUpIcon } from '@chakra-ui/icons';

import { Box, Button, Image } from '@chakra-ui/react';
const Vote = ({ name, votes, url, Toggle, id }) => {
  const [selected, setSelected] = useState(false);
  return (
    <Box
      w="95%"
      height="15%"
      bgColor="white"
      mt="20px"
      display="flex"
      justifyContent="space-around"
      flexWrap="wrap"
      alignItems="center"
    >
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        border="1px solid black"
        p="3px"
      >
        <Button
          aria-label="Up vote"
          leftIcon={<TriangleUpIcon />}
          colorScheme="white"
          color={selected ? '#fcc732' : 'black'}
          //color to change to when selected #fcc732
          onClick={() => {
            Toggle(id, selected, setSelected);
          }}
        >
          <Box>{votes ? `${votes}` : 0}</Box>
        </Button>
      </Box>
      <Box>
        <Image boxSize="40px" src={`https://logo.clearbit.com/${url}`} />
      </Box>
      <Box> {name} </Box>
    </Box>
  );
};

export default Vote;
