import React from 'react'
import { FooterContainer,FooterWrap,FooterLinksContainer, FooterLinksWrapper, FooterLinkItems,FooterLinkTitle, FooterLink} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> Navigation </FooterLinkTitle>
                            <FooterLink to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Home </FooterLink>
                            <FooterLink to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Projects </FooterLink>
                            <FooterLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}> About </FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Other Media </FooterLinkTitle>
                            <FooterLink to="https://www.instagram.com/wattzzz"> LinkedIn </FooterLink>
                            <FooterLink to="https://ca.linkedin.com/in/james-watts-b40700214"> Instagram </FooterLink>
                           
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer