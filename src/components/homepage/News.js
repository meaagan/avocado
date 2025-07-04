import React from 'react'
import { Container } from '@components/global'
import styled from 'styled-components'
import { useContent } from '../../hooks/useContent'

const News = () => {
  const { content, language } = useContent()
  
  return (
    <StyledContainer style={{textAlign:'center'}}>
      <h2>{content.announcements?.title || (language === 'fr' ? 'Annonces' : 'Announcements')}</h2>
      <h3>{content.announcements?.content || (
        language === 'fr' 
          ? "Nous avons apporté des modifications à notre tarification. Veuillez vous référer à notre nouveau menu ci-dessous."
          : "We have made changes to our pricing. Please refer to our new menu below."
      )}</h3>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  padding: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
`

export default News