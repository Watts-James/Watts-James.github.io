import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav,NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}>James Watts</NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='projects' smooth={true} duration={500} spy={true} exact='false' offset={-80}>Projects</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to={{pathname:"https://www.instagram.com/wattzzz"}}target="_blank">Résumé</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar