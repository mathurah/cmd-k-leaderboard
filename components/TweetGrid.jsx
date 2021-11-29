import React from "react";
import Image from "next/image";
import testimonial1 from "../public/testimonial1.png";
import testimonial2 from "../public/testimonial2.png";
import { SimpleGrid, Box } from "@chakra-ui/react";

const TweetGrid = () => {
  return (
    <Box d="flex" justifyContent="center">
      <SimpleGrid columns={1} spacing={10} w="100%">
        <Box h="150px">
          <Image
            w="100%"
            h="100%"
            src={testimonial1}
            alt="Twitter placeholder"
            objectFit="cover"
          />
          <Image
            w="100%"
            h="100%"
            src={testimonial2}
            alt="Twitter placeholder"
          />
        </Box>
        <Box></Box>
      </SimpleGrid>
    </Box>
  );
};

export default TweetGrid;
