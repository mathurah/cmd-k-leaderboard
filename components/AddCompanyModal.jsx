import { Text, Checkbox, Box, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import Modal from './Modal';
const AddCompanyModal = ({ show, Toggle, submitOption }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [isUser, setIsUser] = useState(false);
  return (
    <Modal show={show} Toggle={Toggle}>
      <Box mr="15px" ml="15px">
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
          Add a company you think should have Commandbar 😎 🎉
        </Text>
      </Box>
      <Box w="100%" d="flex" justifyContent="center" pt="15px" pb="15px">
        <Input
          value={name}
          placeholder="Company Name"
          onChange={(e) => setName(e.target.value)}
        ></Input>
      </Box>
      <Box w="100%" d="flex" justifyContent="center" pt="15px" pb="15px">
        <Input
          value={url}
          placeholder="Website"
          onChange={(e) => setUrl(e.target.value)}
        ></Input>
      </Box>
      <Box w="100%" d="flex" justifyContent="center" pt="15px" pb="15px">
        <Checkbox
          size="md"
          colorScheme="purple"
          onChange={(e) => setIsUser(e.target.checked)}
        >
          Are you a user?
        </Checkbox>
      </Box>
      <Button
        onClick={() => submitOption({ name, url, isUser })}
        m="2.1rem"
        size="sm"
        colorScheme="purple"
      >
        Submit
      </Button>
    </Modal>
  );
};

export default AddCompanyModal;
