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
        as="header"
        h="15vh"
        display="flex"
        alignItems="center"
        flexDir="column"
        mb="1rem"
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
          {" "}
          Cmd+k is awesome!{" "}
        </Text>
        <Text as="h2" fontSize="1rem" fontWeight="bold" color="#3A28AF">
          {" "}
          Who should get the next cmdk?
        </Text>
      </Box>
    </>
  );
};

export default Header;
