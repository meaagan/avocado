import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { useContent } from '../../hooks/useContent' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const { language } = useContent() 
    
    const data = useStaticQuery(
        graphql`
          query {
            ow: file(
              sourceInstanceName: { eq: "images" }
              name: { eq: "OW" }
            ) {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        `)

    const getLocalizedPath = (path) => {
        return language === 'fr' ? `/fr${path}` : path
    }

    return (
        <FooterContainer>
            <FooterContent>
                <NavigationSection>
                    <h4>{language === 'fr' ? 'Navigation' : 'Navigation'}</h4>
                    <NavLinks>
                        <FooterLink to={getLocalizedPath('/about')}>
                            {language === 'fr' ? 'Notre Histoire' : 'Our Story'}
                        </FooterLink>
                        <FooterLink to={getLocalizedPath('/contact')}>
                            Contact
                        </FooterLink>
                        <FooterLink 
                            as="a" 
                            href="https://avocadosushi-restaurant.order-online.ai/#/" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            {language === 'fr' ? 'Commander en ligne' : 'Order Online'}
                        </FooterLink>
                        <FooterLink 
                            as="a" 
                            href={`https://widgets.libroreserve.com/WEB/QC017111388322/book${language === 'fr' ? '?lang=fr' : ''}`} 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            {language === 'fr' ? 'Réserver en ligne' : 'Reserve Online'}
                        </FooterLink>
                    </NavLinks>
                </NavigationSection>

                {/* Social Media Section */}
                <SocialSection>
                    <h4>{language === 'fr' ? 'Suivez-nous' : 'Follow Us'}</h4>
                    <SocialLinks>
                        <a href="https://www.facebook.com/avocado.sushi.du.village/">
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                        <a href="https://www.instagram.com/avocadosushiduvillage/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </SocialLinks>
                </SocialSection>

                {/* Location Section */}
                <LocationSection>
                    <Location>
                        <strong>Avocado Sushi du Village</strong><br />
                        270 ch. Bord-du-Lac - Lakeshore <br />
                        Pointe-Claire, QC, H9S 4K9<br />
                        <a href="tel:514-505-4055">514.505.4055</a><br />
                        <a href="mailto:info@avocadosushi.ca">info@avocadosushi.ca</a>
                    </Location>
                </LocationSection>

                {/* Ocean Wise Logo */}
                <LogoSection>
                    <Image><Img fluid={data.ow.childImageSharp.fluid} /></Image>
                </LogoSection>
            </FooterContent>
            
            {/* Copyright */}
            <Copyright>
                © {new Date().getFullYear()} Avocado Sushi du Village. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
            </Copyright>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    width: 100%;
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.white.dark};
    padding: 40px 0 20px 0;
`

const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
    align-items: start;

    @media (max-width: ${props => props.theme.screen.md}) {
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }

    @media (max-width: ${props => props.theme.screen.sm}) {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
    }

    h4 {
        color: ${props => props.theme.color.white.regular};
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 500;
    }
`

const NavigationSection = styled.div``

const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const FooterLink = styled(Link)`
    color: ${props => props.theme.color.white.dark};
    text-decoration: none;
    ${props => props.theme.font_size.small};
    transition: color 0.3s ease;

    &:hover {
        color: ${props => props.theme.color.white.regular};
    }
`

const SocialSection = styled.div``

const SocialLinks = styled.div`
    display: flex;
    gap: 20px;
    font-size: 24px;

    a {
        color: ${props => props.theme.color.white.dark};
        transition: color 0.3s ease;

        &:hover {
            color: ${props => props.theme.color.white.regular};
        }
    }

    @media (max-width: ${props => props.theme.screen.sm}) {
        justify-content: center;
    }
`

const LocationSection = styled.div``

const Location = styled.div`
    ${props => props.theme.font_size.small};
    line-height: 1.6;

    a {
        color: ${props => props.theme.color.white.dark};
        text-decoration: none;
        
        &:hover {
            color: ${props => props.theme.color.white.regular};
        }
    }
`

const LogoSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: ${props => props.theme.screen.sm}) {
        justify-content: center;
    }
`

const Image = styled.figure` 
    width: 100px;
    margin: 0;
`

const Copyright = styled.div`
    text-align: center;
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    ${props => props.theme.font_size.small};
    color: ${props => props.theme.color.white.darker};
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`

export default Footer