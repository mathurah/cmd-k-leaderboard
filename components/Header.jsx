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
    <Box
      as="header"
      h="10vh"
      display="flex"
      alignItems="center"
      flexDir="column"
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

      <Text as="h1" fontSize="2.5rem">
        {" "}
        Cmd+k* is awesome{" "}
      </Text>
      <Text>Vote to get it added to your favorite apps*</Text>
    </Box>
  );
};

export default Header;
