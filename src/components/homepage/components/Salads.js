import React from "react"

import Triptych from "@components/Triptych"
import { StaticQuery, graphql } from 'gatsby'

const Salads = () => (
  <StaticQuery
    query={graphql`
      query {
        img1: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "salad1" }
        ) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        img2: file(
            sourceInstanceName: { eq: "images" }
            name: { eq: "salad2" }
          ) {
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 500) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          img3: file(
            sourceInstanceName: { eq: "images" }
            name: { eq: "salad3" }
          ) {
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 500) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          

      }
    `}
    render={data => (
        <Triptych img1={data.img1.childImageSharp.fluid} img2={data.img2.childImageSharp.fluid} img3={data.img3.childImageSharp.fluid} />
    )}
  />
)

export default Salads
