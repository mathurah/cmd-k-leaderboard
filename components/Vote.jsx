import React, { useState, useEffect } from 'react';
import { TriangleUpIcon } from '@chakra-ui/icons';
import shareTwitter from '../public/share-twitter.png';
import { Box, Button, Link, Image } from '@chakra-ui/react';

const Vote = ({ name, votes, url, Toggle, id, loading, votedArray = [] }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (votedArray.includes(id)) {
      setSelected(true);
    }
  }, [votedArray]);

  return (
    <Box
      w="95%"
      height="5rem"
      mt="20px"
      mb="20px"
      mr="15px"
      p="5px"
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
      alignItems="center"
    >
      <Box w="20%">
        <a target="blank" href={`https://${url}`}>
          <Image
            alt="{name} logo"
            boxSize="40px"
            src={`https://logo.clearbit.com/${url}`}
          />
        </a>
      </Box>
      <Box width="30%"> {name} </Box>
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        border={
          selected ? '1px solid rgba(58, 40, 175, 1) ' : '1px solid #C4C4C4'
        }
        bgColor="white"
        width="20%"
        borderRadius="10px"
        p="3px"
      >
        <Button
          aria-label="Up vote"
          leftIcon={<TriangleUpIcon />}
          colorScheme="white"
          color={selected ? '#3A28AF' : '#4C5A7E'}
          //color to change to when selected #fcc732
          disabled={loading}
          onClick={() => {
            Toggle(id, selected, setSelected);
          }}
        >
          <Box>{votes ? `${votes}` : 0}</Box>
        </Button>
      </Box>
      <Box ml="0.5rem">
        <Link
          target="blank"
          href={`https://twitter.com/intent/tweet?url=https://www.commandbar.com/&text=${name} should be the next company to add Cmd+K to their site! @commandbar`}
        >
          <Image
            w="4rem"
            src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/twitter-share-button.png"
          ></Image>
        </Link>
      </Box>
    </Box>
  );
};

export default Vote;
