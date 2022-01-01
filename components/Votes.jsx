import React, { useContext } from 'react';

import { Box, Button, Text } from '@chakra-ui/react';
import { Store } from '../context/state';
import Vote from './Vote';
import AddCompanyModal from './AddCompanyModal';
import { ChevronDownIcon, AddIcon, SmallAddIcon } from '@chakra-ui/icons';
import { ACTION_TYPES, FILTER_ENUM } from '../context/constants';

const Votes = ({ Toggle, toggleAdd }) => {
  const {
    state: { voteOptions: options, userVotes, filter, votesLoading: loading },
    dispatch,
  } = useContext(Store);
  let votedArray = userVotes.map((vote) => vote.option_id);

  const setFilter = (filter) => {
    dispatch({
      type: ACTION_TYPES.TOGGLE_FILTER,
      filter,
    });
  };
  return (
    <Box
      w="35%"
      minW="370px"
      maxH="100vH"
      d="flex"
      pt="1rem"
      order="2"
      justifyContent="flex-start"
      alignItems="center"
      flexDir="column"
      as="votes"
    >
      <Box
        width="90%"
        bgColor="white"
        display="flex"
        flexDir="row"
        mb="1rem"
        justifyContent="space-between"
      >
        <Box>
          <Button
            mr="5px"
            colorScheme="transparent"
            color="white"
            bgColor={filter === FILTER_ENUM.TOP ? '#3A28AF' : 'gray'}
            onClick={() => setFilter('TOP')}
          >
            Top
            <ChevronDownIcon />
          </Button>
          <Button
            colorScheme="transparent"
            color="white"
            bgColor={filter === FILTER_ENUM.NEW ? '#3A28AF' : 'gray'}
            onClick={() => setFilter('NEW')}
          >
            New <ChevronDownIcon />
          </Button>
        </Box>
        <Button
          colorScheme="transparent"
          color="white"
          bgColor="#3A28AF"
          onClick={() => {
            toggleAdd();
          }}
        >
          <AddIcon />
        </Button>
      </Box>
      <Box
        width="90%"
        p="0.5rem"
        display="flex"
        flexDir="column"
        alignItems="center"
        borderRadius="10px"
        bgColor="#F5F5F5"
        marginBottom="1rem"
        paddingBottom="1rem"
      >
        <Box w="100%" paddingLeft="10px" maxH="50vh" overflow="auto">
          {(options || []).map((option) => (
            <Vote
              key={option.id}
              id={option.id}
              name={option.name}
              votes={option.votes}
              url={option.url}
              Toggle={Toggle}
              votedArray={votedArray}
              loading={loading}
            />
          ))}
        </Box>

        <Text textAlign="center" fontSize="1.2rem" pt="-2rem" p="1rem">
          Don't see your favourite app on here?
        </Text>
        <Button
          colorScheme="transparent"
          color="white"
          bgColor="#3A28AF"
          size="lg"
          mb="1rem"
          onClick={() => {
            toggleAdd();
          }}
        >
          <Text>Add app</Text>
          <SmallAddIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Votes;
