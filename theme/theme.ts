import { DefaultTheme } from "styled-components";
import {
  breakpoints,
  colors,
  mediaQueries,
  fontFamily,
} from "theme";

export const Theme: DefaultTheme = {
  name: "Default Theme",
  fontFamily,
  breakpoints,
  colors,
  mediaQueries,
};

export interface IStyledProps {
  theme: DefaultTheme;
}
