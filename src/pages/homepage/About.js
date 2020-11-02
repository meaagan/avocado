import React from 'react'
import { Container } from '@components/global'
import Carousel from 'react-bootstrap/Carousel';
// import styled from 'styled-components';
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
                fluid(maxWidth: 3000) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            pic2: file(
                sourceInstanceName: { eq: "images" }
                name: { eq: "sushis" }
              ) {
                childImageSharp {
                  fluid(maxWidth: 3000) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              pic3: file(
                sourceInstanceName: { eq: "images" }
                name: { eq: "tartar" }
              ) {
                childImageSharp {
                  fluid(maxWidth: 3000) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              
    
          }
        `
    )
  
    return (
        <Container>
            {/* <Carousel>
                <Carousel.item>
                    <Img fluid={data.pic1.childImageSharp.fluid} />
                </Carousel.item>
                <Carousel.item>
                    <Img fluid={data.pic2.childImageSharp.fluid} />
                </Carousel.item>
                <Carousel.item>
                    <Img fluid={data.pic3.childImageSharp.fluid} />
                </Carousel.item>
            </Carousel> */}
            <p>Avocado a vu le jour le 5 octobre 2012. Nous servons des sushis traditionnels et des créations fusionnant tradition, créativité et produits québécois locaux, dont nos fameux sushis desserts. Vin, bière et saké sont également offerts pour accompagner le repas. Il est recommandé de réserver à l’avance.</p>
        </Container>
    )
}

export default { About }