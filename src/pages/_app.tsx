import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "./icon.modules.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}
