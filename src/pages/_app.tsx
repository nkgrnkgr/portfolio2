import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#D5FF40" }}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}
