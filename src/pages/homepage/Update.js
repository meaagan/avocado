import React from 'react'
import BackgroundImage from 'gatsby-background-image'
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
              fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
  
        }
      `
    )

        return(
            <StyledBackground
                Tag="update"
                fluid={data.background.childImageSharp.fluid}
            >
                <h2>Vinaigrette Cremeuse aux sesames maison maintenant disponsible pour achat</h2>
            </StyledBackground>
        )
}

const StyledBackground = styled(BackgroundImage)`
    height: 50vh;
`

export default Update