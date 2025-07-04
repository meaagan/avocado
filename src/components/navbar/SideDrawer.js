import * as React from "react"
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Menu
  } from '@mui/material';
  import styled from 'styled-components';
import { useState } from "react"
import { Link } from 'gatsby'
import MenuIcon from '@mui/icons-material/Menu';
import { useContent } from '../../hooks/useContent'

const SideDrawer = () => {
    const [state, setState] = useState({ right: false })
    const { language } = useContent('homepage')
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
        return
        }
        setState({ [anchor]: open })
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
        // Close drawer after scrolling
        setState({ right: false })
    }

    // Check if we're on the homepage
    const isHomepage = typeof window !== 'undefined' && 
        (window.location.pathname === '/' || window.location.pathname === '/fr' || window.location.pathname === '/fr/')
    
    // Check if we're on the about page
    const isAboutPage = typeof window !== 'undefined' && 
        (window.location.pathname === '/about' || window.location.pathname === '/fr/about')

    const getLocalizedPath = (path) => {
        return language === 'fr' ? `/fr${path}` : path
    }

    const sideDrawerList = anchor => (
        <DrawerContent
          role="presentation"
        >
          <List component="nav">
            {/* Our Story - Always link to page */}
            <StyledLink to={getLocalizedPath('/about')}>
                <ListItem button onClick={toggleDrawer(anchor, false)}>
                    <ListItemText primary={language === 'fr' ? 'Notre Histoire' : 'Our Story'} />
                </ListItem>
            </StyledLink>

            {/* Homepage sections - only show when on homepage */}
            {isHomepage && (
                <>
                    <ListItem button onClick={() => scrollToSection('about')}>
                        <ListItemText primary={language === 'fr' ? 'À Propos' : 'About'} />
                    </ListItem>
                    
                    <ListItem button onClick={() => scrollToSection('menu')}>
                        <ListItemText primary={language === 'fr' ? 'Menu' : 'Menu'} />
                    </ListItem>
                    
                    <ListItem button onClick={() => scrollToSection('contact')}>
                        <ListItemText primary={language === 'fr' ? 'Contact' : 'Contact'} />
                    </ListItem>
                </>
            )}

            {/* Contact link for non-homepage, non-about pages */}
            {!isHomepage && !isAboutPage && (
                <StyledLink to={getLocalizedPath('/#contact')}>
                    <ListItem button onClick={toggleDrawer(anchor, false)}>
                        <ListItemText primary={language === 'fr' ? 'Contact' : 'Contact'} />
                    </ListItem>
                </StyledLink>
            )}

            {/* External links */}
            <ExternalLink href="https://avocadosushi-restaurant.order-online.ai/#/" target="_blank" rel="noreferrer">
                <ListItem button onClick={toggleDrawer(anchor, false)}>
                    <ListItemText primary={language === 'fr' ? 'Commander' : 'Order Online'} />
                </ListItem>
            </ExternalLink>
            
            <ExternalLink href={`https://widgets.libroreserve.com/WEB/QC017111388322/book${language === 'fr' ? '?lang=fr' : ''}`} target="_blank" rel="noreferrer">
                <ListItem button onClick={toggleDrawer(anchor, false)}>
                    <ListItemText primary={language === 'fr' ? 'Réserver' : 'Reserve Online'} />
                </ListItem>
            </ExternalLink>

            {/* Language switcher */}
            <LanguageSection>
                <StyledLink to="/">
                    <ListItem button onClick={toggleDrawer(anchor, false)}>
                        <ListItemText primary="English" />
                    </ListItem>
                </StyledLink>
                <StyledLink to="/fr">
                    <ListItem button onClick={toggleDrawer(anchor, false)}>
                        <ListItemText primary="Français" />
                    </ListItem>
                </StyledLink>
            </LanguageSection>
          </List>
        </DrawerContent>
    );

    return (
        <React.Fragment>
          <IconButton edge="start" onClick={toggleDrawer("right", true)} aria-label="menu">
            <MenuIcon />
            <Menu />
          </IconButton>
            <Drawer
                anchor="right"
                open={state.right}
                onOpen={toggleDrawer("right", true)}
                onClose={toggleDrawer("right", false)}
            >
              {sideDrawerList("right")}
            </Drawer>
        </React.Fragment>
    )
}

const DrawerContent = styled.div`
    width: 250px;
    padding: 20px 0;
`

const StyledLink = styled(Link)`
    color: black;
    font-family: 'inherit';
    text-decoration: none;
`

// Also handle external links
const ExternalLink = styled.a`
    color: black;
    font-family: 'inherit';
    text-decoration: none;
`

const LanguageSection = styled.div`
    border-top: 1px solid #eee;
    margin-top: 20px;
    padding-top: 20px;
`

export default SideDrawer