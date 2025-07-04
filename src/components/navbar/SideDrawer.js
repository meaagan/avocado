import * as React from "react"
import {
    Drawer,
    IconButton,
    Menu
  } from '@mui/material';
  import styled from 'styled-components';
import { useState } from "react"
import { Link } from 'gatsby'
import MenuIcon from '@mui/icons-material/Menu';
import { useContent } from '../../hooks/useContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUser, 
  faInfoCircle, 
  faUtensils, 
  faEnvelope,
  faCalendarAlt,
  faLanguage,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

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
        <DrawerContent>
          {/* Header */}
          <DrawerHeader>
            <DrawerTitle>
              {language === 'fr' ? 'Navigation' : 'Navigation'}
            </DrawerTitle>
            <CloseButton onClick={toggleDrawer(anchor, false)}>
              <FontAwesomeIcon icon={faTimes} />
            </CloseButton>
          </DrawerHeader>

          {/* Navigation Items */}
          <NavigationSection>
            {/* Our Story - Always available */}
            <NavItem>
              <StyledLink to={getLocalizedPath('/about')}>
                <NavButton onClick={toggleDrawer(anchor, false)}>
                  <NavIcon>
                    <FontAwesomeIcon icon={faUser} />
                  </NavIcon>
                  <NavText>{language === 'fr' ? 'Notre Histoire' : 'Our Story'}</NavText>
                </NavButton>
              </StyledLink>
            </NavItem>

            {/* Homepage sections - only show when on homepage */}
            {isHomepage && (
                <>
                  <NavItem>
                    <NavButton onClick={() => scrollToSection('about')}>
                      <NavIcon>
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </NavIcon>
                      <NavText>{language === 'fr' ? 'À Propos' : 'About'}</NavText>
                    </NavButton>
                  </NavItem>
                  
                  <NavItem>
                    <NavButton onClick={() => scrollToSection('menu')}>
                      <NavIcon>
                        <FontAwesomeIcon icon={faUtensils} />
                      </NavIcon>
                      <NavText>{language === 'fr' ? 'Menu' : 'Menu'}</NavText>
                    </NavButton>
                  </NavItem>
                  
                  <NavItem>
                    <NavButton onClick={() => scrollToSection('contact')}>
                      <NavIcon>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </NavIcon>
                      <NavText>{language === 'fr' ? 'Contact' : 'Contact'}</NavText>
                    </NavButton>
                  </NavItem>
                </>
            )}

            {/* Contact link for non-homepage, non-about pages */}
            {!isHomepage && !isAboutPage && (
                <NavItem>
                  <StyledLink to={getLocalizedPath('/#contact')}>
                    <NavButton onClick={toggleDrawer(anchor, false)}>
                      <NavIcon>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </NavIcon>
                      <NavText>{language === 'fr' ? 'Contact' : 'Contact'}</NavText>
                    </NavButton>
                  </StyledLink>
                </NavItem>
            )}
          </NavigationSection>

          {/* Action Buttons */}
          <ActionSection>
            <SectionTitle>{language === 'fr' ? 'Commandes' : 'Orders'}</SectionTitle>
            
            <ActionButton 
              href="https://avocadosushi-restaurant.order-online.ai/#/" 
              target="_blank" 
              rel="noreferrer"
              onClick={toggleDrawer(anchor, false)}
              primary
            >
              <FontAwesomeIcon icon={faUtensils} style={{ marginRight: '12px' }} />
              {language === 'fr' ? 'Commander' : 'Order Online'}
            </ActionButton>
            
            <ActionButton 
              href={`https://widgets.libroreserve.com/WEB/QC017111388322/book${language === 'fr' ? '?lang=fr' : ''}`} 
              target="_blank" 
              rel="noreferrer"
              onClick={toggleDrawer(anchor, false)}
            >
              <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '12px' }} />
              {language === 'fr' ? 'Réserver' : 'Reserve Online'}
            </ActionButton>
          </ActionSection>

          {/* Language Switcher */}
          <LanguageSection>
            <SectionTitle>
              <FontAwesomeIcon icon={faLanguage} style={{ marginRight: '8px' }} />
              {language === 'fr' ? 'Langue' : 'Language'}
            </SectionTitle>
            
            <LanguageButtons>
              <LanguageButton 
                to="/"
                onClick={toggleDrawer(anchor, false)}
                active={language === 'en'}
              >
                English
              </LanguageButton>
              <LanguageButton 
                to="/fr"
                onClick={toggleDrawer(anchor, false)}
                active={language === 'fr'}
              >
                Français
              </LanguageButton>
            </LanguageButtons>
          </LanguageSection>
        </DrawerContent>
    );

    return (
        <React.Fragment>
          <MenuToggle edge="start" onClick={toggleDrawer("right", true)} aria-label="menu">
            <MenuIcon />
            <Menu />
          </MenuToggle>
            <StyledDrawer
                anchor="right"
                open={state.right}
                onOpen={toggleDrawer("right", true)}
                onClose={toggleDrawer("right", false)}
            >
              {sideDrawerList("right")}
            </StyledDrawer>
        </React.Fragment>
    )
}

// Styled Components
const MenuToggle = styled(IconButton)`
  color: white !important;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1) !important;
  }
`

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background: linear-gradient(135deg, rgba(34, 34, 34, 0.95) 0%, rgba(85, 85, 85, 0.95) 100%);
    backdrop-filter: blur(20px);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    width: 320px;
    
    @media (max-width: 480px) {
      width: 100vw;
    }
  }
`

const DrawerContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
`

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
`

const DrawerTitle = styled.h3`
  margin: 0;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
  }
`

const NavigationSection = styled.div`
  flex: 1;
  padding: 20px 0;
`

const NavItem = styled.div`
  margin-bottom: 8px;
`

const NavButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  padding: 16px 20px;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-family: inherit;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    padding-left: 25px;
  }
`

const NavIcon = styled.div`
  width: 20px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavText = styled.span`
  font-weight: 500;
`

const ActionSection = styled.div`
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
`

const SectionTitle = styled.h4`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
`

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px 20px;
  margin-bottom: 12px;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  
  ${props => props.primary ? `
    background: linear-gradient(135deg, #FFFFFF 0%, #F6F6F6 100%);
    color: #222222;
    border: 2px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: linear-gradient(135deg, #F6F6F6 0%, #ADADAD 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
    }
  ` : `
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    color: #FFFFFF;
    border: 2px solid rgba(255, 255, 255, 0.2);
    
    &:hover {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
      border-color: rgba(255, 255, 255, 0.4);
      transform: translateY(-2px);
    }
  `}
`

const LanguageSection = styled.div`
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
`

const LanguageButtons = styled.div`
  display: flex;
  gap: 10px;
`

const LanguageButton = styled(Link)`
  flex: 1;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);
  
  ${props => props.active ? `
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border-color: rgba(255, 255, 255, 0.4);
  ` : `
    background: transparent;
    color: rgba(255, 255, 255, 0.7);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border-color: rgba(255, 255, 255, 0.3);
    }
  `}
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

export default SideDrawer