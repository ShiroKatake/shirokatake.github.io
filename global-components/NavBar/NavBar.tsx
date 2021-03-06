import React from 'react';
import { Col, Grid, Row } from '../FlexboxGrid/FlexboxGrid';
import { StyledHeader, StyledNavList } from './NavBar.styled';
import { NavItem } from './subcomponents/NavItem';

export const NavBar:React.FC = () => {
  return (
    <StyledHeader>
      <nav>
        <StyledNavList>
          <NavItem primary href='/'>Khang Trinh</NavItem>
          <NavItem href='/projects'>Projects</NavItem>
          <NavItem href='/resume'>Resume</NavItem>
          <NavItem href='/contact'>Contact</NavItem>
        </StyledNavList>
      </nav>
    </StyledHeader>
  )
}
