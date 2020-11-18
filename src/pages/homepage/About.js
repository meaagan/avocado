import React from 'react'
import { Container } from '@components/global'
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby'
import { Trans } from 'gatsby-plugin-react-i18next';

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
              <h1><Trans>Avocado Sushi</Trans></h1>
              <p><Trans>Avocado sushi was founded on the 5th of October, 2012. We serve traditional sushi and traditional creations fusing tradition, creativity and local Quebec products, including our famous sushi desserts. Wine, beer and sake are also offered to accompany your meal. It is recommended to reserve in advance.</Trans></p>
            </AboutText>
              {/* <BootstrapCarousel> */}
                  {/* <Carousel.Item> */}
                      {/* <Image><Img className="d-block w-100" fluid={data.pic1.childImageSharp.fluid} /></Image> */}
                  {/* </Carousel.Item>
                  <Carousel.Item>
                      <Image><Img className="d-block w-100" fluid={data.pic2.childImageSharp.fluid} /></Image>
                  </Carousel.Item>
                  <Carousel.Item>
                      <Image><Img className="d-block w-100" fluid={data.pic3.childImageSharp.fluid} /></Image>
                  </Carousel.Item>
              </BootstrapCarousel> */}
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
  background-color: ${props => props.theme.color.white.regular};
  width: 100%;
  padding: 2%;
  max-width: 100%;
  
  h1{
    color: ${props => props.theme.color.black.regular};
  }
  
  p {
    color: ${props => props.theme.color.black.light};
  }
`
export default About