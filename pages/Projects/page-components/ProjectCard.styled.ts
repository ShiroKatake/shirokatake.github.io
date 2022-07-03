import styled from "styled-components";
import Image from 'next/image';
import { IStyledProps } from "/theme";

export const ImageCarousel = styled.div``;

export const StyledImage = styled(Image)`
`;

export const StyledCoverImage = styled(StyledImage)`
  z-index: 1;
  position: absolute;
  transition: all .4s;
  transform: translate3d(0px, 0px, 0px);
`;

export const TextDesscription = styled.div`
  padding: 1rem 1rem;
`;

export const StyledVideo = styled.video`
  max-width: 400px;
`;

export const ProjectDescription = styled.div`
  grid-area: overlay;
`;

export const CardContainer = styled.a`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-areas: "overlay";
  overflow: hidden;
  background-color: ${({theme}: IStyledProps) => theme.colors.background_300};
  
  &:hover {
    ${StyledCoverImage} {
      transform: translate3d(0px, -101%, 0px);
      margin: 0;
    }
  }
`;
