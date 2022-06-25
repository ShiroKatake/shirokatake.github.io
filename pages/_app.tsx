import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { Theme as theme } from '/theme';
import { GlobalStyle } from '/styles/globalStyle';

function Main({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Main;
