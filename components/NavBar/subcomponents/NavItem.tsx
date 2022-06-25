import Link from 'next/link';
import React from 'react'
import { StyledAnchor, StyledNavItem } from './NavItem.styled'

interface NavItemProps {
  primary?: boolean;
  href: string;
  children: React.ReactNode;
}

export const NavItem:React.FC<NavItemProps> = (props) => {
  const { primary, href, children } = props;
  return (
    <StyledNavItem primary={primary}>
      <Link href={href} passHref>
        <StyledAnchor>{children}</StyledAnchor>
      </Link>
    </StyledNavItem>
  )
}
