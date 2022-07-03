import styled from "styled-components";
import { IStyledProps } from "/theme";

export const StyledHeader = styled.header`
  background: ${({theme}: IStyledProps) => theme.colors.background_300};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const StyledNavList = styled.ul`
  display: flex;
  height: 64px;
  gap: 1.5rem;
  padding: 0 1rem;
`;