import React from "react";

import { Box, Text, IconButton } from "@chakra-ui/react";
import { HiLogout } from "react-icons/hi";

import { useSupabase } from "../hooks/useSupabase.js";
const Header = ({ user, handleSignOut }) => {
  const supabase = useSupabase();
  async function signOut() {
    await supabase.auth.signOut();
  }
  return (
    <>
      <Box
        p="0.25rem"
        display="flex"
        flexDirection="row"
        justifyContent="right"
      >
        {user && (
          <IconButton
            aria-label="Sign out"
            icon={<HiLogout />}
            onClick={() => handleSignOut()}
          />
        )}
      </Box>

      <Box
        as="header"
        h="20vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        mb="1rem"
        mt="1rem"
      >
        <Text as="h1" fontSize="2rem" fontWeight="bold">
          {" "}
          Cmd+k is awesome!{" "}
        </Text>
        <Box mt="1rem" color="var(--cmdKColor)">
          <Text as="h2" fontSize="1.25rem" fontWeight="bold" color="#3A28AF">
            {" "}
            Who should get the next cmdk?
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Header;
