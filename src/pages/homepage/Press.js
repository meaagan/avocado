import React from 'react'
import Img from 'gatsby-image'
import { Container } from '@components/global'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const Press = () => {
    const data = useStaticQuery(
      graphql`
        query {
          pic1: file(
            sourceInstanceName: { eq: "images" }
            name: { eq: "tartar" }
          ) {
            childImageSharp {
              fluid(maxWidth: 700, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
  
        }
      `
    )

        return(
          <StyledContainer>
            <Image><Img fluid={data.pic1.childImageSharp.fluid} /></Image>
            <div>
              <h2>Press</h2>
              <ul>
                <li><a href="http://canadanightlife.ca/2013/12/5-best-restaurants-worth-the-drive-out-of-the-city/">5 Best Restaurants Worth The Drive Out Of The City</a></li>
                <li><a href="https://www.mtlblog.com/best-of-mtl/29-bucketlist-montreal-restaurants-you-need-to-try-if-you-havent-already">29 Bucketlist Montreal Restaurants You Need To Try If You Haven't Already</a></li>
              </ul>
            </div>
          </StyledContainer>
        )
}

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Image = styled.figure`
  width:100%;
  height:100%;
  margin-right: 5%;
`

export default Press