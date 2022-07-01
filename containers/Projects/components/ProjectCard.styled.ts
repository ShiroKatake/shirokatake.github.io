import styled from "styled-components";
import Image from 'next/image';
import { IStyledProps } from "/theme";

export const CardContainer = styled.a`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-areas: "overlay";
  span {
    grid-area: overlay;
  }
  div {
    grid-area: overlay;
  }
  overflow: hidden;
  background-color: ${({theme}: IStyledProps) => theme.colors.background_300};
  
  &:hover {
    img {
      transform: translate3d(0px, -101%, 0px);
      margin: 0;
    }
  }
`;

export const StyledImage = styled(Image)`
  z-index: 1;
  position: absolute;
  transition: all .4s;
  transform: translate3d(0px, 0px, 0px);
`;

export const ProjectDesscription = styled.div`
  padding: 1rem 1rem;
  position: absolute;
  height: fit-content;
  bottom: 0;
`;