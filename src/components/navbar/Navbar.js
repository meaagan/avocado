import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components';
import { Toolbar, Hidden } from "@material-ui/core";

import SideDrawer from "./SideDrawer"
import HideOnScroll from "./HideOnScroll"
import { 
  Brand, 
  NavbarList,
  NavContainer,
  AppBarStyled,
  StyledLink 
} from "./style"
import './navbar.css'

const Navbar = () => {
  const navLinks = [
    { title: `about`, path: `/about` },
    { title: `contact`, path: `/contact` },
  ]

  const data = useStaticQuery(
    graphql`
      query {
        brand: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "wavewhite" }
        ) {
          childImageSharp {
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

      }
    `
  )

  return (
    <HideOnScroll>
      <AppBarStyled position="fixed">
        <StyledToolbar>
          <NavContainer maxWidth="md" style={{display:'flex'}}>
            <Brand><HomeLink to="/"><Img fluid={data.brand.childImageSharp.fluid} /></HomeLink></Brand>
            <Hidden smDown>
              <NavbarList component="nav" aria-labelledby="main navigation">
                <StyledLink to='/about' key='about'>About</StyledLink>
                <StyledLink to='/contact' key='contact'>Contact</StyledLink>
              </NavbarList>
            </Hidden>
            <Hidden mdUp>
              <SideDrawer navLinks={navLinks} />
            </Hidden>
          </NavContainer>
        </StyledToolbar>
      </AppBarStyled>
    </HideOnScroll>
  )
}

const HomeLink = styled(Link)`
  text-decoration: none;
`

const StyledToolbar = styled(Toolbar)`
  
`
export default Navbar;
