import { Text, Checkbox, Box, Input, Button, Image } from '@chakra-ui/react';
import Autosuggest from 'react-autosuggest';
import themeable from 'react-themeable';
import { useState } from 'react';
import Modal from './Modal';
const AddCompanyModal = ({ show, Toggle, submitOption }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [isUser, setIsUser] = useState(false);
  const [companyOptions, setCompanyOptions] = useState([]);

  const clearOptions = () => {
    setCompanyOptions([]);
    setName('');
    setUrl('');
    setIsUser(false);
  };

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
  const getCompanyName = (company) => company.name;

  const renderCompanyOption = (company) => (
    <Box display="flex" flexDirection="row" p="1rem">
      <Image height="5rem" alt="Company logo" src={company.logo}></Image>
      <Box p="1rem">
        <Text as="b">{company.name} </Text>
        <Text>{company.url}</Text>
      </Box>
    </Box>
  );

  const autosuggestInputProps = {
    placeholder: 'Search for a company',
    value: url,
    name,
    onChange: (event, { newValue }) => {
      setUrl(newValue);
      getCompanies(newValue).then((data) => {
        setName(data[0] ? data[0].name : '');
      });
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
      <Box d="flex" alignItems="center" justifyContent="center">
        <Autosuggest
          suggestions={companyOptions || []}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getCompanyURL}
          renderSuggestion={renderCompanyOption}
          inputProps={autosuggestInputProps}
        />
      </Box>
      <Box w="100%" d="flex" justifyContent="center" pt="15px" pb="15px">
        <Checkbox
          size="md"
          colorScheme="purple"
          isChecked={isUser}
          onChange={(e) => setIsUser(e.target.checked)}
        >
          Are you a user?
        </Checkbox>
      </Box>
      <Button
        onClick={() => {
          submitOption({ name, url, isUser });
          clearOptions();
        }}
        m="2.1rem"
        size="sm"
        colorScheme="purple"
      >
        Add company
      </Button>
    </Modal>
  );
};

export default AddCompanyModal;
