import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const data = useStaticQuery(
        graphql`
          query {
            ow: file(
              sourceInstanceName: { eq: "images" }
              name: { eq: "OW" }
            ) {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
    
          }
        `)

    return (
        <FooterContainer>
                <div style={{fontSize:'2rem'}}>
                  <FontAwesomeIcon icon={faFacebookSquare} />  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <Location>
                    Avocado Sushi du Village<br />
                    270 ch. Bord-du-Lac - Lakeshore <br />
                    Pointe-Claire, QC, H9S 4K9<br />
                    514.505.4055 - info@avocadosushi.ca
                </Location>
                <Image><Img fluid={data.ow.childImageSharp.fluid} /></Image>
        </FooterContainer>
    )
}

const Image = styled.figure` 
  width: 100px;

`
const Location = styled.p`
  text-align: center;
  ${props => props.theme.font_size.small};
`
const FooterContainer = styled.div`
    width: 100%;
    bottom: 0;
    position: static;
    background-color: ${props => props.theme.color.secondary};
    overflow: hidden;
    color: ${props => props.theme.color.white.dark};
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 0 2%;

    @media (max-width: ${props => props.theme.screen.md}) {
      flex-direction: column;
      padding: 10px;
    }
`

export default Footer 