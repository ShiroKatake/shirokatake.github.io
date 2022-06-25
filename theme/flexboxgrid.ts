import 'react-styled-flexboxgrid';
import { ITheme } from '/@types/styled';

export const flexboxgridMobile: ITheme["flexboxgrid"] = {
  gridSize: 4,   // columns
  gutterWidth: 1, // rem
  outerMargin: 0, // rem
  mediaQuery: 'screen',
  container: {
    xs: 16,   // rem
    sm: 46,   // rem
    md: 68.3, // rem
    lg: 68.3  // rem
  },
  breakpoints: {
    xs: 16,   // em
    sm: 38.4, // em
    md: 51.2, // em
    lg: 51.2  // em
  },
};

export const flexboxgridTablet: ITheme["flexboxgrid"] = {
  ...flexboxgridMobile,
  gridSize: 8,
};

export const flexboxgridDesktop: ITheme["flexboxgrid"] = {
  ...flexboxgridMobile,
  gridSize: 12,
};
