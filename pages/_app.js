import '@fontsource/inter';
import './globals.css';
import { StoreProvider } from '../context/state';
import { initialState } from '../context/constants';
import { reducer } from '../context/reducer';
import {
  ChakraProvider,
  Container,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider >
      <StoreProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
      </StoreProvider>
    </ChakraProvider>
  );
}

export default MyApp;
