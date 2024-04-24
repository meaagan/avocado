import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

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
  NavButton,
  HomeLink
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
    { title: `About`, path: `/about` },
    { title: `Contact`, path: `/contact` },
    { title: `Order online`, path: `https://widgets.libroreserve.com/WEB/QC014310225040/book?lang=en`},
    { title: `English`, path: `/` },
    { title: `Français`, path: `/fr` }
  ]
  return (
    <HideOnScroll>
      <AppBarStyled position="fixed">
        <Toolbar>
          <NavContainer maxWidth="lg" style={{display:'flex'}}>
            <Brand><HomeLink to="/"><Img fluid={data.brand.childImageSharp.fluid} /></HomeLink></Brand>
            <Hidden smDown>
              <NavbarList component="nav" aria-labelledby="main navigation">
                <StyledLink to='/about' key='about'><NavButton>About</NavButton></StyledLink>
                <StyledLink to='/contact' key='contact'><NavButton>Contact</NavButton></StyledLink>
                <a href='https://widgets.libroreserve.com/WEB/QC014310225040/book?lang=en' target='_blank'><OrderButton variant="contained">Order Online</OrderButton></a>
                <ul className="languages">
                  <li><Link to="/">English</Link></li>
                  <li><Link to="/fr">Français</Link></li>
                </ul>
              </NavbarList>
            </Hidden>
            <Hidden smUp>
              <SideDrawer navLinks={navLinks} />
            </Hidden>
          </NavContainer>
        </Toolbar>
      </AppBarStyled>
    </HideOnScroll>
  )
}

export default Navbar;
