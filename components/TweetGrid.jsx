import React from "react";
import Image from "next/image";
import testimonial1 from "../public/testimonial1.png";
import { SimpleGrid, Box } from "@chakra-ui/react";

const TweetGrid = () => {
  return (
    <Box d="flex" justifyContent="center">
      <SimpleGrid columns={1} spacing={10} w="100%">
        <Box bgColor="red"></Box>
        <Box h="150px" bgColor="red">
          <Image
            w="100%"
            h="100%"
            src={testimonial1}
            alt="Twitter placeholder"
            objectFit="cover"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default TweetGrid;
