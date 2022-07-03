import styled from "styled-components";
import { IStyledProps } from "/theme";

export const HiddenText = styled.span`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledAnchor = styled.a`
  &:hover {
    color: ${({theme}: IStyledProps) => theme.colors.accent_100};
  }
`;