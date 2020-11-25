import React from 'react'
import { Container } from '@components/global'
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby'

const About = () => {
    const data = useStaticQuery(
        graphql`
          query {
            pic1: file(
              sourceInstanceName: { eq: "images" }
              name: { eq: "nigiri" }
            ) {
              childImageSharp {
                fluid(maxWidth: 3000, maxHeight: 1000) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            pic2: file(
                sourceInstanceName: { eq: "images" }
                name: { eq: "sushis" }
              ) {
                childImageSharp {
                  fluid(maxWidth: 3000, maxHeight: 1000) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              pic3: file(
                sourceInstanceName: { eq: "images" }
                name: { eq: "tartar" }
              ) {
                childImageSharp {
                  fluid(maxWidth: 3000, maxHeight: 1000) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              
    
          }
        `
    )


  
    return (
        <StyledContainer>
          <Container>
            <AboutText>
              <h1>Avocado Sushi</h1>
              {/* <p><Trans>Avocado sushi was founded on the 5th of October, 2012. We serve traditional sushi and traditional creations fusing tradition, creativity and local Quebec products, including our famous sushi desserts. Wine, beer and sake are also offered to accompany your meal. It is recommended to reserve in advance.</Trans></p> */}
              <p>
                Avocado a vu le jour le 5 octobre 2012. Nous servons des sushis traditionnels et des créations fusionnant tradition, créativité et produits québécois locaux, dont nos fameux sushis desserts. Vin, bière et saké sont également offerts pour accompagner le repas. Il est recommandé de réserver à l’avance.
              </p>
            </AboutText>
            </Container>
        </StyledContainer>
    )
}

const Image = styled.figure`
  height:75%;
`

const AboutText = styled.div`
  text-align: center;
  width: 75%;
  margin: 0 auto;
`
const StyledContainer = styled(Container)`
  background-color:#FFFFFF;
  width: 100%;
  padding: 2%;
  max-width: 100%;
  
  h1{
    color: #262626;
  }
  
  p {
    color: #5c5c5c;
  }
`
export default About