import React from 'react'
import { Container } from '@components/global'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Oceanwise = () => {
    const data = useStaticQuery(
        graphql`
          query {
            ow: file(
              sourceInstanceName: { eq: "images" }
              name: { eq: "OW" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
    
          }
        `)

    return (
        <Section>
            <OceanContainer>
                <Image><Img fluid={data.ow.childImageSharp.fluid} /></Image>
                <OceanText>
                    <h1>Certification Oceanwise</h1>
                    <p>
                      Ocean Wise est un programme de conservation créé pour informer les consommateurs et les entreprises sur les enjeux liés aux pêcheries et aux pratiques d’aquaculture afin de les habiliter à faire des choix écoresponsables en matière de poissons et fruits de mer.
                      <br /><br />
                      Nous travaillons directement avec nos partenaires pour nous assurer qu’ils disposent de l’information scientifique la plus récente sur leurs produits de la mer, afin d’ainsi pouvoir prendre des décisions respectueuses de la santé des océans. La présence du logo Ocean Wise sur un menu ou emballage permet au consommateur de repérer aisément les choix écoresponsables qui préservent la santé de nos océans pour les générations futures.
                    </p>
                </OceanText>
            </OceanContainer>
        </Section>
    )
}

const Image = styled.figure`
  width: 30%;
  @media (max-width: ${props => props.theme.screen.md}) {
    width:30%;
    margin: 0 auto;
  }
`

const OceanText = styled.div`
  width: 75%;
  margin-left: 5%;
  @media (max-width: ${props => props.theme.screen.md}) {
    width:90%;
    margin: 0 auto;
  }
`

const OceanContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2%;
  @media (max-width: ${props => props.theme.screen.md}) {
    display:block;
  }
`
const Section = styled.div `
  background-color: #555555;
`

export default Oceanwise