import { css } from "styled-components";
import { round } from "utils/round";
import { ITheme } from "/@types/styled";

//Font info viewed here https://opentype.js.org/font-inspector.html
const rawFontData = {
  FAMILY: "Museo Slab",
  UNITS_PER_EM: 1000,
  CAPITAL_HEIGHT: 700,
  TYPO_ASCENDER: 750,
  TYPO_DESCENDER: 250,
}

//Formula derived from here https://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align#css-awesome
const fontData = {
  capitalHeight: rawFontData.CAPITAL_HEIGHT / rawFontData.UNITS_PER_EM,
  ascender: rawFontData.TYPO_ASCENDER / rawFontData.UNITS_PER_EM,
  descender: rawFontData.TYPO_DESCENDER / rawFontData.UNITS_PER_EM,
}

export const fontFamily: ITheme["fontFamily"] = rawFontData.FAMILY;

export const typography = css`
  @font-face {
    font-family: ${rawFontData.FAMILY};
    src: url("/fonts/Museo Slab/Museo_Slab_300.otf");
    font-weight: 300;
  }

  @font-face {
    font-family: ${rawFontData.FAMILY};
    src: url("/fonts/Museo Slab/Museo_Slab_700.otf");
    font-weight: 700;
  }

  @font-face {
    font-family: ${rawFontData.FAMILY};
    src: url("/fonts/Museo Slab/Museo_Slab_900.otf");
    font-weight: 900;
  }
`;

// Utility functions
export const getTruePixelFontSize = (fontSize: number) => {
  return round(fontSize / fontData.capitalHeight);
}

export const alignFontToBaseline = (fontSize: number, lineHeight: number) => {
  const computedLineHeight = lineHeight * fontSize * fontData.capitalHeight;
  const distanceTop = fontData.ascender - fontData.capitalHeight;
  const distanceBottom = fontData.descender;
  const baselineAlign = (distanceBottom - distanceTop) * fontSize;
  return round(computedLineHeight - baselineAlign);
}
