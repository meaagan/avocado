import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { Toolbar, Hidden } from '@mui/material'
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
  const { content, language } = useContent()
  
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

  const navLinks = [
    { title: `Our Story`, path: `/about` },
    { title: `Contact`, path: `/contact` },
    { title: `Order online`, path: `https://avocadosushi-restaurant.order-online.ai/#/`},
    { title: `Reserve online`, path: `https://widgets.libroreserve.com/WEB/QC017111388322/book`},
    { title: `English`, path: `/` },
    { title: `Français`, path: `/fr` }
  ]

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
                <StyledLink to={getLocalizedPath('/about')}>
                  <TextNavButton as="span">
                    {language === 'fr' ? 'Notre Histoire' : 'Our Story'}
                  </TextNavButton>
                </StyledLink>
                <StyledLink to={getLocalizedPath('/contact')}>
                  <TextNavButton as="span">
                    {language === 'fr' ? 'Contact' : 'Contact'}
                  </TextNavButton>
                </StyledLink>
                
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
              <SideDrawer navLinks={navLinks}/>
            </Hidden>
          </NavContainer>
        </Toolbar>
      </AppBarStyled>
    </HideOnScroll>
  )
}

export default Navbar