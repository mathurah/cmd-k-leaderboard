import React from 'react';

import { Box, Text, IconButton } from '@chakra-ui/react';
import { HiLogout } from 'react-icons/hi';

import { useSupabase } from '../hooks/useSupabase.js';
const Header = ({ user, handleSignOut }) => {
  const supabase = useSupabase();
  async function signOut() {
    await supabase.auth.signOut();
  }
  return (
    <>
      <Box
        as="header"
        h="20vh"
        display="flex"
        alignItems="center"
        flexDir="column"
        position="sticky"
      >
        {user && (
          <Box>
            <IconButton
              aria-label="Sign out"
              icon={<HiLogout />}
              onClick={() => handleSignOut()}
            />
          </Box>
        )}

        <Text as="h1" fontSize="2rem" fontWeight="bold">
          {' '}
          Cmd+k is awesome!{' '}
        </Text>
        <Box
          mt="1rem"
          borderRadius="1em"
          padding="1em 2em"
          color="var(--cmdKColor)"
          background="#EBEBEB"
          transformStyle="preserve-3d"
          boxShadow="-8px 1px 2px 2px #C4C4C4"
        >
          <Text as="h2" fontSize="1rem" fontWeight="bold" color="#3A28AF">
            {' '}
            Who should get the next cmdk?
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Header;
