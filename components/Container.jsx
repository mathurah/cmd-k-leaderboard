import React from "react";

import StaticContent from "./StaticContent";
import Votes from "./Votes";

import { Box } from "@chakra-ui/react";
const Container = ({ options, Toggle }) => {
  return (
    <Box as="main" w="95%" h="100%" d="flex">
      <StaticContent />
      <Votes options={options} Toggle={Toggle} />
    </Box>
  );
};

export default Container;
