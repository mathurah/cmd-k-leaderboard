import React, { useState } from "react";

import { Box, Button, Text } from "@chakra-ui/react";

import Vote from "./Vote";
import AddCompanyModal from "./AddCompanyModal";
import { ChevronDownIcon, AddIcon, SmallAddIcon } from "@chakra-ui/icons";

const Votes = ({
  options,
  Toggle,
  toggleAdd,
  userVotes = [],
  filter,
  setFilter,
  loading,
}) => {
  console.log(Array.isArray(userVotes));
  console.log(userVotes);
  let votedArray = userVotes.map((vote) => vote.option_id);
  console.log("Voted Ids ", votedArray);
  const FILTER_ENUM = {
    TOP: "votes",
    NEW: "created_at",
  };
  return (
    <Box
      w="30%"
      h="100%"
      d="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Box
        width="80%"
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
            bgColor={filter === FILTER_ENUM.TOP ? "#3A28AF" : "gray"}
            onClick={() => setFilter(FILTER_ENUM.TOP)}
          >
            Top
            <ChevronDownIcon />
          </Button>
          <Button
            colorScheme="transparent"
            color="white"
            bgColor={filter === FILTER_ENUM.NEW ? "#3A28AF" : "gray"}
            onClick={() => setFilter(FILTER_ENUM.NEW)}
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
        width="80%"
        h="90%"
        display="flex"
        flexDir="column"
        alignItems="center"
        bgColor="#F5F5F5"
      >
        {options.map((option) => (
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

        <Text>Don't see your favourite app on here?</Text>
        <Button
          colorScheme="transparent"
          color="white"
          bgColor="#3A28AF"
          mt="1rem"
          size="lg"
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
