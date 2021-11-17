import { Box, Input, Text, Button } from "@chakra-ui/react";
import Modal from "./Modal";
import { useState } from "react";

const NewsletterModal = ({ show, Toggle, onSubmit }) => {
  const [email, setEmail] = useState("");
  return (
    <Modal show={show} Toggle={Toggle}>
      <Box mr="15px" ml="15px" p="20px">
        <Text
          mt="-2rem"
          pb="1rem"
          as="h2"
          fontSize="1.5rem"
          d="flex"
          textAlign="center"
          justifyContent="center"
          color="black"
        >
          Stay updated on all things Commandbar by providing your email below.
          🎉
        </Text>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          color="black"
        ></Input>
      </Box>
      <Button
        onClick={() => onSubmit(email)}
        m="2.1rem"
        size="sm"
        colorScheme="purple"
      >
        Submit
      </Button>
    </Modal>
  );
};

export default NewsletterModal;
