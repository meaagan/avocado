import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from 'gatsby-background-image'
import Form from './contact/Form'
import AMap from './contact/AMap'

const ThirdPage = () => (
    <StaticQuery
      query={graphql`
        query {
          background: file(
            sourceInstanceName: { eq: "images" }
            name: { eq: "platter" }
          ) {
            childImageSharp {
              fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }

        }
      `}
      render={data => (
        <Layout>
          <StyledBackground
            Tag="section"
            // className={className}
            fluid={data.background.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          >
            <SEO title="Contact" />
            <div>
              <h1>Contact</h1>
              <Form />
            </div>
            <div>
              <AMap />
            </div>
          </StyledBackground>
        </Layout>
      )}
    />
)

const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  height: 100%;

  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default ThirdPage
