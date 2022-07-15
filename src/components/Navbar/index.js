import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav,NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='home'>James Watts</NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to='home'>Home</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='projects'>Projects</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='about'>About</NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to="/link">Résumé</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar