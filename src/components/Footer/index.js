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
                            <FooterLink to="/link"> Home </FooterLink>
                            <FooterLink to="/link"> Projects </FooterLink>
                            <FooterLink to="/link"> About </FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Other Media </FooterLinkTitle>
                            <FooterLink to="/link"> LinkedIn </FooterLink>
                            <FooterLink to="/link"> Instagram </FooterLink>
                           
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer