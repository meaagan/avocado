import React from "react"

import styled from 'styled-components';
import { Link } from 'gatsby'
import SideDrawer from "./SideDrawer"
import { Toolbar, Hidden } from "@material-ui/core";
import HideOnScroll from "./HideOnScroll"
import { 
  Brand, 
  NavbarList,
  NavContainer,
  AppBarStyled,
  StyledLink } from "./style"



const Navbar = () => {
  const navLinks = [
    { title: `about`, path: `/about` },
    { title: `contact`, path: `/contact` },
  ]

  return (
    <HideOnScroll>
      <AppBarStyled position="fixed">
        <Toolbar style={{backgroundColor: 'white'}}>
          <NavContainer maxWidth="md" style={{display:'flex'}}>
            <Brand><HomeLink to="/">Avocado</HomeLink></Brand>
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
        </Toolbar>
      </AppBarStyled>
    </HideOnScroll>
  )
}

const HomeLink = styled(Link)`
  text-decoration: none;
  // color: ${props => props.theme.color.black.regular};
`
export default Navbar;
