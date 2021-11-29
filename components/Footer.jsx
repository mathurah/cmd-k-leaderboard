import React from "react";

import { Box, Text, IconButton, Button } from "@chakra-ui/react";
import { HiLogout } from "react-icons/hi";
import { useState } from "react";

import { useSupabase } from "../hooks/useSupabase.js";
import NewsletterModal from "./NewsletterModal.jsx";
const Footer = () => {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const supabase = useSupabase();
  async function signOut() {
    await supabase.auth.signOut();
  }

  const ToggleModal = () => {
    setShowNewsletterModal(!showNewsletterModal);
  };

  return (
    <Box
      position="absolute"
      bottom="-1"
      h="10vh"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      bgColor="#212025"
      color="white"
    >
      <Button
        onClick={() => ToggleModal()}
        colorScheme="#212025"
        variant="outline"
      >
        Sign up for the Commandbar Newsletter
      </Button>
      <NewsletterModal
        show={showNewsletterModal}
        Toggle={ToggleModal}
        onSubmit={(email) => console.log("Send newsletter to " + email)}
      />
    </Box>
  );
};

export default Footer;
