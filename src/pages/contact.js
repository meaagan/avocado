import React from "react"
import { Container } from '@components/global'
import styled from 'styled-components'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Img from 'gatsby-image';
import AMap from './contact/AMap'
import Links from './contact/Links'
import { useContent } from '../hooks/useContent'

import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Contact = () => {
  const { content, language } = useContent()
  const data = useStaticQuery(
    graphql`
      query {
        background: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "bg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

      }
    `)

  return (
    <Layout>
      <BackgroundWrapper>
        <StyledBackground Tag="section"
        fluid={data.background.childImageSharp.fluid} />
        <ContentOverlay>
          <SEO title={language === 'fr' ? 'Contact' : 'Contact'} />
          <ContactContainer>
            <Left>
              <h1 style={{textAlign:'center'}}>
                {language === 'fr' ? 'Contact' : 'Contact'}
              </h1>
              <Links />
            </Left>
            <AMap />
          </ContactContainer>
        </ContentOverlay>
      </BackgroundWrapper>
    </Layout>
  )
}

const BackgroundWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`

const StyledBackground = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const ContentOverlay = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
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
