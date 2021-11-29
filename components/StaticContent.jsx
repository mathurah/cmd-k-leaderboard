import React from 'react';
import Image from 'next/image';
import { Box, Text } from '@chakra-ui/react';
import cmdK from '../public/cmd-k.png';
import TweetGrid from './TweetGrid';

const StaticContent = () => {
  return (
    <Box
      order="1"
      w="30vw"
      minWidth="350px"
      d="flex"
      alignItems="left"
      flexDir="column"
    >
      {/** Top */}
      <Image src={cmdK} w="100%" h="100%" alt="Twitter placeholder" />
      <Text p="0.5rem" textAlign="center">
        Cmd+k combines fuzzy search and commands to let you get stuff done
        quickly inside an app.{' '}
      </Text>

      <Text pt="1rem" textAlign="center" fontSize="1.25rem">
        Here's what the people are saying:
      </Text>
      {/** Bottom */}
      <Box mt="30px" w="100%" height="60%" bgColor="white">
        <TweetGrid />
      </Box>
    </Box>
  );
};

export default StaticContent;
