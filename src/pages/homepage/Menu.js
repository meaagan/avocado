// src/pages/homepage/Menu.js
import React from 'react';
import { Container } from '@components/global'
import { useStaticQuery, graphql } from 'gatsby'
import Table from './components/Table'
import Hosomaki from './components/Hosomaki'
import Maki2 from './components/Maki2'
import styled from 'styled-components'
import { useContent } from '../../hooks/useContent'

const Menu = () => {
  const { getContent, language } = useContent('homepage')
  
  // Keep the existing static query as fallback
  const data = useStaticQuery(graphql`
    {
      file(extension: {eq: "pdf"}) {
        publicURL
      }
    }
  `)

  // Get menu URL from CMS or fallback to static file
  const menuUrl = getContent('menu.menuUrl') || data.file?.publicURL
  const menuTitle = getContent('menu.title', language === 'fr' ? 'Menu' : 'Menu')
  const menuDescription = getContent('menu.description')
  const linkText = getContent('menu.linkText', language === 'fr' ? 'Cliquez ici pour voir le menu complet' : 'Click here to see the full menu')

  return (
    <MenuSection id="menu">
      <Container>
        <MenuHeader>
          <h1>{menuTitle}</h1>
          {menuDescription && (
            <MenuDescription>{menuDescription}</MenuDescription>
          )}
        </MenuHeader>
        
        {/* Menu Link */}
        {menuUrl && (
          <MenuLinkContainer>
            <MenuLink href={menuUrl} target="_blank" rel="noopener noreferrer">
              {linkText}
            </MenuLink>
          </MenuLinkContainer>
        )}
        
        {/* Photo Gallery */}
        <MenuGallery>
          <Maki2 />
          <Table />
          <Hosomaki />
        </MenuGallery>
      </Container>
    </MenuSection>
  );
}

// Styled Components
const MenuSection = styled.section`
  padding: 80px 0;
  background-color: ${props => props.theme.color.primary};
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 60px 0;
  }
`

const MenuHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  
  h1 {
    color: ${props => props.theme.color.white.regular};
    ${props => props.theme.font_size.xlarge};
    ${props => props.theme.font_weight.regular};
    margin-bottom: 1rem;
  }
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-bottom: 30px;
    
    h1 {
      ${props => props.theme.font_size.larger};
    }
  }
`

const MenuDescription = styled.p`
  color: ${props => props.theme.color.white.dark};
  ${props => props.theme.font_size.regular};
  ${props => props.theme.font_weight.light};
  margin: 0 auto;
  max-width: 600px;
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    ${props => props.theme.font_size.small};
  }
`

const MenuLinkContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-bottom: 30px;
  }
`

const MenuLink = styled.a`
  display: inline-block;
  padding: 16px 32px;
  background: linear-gradient(135deg, #FFFFFF 0%, #F6F6F6 100%);
  color: #222222;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  ${props => props.theme.font_size.small};
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, #F6F6F6 0%, #ADADAD 100%);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 14px 28px;
    ${props => props.theme.font_size.xsmall};
  }
`

const MenuGallery = styled.div`
  .gallery {
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    @media (max-width: ${props => props.theme.screen.sm}) {
      gap: 20px;
    }
  }
`

export default Menu