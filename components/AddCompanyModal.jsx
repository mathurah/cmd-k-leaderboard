import { Text, Checkbox, Box, Input, Button, Image } from '@chakra-ui/react';
import Autosuggest from 'react-autosuggest';
import themeable from 'react-themeable';
import { useState, useContext } from 'react';
import Modal from './Modal';
import { Store } from '../context/state';
import { insertOption } from '../api/supabase';
import { ACTION_TYPES } from '../context/constants';
import styles from './Modal.module.css';


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
     <div className={styles.close}>
        <div onClick={Toggle} className={styles.closeX}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18.0284L6 8.97872L8.9717 6L17.9434 15.0213L27.0566 6L30 8.92199L20.9151 18.0284L29.9434 27.1064L27.0566 30L17.9434 21.0071L8.9717 29.9433L6.0566 27.0213L15 18.0284Z"
              fill="white"
            />
            <path
              d="M4.58412 7.56618L3.17712 8.97651L4.5819 10.389L12.1793 18.0284L4.63849 25.611L3.23373 27.0235L4.64072 28.4338L7.55582 31.3558L8.96722 32.7705L10.3831 31.3603L17.95 23.8234L25.6518 31.4236L27.0676 32.8207L28.4725 31.4125L31.3593 28.5189L32.7663 27.1086L31.3615 25.6961L23.738 18.0306L31.4159 10.3345L32.8319 8.91515L31.409 7.50262L28.4656 4.58063L27.0586 3.18382L25.6496 4.57864L17.9544 12.1961L10.3898 4.58969L8.97393 3.16599L7.55582 4.58746L4.58412 7.56618Z"
              stroke="black"
              stroke-opacity="0.16"
              stroke-width="4"
            />
          </svg>
        </div>
      </div>

      <div className = {styles.signIn}>
          <div className={styles.textAddApp}>
          Add an app you think should have a command menu
          </div>
      </div>
      
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
