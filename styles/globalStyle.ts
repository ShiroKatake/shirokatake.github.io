import { createGlobalStyle, css } from "styled-components";
import { typography } from "/theme";
import { mediaQueries } from "/theme";

const { xs, sm, md } = mediaQueries;

const reset = css`
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    font-family: ${({theme}) => theme.fontFamily};
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.background_100};
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: unset;
    padding: unset;
  }

  @media ${xs} {
    :root {
      font-size: 16px;
    }
  }
  @media ${sm} {
    :root {
      font-size: 18px;
    }
  }
  @media ${md} {
    :root {
      font-size: 20px;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${typography}
`;
