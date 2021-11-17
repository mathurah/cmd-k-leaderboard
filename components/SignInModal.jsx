import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { Text, IconButton, Box } from "@chakra-ui/react";
import Modal from "./Modal";
const SignInModal = ({ show, Toggle, signInWithGithub, signInWithGoogle }) => {
  return (
    <Modal show={show} Toggle={Toggle}>
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
    </Modal>
  );
};

export default SignInModal;
