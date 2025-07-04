import React from 'react'
import { Container } from '@components/global'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { useContent } from '../../hooks/useContent'

const Oceanwise = () => {
  const { content, language } = useContent()
  
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
    `
  )

  return (
    <Section>
      <OceanContainer>
        <Image><Img fluid={data.ow.childImageSharp.fluid} /></Image>
        <OceanText>
          <h2>{content.oceanwise?.title || (language === 'fr' ? 'Certification Oceanwise' : 'Certification Oceanwise')}</h2>
          <p>
            {content.oceanwise?.description || (
              language === 'fr'
                ? "Ocean Wise est un programme de conservation créé pour informer les consommateurs et les entreprises sur les enjeux liés aux pêcheries et aux pratiques d'aquaculture afin de les habiliter à faire des choix écoresponsables en matière de poissons et fruits de mer. Nous travaillons directement avec nos partenaires pour nous assurer qu'ils disposent de l'information scientifique la plus récente sur leurs produits de la mer, afin d'ainsi pouvoir prendre des décisions respectueuses de la santé des océans."
                : "Ocean Wise is a conservation program created to educate consumers and businesses on issues related to fisheries and aquaculture practices in order to empower them to make eco-responsible choices when it comes to fish and seafood. We work directly with our partners to ensure they have the most recent scientific information on their seafood, so they can make decisions that respect the health of the oceans."
            )}
          </p>
        </OceanText>
      </OceanContainer>
    </Section>
  )
}

const Image = styled.figure`
  @media (max-width:991px) {
    width:30%;
    margin: 0 auto;
  }
  width: 30%;
`

const OceanText = styled.div`
  @media (max-width:991px) {
    width:90%;
    margin: 0 auto;
  }
  width: 75%;
  margin-left: 5%;
`

const OceanContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2%;

  @media (max-width:991px) {
    flex-direction: column;
  }
`

const Section = styled.div`
  background-color: #555555;
`

export default Oceanwise