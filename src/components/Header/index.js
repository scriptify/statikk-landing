import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavbarContainer = styled.header`
  width: 100%;
  background: ${props => props.theme.colors.background};
  display: flex;
  justify-content: flex-end;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const MenuElement = styled(AnchorLink)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  display: block;
  padding-top: ${props => props.theme.spacing[2]};
  padding-bottom: ${props => props.theme.spacing[2]};
  margin-right: ${props => props.theme.spacing[3]};
  transition: all 0.3s;
  :hover {
    text-decoration: underline;
    color: ${props => props.theme.colors.primaryHover};
  }
`;

export default function Header() {
  return (
    <NavbarContainer>
      <Navbar>
        {/* <MenuElement href="#home">Home</MenuElement> */}
        <MenuElement href="#features">How it works</MenuElement>
        <MenuElement href="#templates">Templates</MenuElement>
      </Navbar>
    </NavbarContainer>
  );
}
