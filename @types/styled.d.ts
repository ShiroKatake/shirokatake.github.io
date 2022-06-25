import 'styled-components';

interface ITheme {
  name: string,
  fontFamily: string;
  colors: {
    background_100?: string,
    background_300?: string,
    background_500?: string,
    accent_100?: string;
    accent_300?: string;
    accent_500?: string;
    white?: string,
    black?: string,
  },
  breakpoints: {
    xs?: string;
    sm?: string;
    md?: string;
  },
  mediaQueries: {
    xs?: string,
    sm?: string,
    md?: string,
  }
  flexboxgrid: {
    gridSize: number;
    gutterWidth: number;
    outerMargin: number;
    mediaQuery: string;
    container: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme { }
}
