import React from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import cmdK from '../public/cmd-k.png';
import TweetGrid from './TweetGrid';

const StaticContent = () => {
  return (
    <Box w="25vw" minWidth="300px" d="flex" alignItems="left" flexDir="column">
      {/** Top */}
      <Image src={cmdK} w="100%" h="100%" alt="Twitter placeholder" />
      {/** Bottom */}
      <Box mt="30px" w="100%" height="60%" bgColor="white">
        <TweetGrid />
      </Box>
    </Box>
  );
};

export default StaticContent;
