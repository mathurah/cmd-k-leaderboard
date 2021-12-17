import '@fontsource/inter';
import './globals.css';
import { StoreProvider } from '../context/state';
import { initialState, reducer } from '../context/reducer';
import {
  ChakraProvider,
  Container,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';

import theme from './theme';

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider initialState={initialState} reducer={reducer}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </StoreProvider>
  );
}

export default MyApp;
