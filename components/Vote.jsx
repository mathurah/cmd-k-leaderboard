import React from "react";

import { TriangleUpIcon } from "@chakra-ui/icons";

import { Box, Button } from "@chakra-ui/react";
const Vote = ({ name, votes, Toggle }) => {
  return (
    <Box
      w="95%"
      height="15%"
      bgColor="white"
      mt="20px"
      display="flex"
      justifyContent="space-around"
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
          color="black"
          onClick={Toggle}
        >
          <Box>{votes ? `${votes}` : 0}</Box>
        </Button>
      </Box>
      <Box> Logo </Box>
      <Box> {name} </Box>
    </Box>
  );
};

export default Vote;
