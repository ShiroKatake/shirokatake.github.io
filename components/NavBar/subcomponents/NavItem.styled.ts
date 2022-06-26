import styled, { css } from "styled-components";
import { IStyledProps } from "/theme";

export interface StyledNavItemProps {
  primary?: boolean;
}

export const StyledNavItem = styled.li<StyledNavItemProps>`
  list-style: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${({primary}) => !primary ? '' : css`
    flex-grow: 100;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({theme}: IStyledProps) => theme.colors.accent_300};
  `}
  
  &:hover {
    color: ${({theme}: IStyledProps) => theme.colors.accent_300};
  }
`;

export const StyledAnchor = styled.a`
  text-decoration: none;
`;