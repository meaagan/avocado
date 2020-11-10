import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import { Container } from '@components/global'

import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from 'gatsby-background-image'
import Form from './contact/Form'
import AMap from './contact/AMap'
import Links from './contact/Links'

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
            <ContactContainer>
              <Left>
                <h1>Contact</h1>
                <Links />
                <Form />
              </Left>
              <AMap />
            </ContactContainer>
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

const Left = styled.div`
  width: 50%;
  background-color: white;
  padding: 2%;
  -webkit-border-top-left-radius: 5px;
  -webkit-border-bottom-left-radius: 5px;
  -moz-border-radius-topleft: 5px;
  -moz-border-radius-bottomleft: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  -webkit-box-shadow: 10px 10px 31px -10px rgba(0,0,0,0.9);
  -moz-box-shadow: 10px 10px 31px -10px rgba(0,0,0,0.9);
  box-shadow: 10px 10px 31px -10px rgba(0,0,0,0.9);
  height: 100%;
  
  h1{
    color: black;
    margin: 0;
  }
`

const ContactContainer = styled(Container)`
  display: flex;
  align-items: stretch;
  padding-top: 10%;
  justify-content: center;
  width:100%;
  padding-bottom: 50px;
  height:100%;
  position: relative;
`

export default ThirdPage
