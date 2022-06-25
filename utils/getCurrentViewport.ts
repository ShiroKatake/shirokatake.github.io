import { ITheme } from "/@types/styled";
import {
  flexboxgridDesktop,
  flexboxgridMobile,
  flexboxgridTablet,
  intBreakpoints
} from "/theme";

export const getCurrentViewport = (windowWidth: number): ITheme["flexboxgrid"] => {
  if (windowWidth < intBreakpoints.sm) {
    return flexboxgridMobile;
  } else if (
    windowWidth >= intBreakpoints.sm &&
    windowWidth < intBreakpoints.md
  ) {
    return flexboxgridTablet;
  } else {
    return flexboxgridDesktop;
  }
};