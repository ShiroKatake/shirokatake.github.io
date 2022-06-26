import Link from 'next/link';
import React from 'react';
import { HiddenText, StyledAnchor } from './SocialItem.styled';
import { IconContext } from "react-icons";

type SocialItemProps = {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const SocialItem:React.FC<SocialItemProps> = ({href, icon, children}) => {
  return (
    <IconContext.Provider value={{size: "32px"}}>
      <Link href={href} passHref>
        <StyledAnchor data-testid="social-item-anchor" target="_blank">
          {icon}
          <HiddenText data-testid="social-item-span">{children}</HiddenText>
        </StyledAnchor>
      </Link>
    </IconContext.Provider>
  )
}
