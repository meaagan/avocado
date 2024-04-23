import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components';
import { withPrefix } from "gatsby"

import { Toolbar, Hidden } from '@mui/material';

import SideDrawer from "./SideDrawer"
import HideOnScroll from "./HideOnScroll"
import { 
  Brand, 
  NavbarList,
  NavContainer,
  AppBarStyled,
  StyledLink,
  OrderButton,
  NavButton
} from "./style"
import './navbar.css'

const Navbar = () => {
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

  const navLinks = [
    { title: `À Propos`, path: `/fr/about` },
    { title: `contact`, path: `/fr/contact` },
    { title: `commander en ligne`, path: `https://widgets.libroreserve.com/WEB/QC014310225040/book?lang=fr`},
    { title: `English`, path: `/` },
    { title: `Français`, path: `/fr` }
  ]

  return (
    <HideOnScroll>
      <AppBarStyled position="fixed">
        <Toolbar>
          <NavContainer maxWidth="lg" style={{display:'flex'}}>
            <Brand><HomeLink to="/fr"><Img fluid={data.brand.childImageSharp.fluid} /></HomeLink></Brand>
            <Hidden smDown>
              <NavbarList component="nav" aria-labelledby="main navigation">
                <StyledLink to='/fr/about' key='about'><NavButton>À Propos</NavButton></StyledLink>
                <StyledLink to='/fr/contact' key='contact'><NavButton>Contact</NavButton></StyledLink>
                <a href='https://widgets.libroreserve.com/WEB/QC014310225040/book?lang=fr' target='_blank'><OrderButton variant="outlined">commander en ligne</OrderButton></a>
                <ul className="languages">
                  <li><Link to="/">English</Link></li>
                  <li><Link to="/fr">Français</Link></li>
                </ul>
              </NavbarList>
            </Hidden>
            <Hidden mdUp>
              <SideDrawer navLinks={navLinks} />
            </Hidden>
          </NavContainer>
        </Toolbar>
      </AppBarStyled>
    </HideOnScroll>
  )
}

const HomeLink = styled(Link)`
  text-decoration: none;
`

export default Navbar;
