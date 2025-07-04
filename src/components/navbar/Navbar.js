import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { Toolbar, Hidden } from '@mui/material'
import styled from 'styled-components'
import SideDrawer from "./SideDrawer"
import HideOnScroll from "./HideOnScroll"
import LanguageSwitcher from '../LanguageSwitcher'
import { useContent } from '../../hooks/useContent'
import {
  Brand,
  NavbarList,
  NavContainer,
  AppBarStyled,
  StyledLink
} from "./style"
import { CustomNavButton, PrimaryNavButton, TextNavButton } from "./style"
import './navbar.css'

const Navbar = () => {
  const { content, language } = useContent('homepage')
  
  const data = useStaticQuery(graphql`
    query {
      brand: file(sourceInstanceName: { eq: "images" }, name: { eq: "wavewhite" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const getLocalizedPath = (path) => {
    return language === 'fr' ? `/fr${path}` : path
  }

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Check if we're on the homepage
  const isHomepage = typeof window !== 'undefined' && 
    (window.location.pathname === '/' || window.location.pathname === '/fr' || window.location.pathname === '/fr/')
  
  // Check if we're on the about page
  const isAboutPage = typeof window !== 'undefined' && 
    (window.location.pathname === '/about' || window.location.pathname === '/fr/about')

  return (
    <HideOnScroll>
      <AppBarStyled position="fixed">
        <Toolbar>
          <NavContainer maxWidth="lg" style={{display:'flex'}}>
            <Brand>
              <Link to={getLocalizedPath('/')}>
                <Img fluid={data.brand.childImageSharp.fluid} />
              </Link>
            </Brand>
            
            <Hidden smDown>
              <NavbarList component="nav">
                {/* About Section Link - only show on homepage */}
                {isHomepage && (
                  <NavButton onClick={() => scrollToSection('about')}>
                    <TextNavButton as="span">
                      {language === 'fr' ? 'À Propos' : 'About'}
                    </TextNavButton>
                  </NavButton>
                )}
                
                {/* Menu Section Link - only show on homepage */}
                {isHomepage && (
                  <NavButton onClick={() => scrollToSection('menu')}>
                    <TextNavButton as="span">
                      {language === 'fr' ? 'Menu' : 'Menu'}
                    </TextNavButton>
                  </NavButton>
                )}
                
                {/* Contact Section Link - show on homepage as scroll, otherwise as link, but hide on about page */}
                {isHomepage && ( 
                    <NavButton onClick={() => scrollToSection('contact')}>
                      <TextNavButton as="span">
                        {language === 'fr' ? 'Contact' : 'Contact'}
                      </TextNavButton>
                    </NavButton>
                )}
                
                <div className="buttons">
                  <PrimaryNavButton 
                    href={content.navigation?.orderButtonUrl || 'https://avocadosushi-restaurant.order-online.ai/#/'} 
                    target='_blank' 
                    rel="noreferrer"
                  >
                    {content.navigation?.orderButtonText || (language === 'fr' ? 'Commander' : 'Order Online')}
                  </PrimaryNavButton>
                  
                  <CustomNavButton 
                    href={content.navigation?.reserveButtonUrl || `https://widgets.libroreserve.com/WEB/QC017111388322/book${language === 'fr' ? '?lang=fr' : ''}`} 
                    target='_blank' 
                    rel="noreferrer"
                  >
                    {content.navigation?.reserveButtonText || (language === 'fr' ? 'Réserver' : 'Reserve Online')}
                  </CustomNavButton>
                </div>
                
                <LanguageSwitcher />
              </NavbarList>
            </Hidden>
            
            <Hidden mdUp>
              <SideDrawer />
            </Hidden>
          </NavContainer>
        </Toolbar>
      </AppBarStyled>
    </HideOnScroll>
  )
}

// Add styled component for navigation buttons
const NavButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0 4px;
  cursor: pointer;
  color: inherit;
  font-family: inherit;
  
  &:focus {
    outline: none;
  }
`

export default Navbar