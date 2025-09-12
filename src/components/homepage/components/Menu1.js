import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const Menu1 = () => (
  <StaticQuery
    query={graphql`
      query {
        img1: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "menu1" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.img1.childImageSharp.fluid} />}
  />
)

export default Menu1
