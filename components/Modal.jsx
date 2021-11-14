import { Box, IconButton, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaGithub } from "react-icons/fa";

const Modal = ({ show, Toggle, signInWithGithub, signInWithGoogle }) => {
  return (
    <>
      {show ? (
        <Box
          w="100%"
          h="100%"
          bgColor="rgba(0, 0, 0, 0.5)"
          position="absolute"
          d="flex"
          justifyContent="center"
          alignItems="center"
          left="0"
          top="0"
        >
          <Box
            w="35%"
            bgColor="white"
            top="30%"
            d="flex"
            justifyContent="center"
            flexDir="column"
            borderRadius="10px"
          >
            <Box d="flex" justifyContent="flex-end">
              <IconButton
                mr="15px"
                aria-label="Close Modal"
                icon={<CloseIcon />}
                onClick={() => Toggle()}
                fontSize="10px"
                mt="10px"
                colorScheme="transparent"
                color="black"
              />
            </Box>
            <Box mr="15px" ml="15px">
              <Text as="h2" fontSize="200%" d="flex" justifyContent="center">
                Verify you are human to vote
              </Text>
            </Box>
            <Box w="100%" d="flex" justifyContent="center" pt="15px" pb="15px">
              <IconButton
                aria-label="Log in with Github"
                icon={<FaGithub />}
                onClick={() => {
                  signInWithGithub();
                }}
                size="lg"
                mr="15px"
              />
              <IconButton
                aria-label="Log in with Twitter"
                icon={<FaTwitter fill="#5AA4D6" />}
                onClick={() => Toggle()}
                size="lg"
                mr="15px"
                ml="15px"
              />
              <IconButton
                aria-label="Log in with Google"
                icon={<FcGoogle />}
                onClick={() => signInWithGoogle()}
                size="lg"
                ml="15px"
              />
            </Box>
            <Box
              w="100%"
              bgColor="white"
              d="flex"
              justifyContent="center"
              pt="15px"
              pb="15px"
              borderTop="1px solid black"
              borderBottomRadius="10px"
            >
              <Text as="h2" d="flex" justifyContent="center">
                Already signed up? Log in again.
              </Text>
            </Box>
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default Modal;
