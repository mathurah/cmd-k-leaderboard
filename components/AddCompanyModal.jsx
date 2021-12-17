import { Text, Checkbox, Box, Input, Button, Image } from '@chakra-ui/react';
import Autosuggest from 'react-autosuggest';
import themeable from 'react-themeable';
import { useState, useContext } from 'react';
import Modal from './Modal';
import { Store } from '../context/state';
import { insertOption } from '../api/supabase';
import { ACTION_TYPES } from '../context/constants';

const AddCompanyModal = ({ Toggle }) => {
  const [name, setName] = useState('');
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState('');
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(null);
  const [isUser, setIsUser] = useState(false);
  const [companyOptions, setCompanyOptions] = useState([]);

  const {
    state: { showAdd: show, voteOptions, user },
    dispatch,
  } = useContext(Store);

  const currentOptions = voteOptions.map((option) => option.url);

  const clearOptions = () => {
    setCompanyOptions([]);
    setName('');
    setUrl('');
    setQuery('');
    setIsUser(false);
  };

  const submitOption = async ({ name, url, isUser }) => {
    const response = await insertOption({ name, url, isUser }, user);
    if (response) {
      dispatch({
        type: ACTION_TYPES.SET_VOTE_OPTIONS,
        voteOptions: [...voteOptions, response[0]],
      });
    }
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

  const onSuggestionSelected = (event, { suggestion }) => {
    setName(suggestion.name);
    setUrl(suggestion.domain);
    setSelected(suggestion);
    setSubmitted(false);
  };

  const getCompanyURL = (company) => company.domain;
  const getCompanyName = (company) => company.name;

  const renderCompanyOption = (company) => (
    <Box display="flex" flexDirection="row" p="1rem">
      <Image height="5rem" alt="Company logo" src={`${company.logo}`}></Image>
      <Box p="1rem">
        <Text as="b">{company.name} </Text>
        <Text>{company.domain}</Text>
      </Box>
    </Box>
  );

  const autosuggestInputProps = {
    placeholder: 'Search for a company',
    value: query,
    name,
    onChange: (event, { newValue }) => {
      setQuery(newValue);
    },
  };

  return (
    <Modal show={show} Toggle={Toggle}>
      <Box mt="25px" mr="15px" ml="15px">
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
          getSuggestionValue={getCompanyName}
          onSuggestionSelected={onSuggestionSelected}
          renderSuggestion={renderCompanyOption}
          inputProps={autosuggestInputProps}
        />
      </Box>
      {selected !== null && (
        <Box
          w="100%"
          m="2rem"
          d="flex"
          justifyContent="center"
          pt="15px"
          pb="15px"
        >
          <Image
            height="5rem"
            alt="Company logo"
            src={`${selected.logo}`}
          ></Image>
          <Box p="1rem">
            <Text as="b">{selected.name} </Text>
            <Text>{selected.domain}</Text>
          </Box>
        </Box>
      )}
      <Box w="100%" p="1rem" d="flex" justifyContent="center">
        <Checkbox
          size="md"
          colorScheme="purple"
          isChecked={isUser}
          onChange={(e) => setIsUser(e.target.checked)}
        >
          Are you a user?
        </Checkbox>
      </Box>
      {!submitted ? (
        currentOptions.includes(url) ? (
          <Button m="2.1rem" size="sm" colorScheme="purple" disabled>
            Company Already Added
          </Button>
        ) : (
          <Button
            onClick={() => {
              setSubmitted(true);
              submitOption({ name, url, isUser });
              clearOptions();
              Toggle();
            }}
            m="2.1rem"
            size="sm"
            colorScheme="purple"
          >
            Add company
          </Button>
        )
      ) : (
        <Button m="2.1rem" size="sm" colorScheme="purple" disabled>
          Company Added
        </Button>
      )}
    </Modal>
  );
};

export default AddCompanyModal;
