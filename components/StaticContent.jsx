import React from "react";

import { Box, Image } from "@chakra-ui/react";

import TweetGrid from "./TweetGrid";

const StaticContent = () => {
  return (
    <Box width="70%" h="100%" d="flex" alignItems="center" flexDir="column">
      {/** Top */}
      <Box mt="30px" w="60%" height="40%" bgColor="white">
        <Image
          w="100%"
          h="100%"
          src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Twitter placeholder"
          objectFit="cover"
        />
      </Box>
      {/** Bottom */}
      <Box mt="30px" w="100%" height="60%" bgColor="white">
        <TweetGrid />
      </Box>
    </Box>
  );
};

export default StaticContent;
