import React from "react";

import { SimpleGrid, Image, Box, AspectRatio } from "@chakra-ui/react";

const TweetGrid = () => {
  return (
    <Box h="100%" d="flex" justifyContent="center">
      <SimpleGrid columns={2} spacing={10} w="100%">
        <Box h="150px" bgColor="red">
          <Image
            w="100%"
            h="100%"
            src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Twitter placeholder"
            objectFit="cover"
          />
        </Box>
        <Box h="150px" bgColor="red">
          <Image
            w="100%"
            h="100%"
            src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Twitter placeholder"
            objectFit="cover"
          />
        </Box>
        <Box h="150px" bgColor="red">
          <Image
            w="100%"
            h="100%"
            src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Twitter placeholder"
            objectFit="cover"
          />
        </Box>
        <Box h="150px" bgColor="red">
          <Image
            w="100%"
            h="100%"
            src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Twitter placeholder"
            objectFit="cover"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default TweetGrid;

/** <Image
          w="100%"
          h="50%"
          
          src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Twitter placeholder"
        />
      </Box>

      <Image
        mt="15px"
        src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Twitter placeholder"
      />
      <Image
        src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Twitter placeholder"
      />
      <Image
        src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Twitter placeholder"
      />*/
