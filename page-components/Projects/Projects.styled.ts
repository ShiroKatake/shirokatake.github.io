import styled from "styled-components";
import { Grid, Col, Row } from "../../global-components";

export const StyledGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledRow = styled(Row)`
  padding-top: 2rem;
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
  padding: 3rem 0;
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