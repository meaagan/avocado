import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Triptych from "../components/Triptych"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Container } from '@components/global'
import Img from 'gatsby-image'

const SecondPage = () => (
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

      }
    `}
    render={data => (
      <Layout>
        <SEO title="About" />
        <StyledContainer>
          <div style={{display:"flex", alignItems:'center'}}>
            <Image><Img fluid={data.img1.childImageSharp.fluid} /></Image>
            <Section>
              <h1>About</h1>
              <AboutText>It all began in high school, with two childhood friends dreaming that one day, they would open their own cozy restaurant in the heart of historic Pointe Claire Village. <br /><br />
And so it was, on a sunny October 5, 2012, that Sylvie Longtin, a veteran sushi chef who plied her trade at the iconic Willows Inn in Hudson for 12 years, and Dominique St-Laurent, a seasoned Pointe Claire businesswoman, would first open Avocado Sushi du Village as co-owners. A dream come true for one of the West Island’s most successful women dream teams. <br /><br />
And these were not just any ordinary women. Sylvie, a resident of Ste. Anne de Bellevue, brought creativity, freshness and style to Avocado, offering some of the most delightful sushi dishes on the island of Montreal. Known for her contagious spontaneity and originality incorporating local and seasonal ingredients, her customers particularly appreciate her seasonings, including her famous sesame dressing and teriyaki sauce. <br /><br />
</AboutText>
            </Section>
          </div>
          <div style={{display:"flex", alignItems:'center'}}>
            <Section>
              <AboutText>
              Dominique grew up in Pointe Claire and dreamed of opening her own bistro since the age of 12. After living in Ireland, Westmount and Plateau Mont-Royal, Dominique returned to the West Island. <br /><br />
"Living in a house in the heart of Pointe-Claire Village is the charm of urban comfort combined with cottage life on the shores of Lake St. Louis," she says. "My goal was to settle in a quiet neighbourhood where I could walk my dog, grab a latte on the way, walk to the grocery store, and find original gifts and toys in small boutiques. The only missing ingredient was a sushi bar... and luckily I knew the best sushi chef!”
<br /><br />
It took hard work and planning to bring the dream to life. A series of light-hearted discussions about uprooting Sylvie from Hudson to Pointe-Claire to bring her irresistible sushi led to the writing of a business plan, the analysis of municipal by-laws and the search for a location. 
                </AboutText>
            </Section>
            <Image><Img fluid={data.img2.childImageSharp.fluid} /></Image>
          </div>
          <Triptych img1={data.img3.childImageSharp.fluid} img2={data.img4.childImageSharp.fluid} img3={data.img5.childImageSharp.fluid} />
          <AboutText>"There were many vacant spaces, but we knew we had found the perfect location when the owner of 270 Lakeshore Road told us he had two cats named Sushi and Sashimi!" says Dominique. A few months later, the lease was signed and Avocado became a reality.
<br /><br />
Almost a decade later, Avocado continues to be the place to be for local businesspeople, families and even out of towners who have a craving for all things sushi (Hollywood actor Ben Stiller dropped by one evening while in Montreal on a movie shoot). Some of the most stylish martini nights have been held at Avocado over the years, attracting 5@7 crowds on a regular basis.
<br /><br />
Avocado serves traditional sushi and creations that combine tradition, creativity and local Quebec products, including our famous dessert sushi. Wine, beer and sake are also offered to accompany the meal. Reservations are recommended in advance.
</AboutText>
          </StyledContainer>
      </Layout>
    )}
  />
)

const Image = styled.figure`
    width: 100%;
`

const StyledContainer = styled(Container)`
margin-top: 5%;
`
const AboutText = styled.p`
  ${props => props.theme.font_size.small};
`

const Section = styled.div`
  width: 75%;
`




export default SecondPage
