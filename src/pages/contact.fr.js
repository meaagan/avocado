import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container } from '@components/global'

import styled from 'styled-components'
import Layout from "../components/Layout.fr"
import SEO from "../components/seo"
import BackgroundImage from 'gatsby-background-image'
import Form from './contact/Form.fr'
import AMap from './contact/AMap'
import Links from './contact/Links'

const Contact = () => (
    <StaticQuery
      query={graphql`
        query {
          background: file(
            sourceInstanceName: { eq: "images" }
            name: { eq: "bg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 2500) {
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
  background-color: white;
  padding: 2%;
  -webkit-border-top-left-radius: 5px;
  -webkit-border-top-right-radius: 5px;
  -moz-border-radius-topleft: 5px;
  -moz-border-radius-topright: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  -webkit-box-shadow: 10px 10px 31px -10px rgba(0,0,0,0.9);
  -moz-box-shadow: 10px 10px 31px -10px rgba(0,0,0,0.9);
  box-shadow: 10px 10px 31px -10px rgba(0,0,0,0.9);
  
  h1 {
    color: black;
    width: 200px;
    margin: 0 auto;
  }
`

const ContactContainer = styled(Container)`
  margin: 0 auto;
  padding-top: 10%;
  width:50%;
  padding-bottom: 50px;
  height:100%;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 20%;
    width: 90%;
    margin: 0 auto;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding-top: 30%;
  }
`

export default Contact
