import { DefaultTheme } from "styled-components";
import {
  breakpoints,
  colors,
  flexboxgridMobile,
  mediaQueries,
  fontFamily,
} from "theme";

export const Theme: DefaultTheme = {
  name: "Default Theme",
  fontFamily,
  flexboxgrid: flexboxgridMobile,
  breakpoints,
  colors,
  mediaQueries,
};

export interface IStyledProps {
  theme: DefaultTheme;
}
