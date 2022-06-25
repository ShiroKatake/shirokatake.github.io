import { breakpoints } from "./breakpoints";
import { ITheme } from "/@types/styled";

export const mediaQueries: ITheme["mediaQueries"] = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
};
