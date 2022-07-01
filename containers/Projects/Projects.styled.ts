import styled from "styled-components";
import { Grid, Col, Row } from "/components";

export const StyledGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledRow = styled(Row)`
  padding: 2rem 0;
`;

export const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ProjectRow = styled(Row)`
  gap: 3rem;
`;

export const ProjectCol = styled(Col)`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;