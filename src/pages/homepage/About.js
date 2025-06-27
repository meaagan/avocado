// src/pages/homepage/About.js
import React from 'react'
import { Container } from '@components/global'
import styled from 'styled-components'
import { useContent } from '../../hooks/useContent'

const About = () => {
  const { content, language } = useContent()
  
  return (
    <StyledContainer>
      <Container>
        <AboutText>
          <h1>{content.hero?.title || (language === 'fr' ? 'Avocado Sushi' : 'Avocado Sushi')}</h1>
          <p>
            {content.hero?.description || (
              language === 'fr' 
                ? "Avocado a vu le jour le 5 octobre 2012. Nous servons des sushis traditionnels et des créations fusionnant tradition, créativité et produits québécois locaux, dont nos fameux sushis desserts. Vin, bière et saké sont également offerts pour accompagner le repas. Il est recommandé de réserver à l'avance."
                : "Avocado sushi was founded on the 5th of October, 2012. We serve traditional sushi and traditional creations fusing tradition, creativity and local Quebec products, including our famous sushi desserts. Wine, beer and sake are also offered to accompany your meal. It is recommended to reserve in advance."
            )}
          </p>
        </AboutText>
      </Container>
    </StyledContainer>
  )
}

// Keep your existing styled components
const AboutText = styled.div`
  text-align: center;
  width: 75%;
  margin: 0 auto;
`

const StyledContainer = styled(Container)`
  background-color: #FFFFFF;
  width: 100%;
  padding: 2%;
  max-width: 100%;

  h1 { color: #262626; }
  p { color: #5c5c5c; }
`

export default About