import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { useWindowWidth } from '/hooks/useWindowWidth';
import { GlobalStyle } from '/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { Theme as theme } from '/theme';
import { NavBar, SocialBar } from '../global-components';

function Main({ Component, pageProps }: AppProps) {
  const [Theme, setTheme] = useState(theme);
  const windowWidth = useWindowWidth();
  
  useEffect(() => {
    const init = async () => {
      if (typeof window !== "undefined") {
        const getCurrentViewport = (await import('../utils/getCurrentViewport')).getCurrentViewport;
        const flexboxViewport = getCurrentViewport(windowWidth);
    
        setTheme({ ...theme, flexboxgrid: { ...flexboxViewport } });
      }
    }

    init();
  }, [windowWidth]);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <NavBar/>
      <Component {...pageProps} />
      <SocialBar/>
    </ThemeProvider>
  );
}

export default Main;
