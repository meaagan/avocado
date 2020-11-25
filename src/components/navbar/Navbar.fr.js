import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components';

import { Toolbar, Hidden } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles"

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
    { title: `commander en ligne`, path: `https://order.chkplzapp.com/avocado/menus`}
  ]

  const OrderButton = withStyles({
    root: {
        fontFamily:'inherit',
        color: 'rgba(255, 255, 255, 0.87)',
        backgroundColor: 'none',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        border: '1px solid rgba(255,255, 255, 0.23)',
      },
    })(Button);

  const NavButton = withStyles({
    root: {
        fontFamily:'inherit',
        color: 'rgba(255, 255, 255, 0.87)',
        backgroundColor: 'none',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
      },
  })(Button);

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
                <a href='https://order.chkplzapp.com/avocado/menus'><OrderButton variant="outlined">commander en ligne</OrderButton></a>
                <ul className="languages">
                  <li><Link to="/">English</Link></li>
                  <li><Link to="/fr">Francais</Link></li>
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
