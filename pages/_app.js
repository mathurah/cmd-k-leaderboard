import Script from "next/script";
import "@fontsource/inter";
import "./globals.css";
import { StoreProvider } from "../context/state";
import { initialState } from "../context/constants";
import { reducer } from "../context/reducer";
import {
  ChakraProvider,
  Container,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          gtag('get', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', 'client_id', (client_id) => {
            localStorage.setItem('client_id', client_id)
          })
        `}
      </Script>

      <ChakraProvider>
        <StoreProvider initialState={initialState} reducer={reducer}>
          <Component {...pageProps} />
        </StoreProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
