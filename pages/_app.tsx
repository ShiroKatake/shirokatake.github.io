import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { useWindowWidth } from '/hooks/useWindowWidth';
import { GlobalStyle } from '/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { Theme as theme } from '/theme';

function Main({ Component, pageProps }: AppProps) {
  const [Theme, setTheme] = useState(theme);
  const windowWidth = useWindowWidth();
  
  useEffect(() => {
    
    const init = async () => {
      const getCurrentViewport = (await import('../utils/getCurrentViewport')).getCurrentViewport;
      const flexboxViewport = getCurrentViewport(windowWidth);
  
      setTheme({ ...theme, flexboxgrid: { ...flexboxViewport } });
    }

    init();
  }, [windowWidth]);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Main;
