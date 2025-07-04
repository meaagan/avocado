import React from "react"
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const Menu1 = () => (
  <StaticQuery
    query={graphql`
      query {
        img1: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "menu3" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
        <Img fluid={data.img1.childImageSharp.fluid} />
    )}
  />
)

export default Menu1
