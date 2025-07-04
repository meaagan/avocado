import * as React from "react"
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    Divider
  } from '@mui/material';
import styled from 'styled-components';
import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'gatsby';
import { useContent } from '../../hooks/useContent';

const SideDrawer = ({ navLinks }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { content, language } = useContent()
    
    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return
        }
        setIsOpen(open)
    }

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    const getLocalizedPath = (path) => {
        return language === 'fr' ? `/fr${path}` : path
    }

    const sideDrawerContent = () => (
        <DrawerContainer>
            {/* Header with Close Button */}
            <DrawerHeader>
                <RestaurantName>Avocado Sushi</RestaurantName>
                <CloseButton onClick={() => setIsOpen(false)}>
                    <CloseIcon />
                </CloseButton>
            </DrawerHeader>

            {/* Navigation Links */}
            <NavSection>
                <NavList>
                    <NavItem>
                        <NavLink to={getLocalizedPath('/')} onClick={handleLinkClick}>
                            {language === 'fr' ? 'Accueil' : 'Home'}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={getLocalizedPath('/about')} onClick={handleLinkClick}>
                            {language === 'fr' ? 'Notre Histoire' : 'Our Story'}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={getLocalizedPath('/contact')} onClick={handleLinkClick}>
                            Contact
                        </NavLink>
                    </NavItem>
                </NavList>
            </NavSection>

            <StyledDivider />

            {/* Action Buttons */}
            <ActionSection>
                <ActionButtons>
                    <PrimaryActionButton 
                        href={content.navigation?.orderButtonUrl || 'https://avocadosushi-restaurant.order-online.ai/#/'} 
                        target='_blank' 
                        rel="noreferrer"
                        onClick={handleLinkClick}
                    >
                        {content.navigation?.orderButtonText || (language === 'fr' ? 'Commander' : 'Order Online')}
                    </PrimaryActionButton>
                    
                    <SecondaryActionButton 
                        href={content.navigation?.reserveButtonUrl || `https://widgets.libroreserve.com/WEB/QC017111388322/book${language === 'fr' ? '?lang=fr' : ''}`} 
                        target='_blank' 
                        rel="noreferrer"
                        onClick={handleLinkClick}
                    >
                        {content.navigation?.reserveButtonText || (language === 'fr' ? 'Réserver' : 'Reserve Online')}
                    </SecondaryActionButton>
                </ActionButtons>
            </ActionSection>

            <StyledDivider />

            {/* Language Switch */}
            <LanguageSection>
                <LanguageButtons>
                    <LanguageButton 
                        to={language === 'fr' ? window.location.pathname.replace('/fr', '') || '/' : window.location.pathname}
                        active={language === 'en'}
                        onClick={handleLinkClick}
                    >
                        English
                    </LanguageButton>
                    <LanguageButton 
                        to={`/fr${language === 'en' ? window.location.pathname : window.location.pathname.replace('/fr', '') || '/'}`}
                        active={language === 'fr'}
                        onClick={handleLinkClick}
                    >
                        Français
                    </LanguageButton>
                </LanguageButtons>
            </LanguageSection>

            {/* Contact Info */}
            <ContactSection>
                <ContactInfo>
                    <ContactItem>514.505.4055</ContactItem>
                    <ContactItem>info@avocadosushi.ca</ContactItem>
                </ContactInfo>
            </ContactSection>
        </DrawerContainer>
    );

    return (
        <React.Fragment>
            <MenuButton edge="start" onClick={toggleDrawer(true)} aria-label="menu">
                <MenuIcon />
            </MenuButton>
            <StyledDrawer
                anchor="right"
                open={isOpen}
                onClose={toggleDrawer(false)}
                transitionDuration={300}
            >
                {sideDrawerContent()}
            </StyledDrawer>
        </React.Fragment>
    )
}

// Styled Components matching your website's branding
const MenuButton = styled(IconButton)`
    color: white !important;
    padding: 12px !important;
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.1) !important;
    }
`

const StyledDrawer = styled(Drawer)`
    .MuiDrawer-paper {
        width: 300px;
        background: rgba(85, 85, 85, 0.95);
        backdrop-filter: blur(10px);
        color: white;
        border: none;
    }
    
    @media (max-width: 480px) {
        .MuiDrawer-paper {
            width: 100vw;
        }
    }
`

const DrawerContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
`

const DrawerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const RestaurantName = styled.h2`
    color: #F6F6F6;
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
`

const CloseButton = styled(IconButton)`
    color: #F6F6F6 !important;
    padding: 8px !important;
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.1) !important;
        color: white !important;
    }
    
    transition: all 0.3s ease !important;
`

const NavSection = styled.div`
    padding: 24px 0;
    flex: 1;
`

const ActionSection = styled.div`
    padding: 0 24px 24px 24px;
`

const LanguageSection = styled.div`
    padding: 0 24px 24px 24px;
`

const ContactSection = styled.div`
    margin-top: auto;
    padding: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
`

const NavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const NavItem = styled.li`
    margin-bottom: 4px;
`

const NavLink = styled(Link)`
    color: #F6F6F6;
    text-decoration: none;
    display: block;
    padding: 16px 24px;
    transition: all 0.3s ease;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    
    &:hover {
        background: rgba(255, 255, 255, 0.1);
        color: white;
    }
`

const ActionButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const PrimaryActionButton = styled.a`
    display: block;
    padding: 14px 24px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    text-align: center;
    color: #222222;
    background: linear-gradient(135deg, #FFFFFF 0%, #F6F6F6 100%);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
    min-width: 120px;
    
    &:hover {
        background: linear-gradient(135deg, #F6F6F6 0%, #ADADAD 100%);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        color: #222222;
    }
    
    &:active {
        transform: translateY(0px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
`

const SecondaryActionButton = styled.a`
    display: block;
    padding: 14px 24px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    text-align: center;
    color: #FFFFFF;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    cursor: pointer;
    min-width: 120px;
    
    &:hover {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
        border-color: rgba(255, 255, 255, 0.4);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        color: #FFFFFF;
    }
    
    &:active {
        transform: translateY(0px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
`

const LanguageButtons = styled.div`
    display: flex;
    gap: 8px;
`

const LanguageButton = styled(Link)`
    flex: 1;
    padding: 12px;
    color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.7)'};
    text-decoration: none;
    border-radius: 15px;
    font-weight: ${props => props.active ? '600' : '400'};
    background: ${props => props.active ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
    transition: all 0.3s ease;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    
    &:hover {
        color: white;
        background: rgba(255, 255, 255, 0.1);
    }
`

const ContactInfo = styled.div`
    text-align: center;
`

const ContactItem = styled.div`
    color: #ADADAD;
    font-size: 14px;
    margin-bottom: 8px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
`

const StyledDivider = styled.div`
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 0 24px;
`

export default SideDrawer