import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { useContent } from '../hooks/useContent'

const LanguageSwitcher = () => {
  const { language } = useContent()
  
  const getCurrentPath = () => {
    if (typeof window === 'undefined') return '/'
    const path = window.location.pathname
    return path.startsWith('/fr') ? path.replace('/fr', '') || '/' : path
  }

  const currentPath = getCurrentPath()
  const englishPath = currentPath
  const frenchPath = `/fr${currentPath}`

  return (
    <LanguageContainer>
      <LanguageLink 
        to={englishPath} 
        active={language === 'en'}
      >
        English
      </LanguageLink>
      <LanguageDivider>|</LanguageDivider>
      <LanguageLink 
        to={frenchPath} 
        active={language === 'fr'}
      >
        Français
      </LanguageLink>
    </LanguageContainer>
  )
}

const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 1rem;
`

const LanguageLink = styled(Link)`
  color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.7)'};
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 15px;
  font-weight: ${props => props.active ? '600' : '400'};
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
  }
`

const LanguageDivider = styled.span`
  color: rgba(255, 255, 255, 0.5);
`

export default LanguageSwitcher