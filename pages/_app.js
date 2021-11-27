import "@fontsource/inter";

import {
  ChakraProvider,
  Container,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import theme from "./theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
