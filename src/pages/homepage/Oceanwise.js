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
                      Ocean Wise is a conservation program created to educate consumers and businesses on issues related to fisheries and aquaculture practices in order to empower them to make eco-responsible choices when it comes to fish and seafood.
                      <br /><br />
                      We work directly with our partners to ensure they have the most recent scientific information on their seafood, so they can make decisions that respect the health of the oceans. The presence of the Ocean Wise logo on a menu or packaging allows consumers to easily identify eco-responsible choices that preserve the health of our oceans for future generations.
                    </p>
                </OceanText>
            </OceanContainer>
        </Section>
    )
}

const Image = styled.figure`
  width: 30%;
  @media (max-width:'991px') {
    width:30%;
    margin: 0 auto;
  }
`

const OceanText = styled.div`
  width: 75%;
  margin-left: 5%;
  @media (max-width:'991px') {
    width:90%;
    margin: 0 auto;
  }
`

const OceanContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2%;
  @media (max-width:'991px') {
    display:block;
  }
`
const Section = styled.div `
  background-color: #555555;
`

export default Oceanwise