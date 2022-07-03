import Link from 'next/link';
import React from 'react';
import { StyledNavItemProps, StyledAnchor, StyledNavItem } from './NavItem.styled'

interface NavItemProps extends StyledNavItemProps {
  href: string;
  children: React.ReactNode;
}

export const NavItem:React.FC<NavItemProps> = (props) => {
  const { primary, href, children } = props;
  return (
    <StyledNavItem data-testid="nav-item" primary={primary}>
      <Link href={href} passHref>
        <StyledAnchor>{children}</StyledAnchor>
      </Link>
    </StyledNavItem>
  );
}
