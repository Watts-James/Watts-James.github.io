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
                            <FooterLink onClick={()=>window.open("https://ca.linkedin.com/in/james-watts-b40700214", '_blank')}> LinkedIn </FooterLink>
                            <FooterLink onClick={()=>window.open("https://www.instagram.com/wattzzz", '_blank')}> Instagram </FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer