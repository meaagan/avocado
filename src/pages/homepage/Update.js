import React from 'react'
import Img from 'gatsby-image'
import { Container } from '@components/global'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const Update = () => {
    const data = useStaticQuery(
      graphql`
        query {
          background: file(
            sourceInstanceName: { eq: "images" }
            name: { eq: "vinaigrette" }
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
            <Image><Img fluid={data.background.childImageSharp.fluid} /></Image>
            <div>
              <h3>Vinaigrette Cremeuse aux Sesames Maison</h3>
              <h4>Maintenant disponsible pour achat</h4>
              <p>12.50$</p>
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

export default Update