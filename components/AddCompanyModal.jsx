import { Text, Checkbox, Box, Input, Button } from '@chakra-ui/react';
import Autosuggest from 'react-autosuggest';
import { useState } from 'react';
import Modal from './Modal';
const AddCompanyModal = ({ show, Toggle, submitOption }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [isUser, setIsUser] = useState(false);
  const [companyOptions, setCompanyOptions] = useState([]);

  const getCompanies = async (query) => {
    const response = await fetch(
      `https://autocomplete.clearbit.com/v1/companies/suggest?query=${query}`
    );
    const data = await response.json();
    return data;
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    getCompanies(value).then((data) => {
      setCompanyOptions(data);
    });
  };

  const onSuggestionsClearRequested = () => {
    setCompanyOptions([]);
  };

  const getCompanyURL = (company) => company.domain;

  const renderCompanyOption = (company) => (
    <div>
      {company.domain} ({company.name})
    </div>
  );

  const autosuggestInputProps = {
    placeholder: 'Search for a company',
    value: url,
    onChange: (event, { newValue }) => {
      setUrl(newValue);
    },
  };

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
      {/* <Box w="100%" d="flex" justifyContent="center" pt="15px" pb="15px">
        <Input
          value={url}
          placeholder="Website"
          onChange={(e) => setUrl(e.target.value)}
        ></Input>
      </Box> */}
      <Autosuggest
        suggestions={companyOptions || []}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getCompanyURL}
        renderSuggestion={renderCompanyOption}
        inputProps={autosuggestInputProps}
      />
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
