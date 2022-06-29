import styled from "styled-components";
import { mediaQueries } from "../../theme";

const { sm } = mediaQueries;

export const SocialBarContainer = styled.aside`
  position: sticky;
  bottom: 0;
`;

export const StyledSocialBar = styled.div`
  display: none;
  
  @media ${sm} {
    position: absolute;
    bottom: 0;
    display: flex;
    width: fit-content;
    gap: 0.75rem;
    flex-direction: column;
    align-items: center;
    margin-left: 1rem;
  }
`;

export const StyledLine = styled.i`
  display: block;
  width: 1px;
  height: 2rem;
  background-color: #595959;
`;