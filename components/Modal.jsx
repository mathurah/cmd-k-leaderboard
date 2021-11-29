import { Box, IconButton, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const Modal = ({ show, Toggle, children }) => {
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
            minW="370px"
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
            {children}
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default Modal;
