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
                <div>
                    <h1>Certification Oceanwise</h1>
                    <p>Lorem Ipsum</p>
                </div>
            </OceanContainer>
        </Section>
    )
}

const Image = styled.figure`
    width: 25%;
`

const OceanContainer = styled(Container)`
    display:flex;
    align-items: center;
    width: 100%;
`
const Section = styled.div `
    background-color: ${props => props.theme.color.secondary};
`

export default Oceanwise