import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap,SidebarRoute } from './SidebarElements';
import resume from '../../resume/Resume.pdf'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="home" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>
                    Home
                </SidebarLink>
                <SidebarLink to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>
                    Projects
                </SidebarLink>
                <SidebarLink to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle}>
                    About
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to={resume}>Résumé</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;