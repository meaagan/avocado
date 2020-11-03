import React from 'react'
import { Container } from '@components/global'
import Carousel from 'react-bootstrap/Carousel';
import BootstrapCarousel from '@components/BootstrapCarousel'
import styled from 'styled-components';
import Img from 'gatsby-image'
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
        <div>
            {/* <BootstrapCarousel> */}
                {/* <Carousel.Item> */}
                    <Image><Img className="d-block w-100" fluid={data.pic1.childImageSharp.fluid} /></Image>
                {/* </Carousel.Item>
                <Carousel.Item>
                    <Image><Img className="d-block w-100" fluid={data.pic2.childImageSharp.fluid} /></Image>
                </Carousel.Item>
                <Carousel.Item>
                    <Image><Img className="d-block w-100" fluid={data.pic3.childImageSharp.fluid} /></Image>
                </Carousel.Item>
            </BootstrapCarousel> */}
            <p style={{padding:'2%', textAlign:'center', width: '75%', margin:'0 auto'}}>Avocado a vu le jour le 5 octobre 2012. Nous servons des sushis traditionnels et des créations fusionnant tradition, créativité et produits québécois locaux, dont nos fameux sushis desserts. Vin, bière et saké sont également offerts pour accompagner le repas. Il est recommandé de réserver à l’avance.</p>
        </div>
    )
}

const Image = styled.figure`
  height:75%;
`

export default About