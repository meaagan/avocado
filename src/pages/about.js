import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Triptych from "../components/Triptych"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Container } from '@components/global'
import { useContent } from '../hooks/useContent'

const AboutPage = () => {
  const { content, loading, getContent } = useContent('about')
  
  if (loading) {
    return (
      <Layout>
        <LoadingContainer>
          <LoadingText>Loading...</LoadingText>
        </LoadingContainer>
      </Layout>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          img1: file(
            sourceInstanceName: { eq: "images" }
            name: { eq: "about_5" }
          ) {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          img2: file(
              sourceInstanceName: { eq: "images" }
              name: { eq: "about_1" }
            ) {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          img3: file(
            sourceInstanceName: { eq: "images" }
            name: { eq: "about_6" }
          ) {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          img4: file(
            sourceInstanceName: { eq: "images" }
            name: { eq: "about_3" }
          ) {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          img5: file(
            sourceInstanceName: { eq: "images" }
            name: { eq: "about_4" }
          ) {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          img6: file(
            sourceInstanceName: { eq: "images" }
            name: { eq: "about_8" }
          ) {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          img7: file(
            sourceInstanceName: { eq: "images" }
            name: { eq: "about_9" }
          ) {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          img8: file(
            sourceInstanceName: { eq: "images" }
            name: { eq: "about_10" }
          ) {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          img9: file(
            sourceInstanceName: { eq: "images" }
            name: { eq: "about_2" }
          ) {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      `}
      
      render={data => (
        <Layout>
          <SEO 
            title={getContent('seo.metaTitle', 'Our Story - Avocado Sushi du Village')} 
            description={getContent('seo.metaDescription', 'Learn about the story behind Avocado Sushi du Village')}
          />
          <StyledContainer>
            {/* Hero Section - Fully CMS Controlled */}
            <HeroSection>
              <h1>{getContent('hero.title', 'Our Story')}</h1>
              {getContent('hero.subtitle') && (
                <Subtitle>{getContent('hero.subtitle')}</Subtitle>
              )}
            </HeroSection>
            
            {/* Story Introduction - CMS Controlled */}
            <StorySection>
              <AboutText>
                {getContent('story.intro', 'It all began in high school, with two childhood friends dreaming that one day, they would open their own cozy restaurant in the heart of historic Pointe Claire Village.')}
              </AboutText>
            </StorySection>
            
            <Triptych 
              img1={data.img1.childImageSharp.fluid} 
              img2={data.img2.childImageSharp.fluid} 
              img3={data.img9.childImageSharp.fluid} 
            />
            
            {/* Dominique's Story - CMS Controlled */}
            <StorySection>
              <AboutText>
                {getContent('story.dominique_story', 'Dominique grew up in Pointe Claire and dreamed of opening her own bistro since the age of 12...')}
              </AboutText>
            </StorySection>
            
            <Triptych 
              img1={data.img6.childImageSharp.fluid} 
              img2={data.img7.childImageSharp.fluid} 
              img3={data.img8.childImageSharp.fluid} 
            />
            
            {/* Location Story - CMS Controlled */}
            <StorySection>
              <AboutText>
                {getContent('story.location_story', 'There were many vacant spaces, but we knew we had found the perfect location...')}
              </AboutText>
            </StorySection>
            
            {/* Conclusion - CMS Controlled */}
            <StorySection>
              <AboutText>
                {getContent('story.conclusion', 'Almost a decade later, Avocado continues to be the place to be for local businesspeople, families and even out of towners who have a craving for all things sushi.')}
              </AboutText>
            </StorySection>
            
            <Triptych 
              img1={data.img3.childImageSharp.fluid} 
              img2={data.img4.childImageSharp.fluid} 
              img3={data.img5.childImageSharp.fluid} 
            />
          </StyledContainer>
        </Layout>
      )}
    />
  )
}

const LoadingContainer = styled(Container)`
  margin-top: 5%;
  padding-top: 100px;
  text-align: center;
`

const LoadingText = styled.div`
  font-size: 1.2rem;
  color: ${props => props.theme.color.white.regular};
`

const StyledContainer = styled(Container)`
  margin-top: 5%;
  padding-top: 100px;
  
  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 120px;
  }
`

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    color: ${props => props.theme.color.white.regular};
    margin-bottom: 1rem;
  }
`

const Subtitle = styled.h2`
  color: ${props => props.theme.color.white.dark};
  font-weight: 300;
  font-size: 1.2rem;
  margin-bottom: 0;
`

const StorySection = styled.div`
  margin: 2rem 0;
`

const AboutText = styled.p`
  ${props => props.theme.font_size.small};
  line-height: 1.8;
  color: ${props => props.theme.color.white.dark};
  text-align: justify;
  white-space: pre-line; /* This allows line breaks from CMS content */
  
  @media (max-width: ${props => props.theme.screen.sm}) {
    text-align: left;
  }
`

export default AboutPage