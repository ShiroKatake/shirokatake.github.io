import { Col as col, Row as row } from "react-styled-flexboxgrid";
import styled from "styled-components";

export const Grid = styled.div`
  width: min(100% - 2rem, 1366px);
  margin-inline: auto;
`;

export const Row = styled(row)`
  margin: unset;
  padding: unset;
`;

export const Col = styled(col)`
  margin: unset;
  padding: unset;
`;
