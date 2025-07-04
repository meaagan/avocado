import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Triptych from "../components/Triptych"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Container } from '@components/global'
import { useContent } from '../hooks/useContent'

const SecondPage = () => {
  const { content, language } = useContent()
  
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
          <SEO title={content.about?.title || (language === 'fr' ? 'Notre Histoire' : 'Our Story')} />
          <StyledContainer>
            {/* CMS-controlled title */}
            <h1>{content.about?.title || (language === 'fr' ? 'Notre Histore' : 'Our Story')}</h1>
            
            {/* CMS-controlled description */}
            <AboutText>
              {content.about?.description || (
                language === 'fr' 
                  ? "Tout a commencé à l'école secondaire, avec deux amies d'enfance rêvant qu'un jour, ils ouvriraient leur propre petit restaurant au cœur du village historique de Pointe-Claire."
                  : "It all began in high school, with two childhood friends dreaming that one day, they would open their own cozy restaurant in the heart of historic Pointe Claire Village."
              )}
            </AboutText>
            
            <Triptych img1={data.img1.childImageSharp.fluid} img2={data.img2.childImageSharp.fluid} img3={data.img9.childImageSharp.fluid} />
            
            {/* Keep the rest of your existing static content for now */}
            <AboutText>
              {language === 'fr' ? (
                <>
                  Dominique a grandi à Pointe-Claire et rêvait d'ouvrir son propre bistro depuis l'âge de 12 ans. Après avoir vécu en Irlande, à Westmount et sur le Plateau Mont-Royal, Dominique est revenue dans l'Ouest-de-l'Île.
                  <br /><br />
                  « Vivre dans une maison au cœur du village de Pointe-Claire, c'est le charme du confort urbain combiné à la vie de chalet sur le bord du Lac Saint-Louis », se confie-t-elle. « Mon but était de m'établir dans un quartier tranquille où il m'était possible de promener mon chien, prendre un café latte au passage, faire l'épicerie à pied, et trouver cadeaux et jouets originaux dans des petites boutiques ayant pignon sur rue. Le seul ingrédient manquant était un comptoir à sushi… et heureusement je connaissais la meilleure sushi chef! ».
                  <br /><br />
                  Il a fallu beaucoup de travail et de planification pour donner vie à ce rêve.
                </>
              ) : (
                <>
                  Dominique grew up in Pointe Claire and dreamed of opening her own bistro since the age of 12. After living in Ireland, Westmount and Plateau Mont-Royal, Dominique returned to the West Island.
                  <br /><br />
                  "Living in a house in the heart of Pointe-Claire Village is the charm of urban comfort combined with cottage life on the shores of Lake St. Louis," she says. "My goal was to settle in a quiet neighbourhood where I could walk my dog, grab a latte on the way, walk to the grocery store, and find original gifts and toys in small boutiques. The only missing ingredient was a sushi bar... and luckily I knew the best sushi chef!"
                  <br /><br />
                  It took hard work and planning to bring the dream to life.
                </>
              )}
            </AboutText>
            
            <Triptych img1={data.img6.childImageSharp.fluid} img2={data.img7.childImageSharp.fluid} img3={data.img8.childImageSharp.fluid} />
            
            <AboutText>
              {language === 'fr' ? (
                <>
                  « Il y avait de nombreux espaces vacants, mais nous avons su que nous avions trouvé l'emplacement idéal lorsque le propriétaire du 270 Chemin Bord-du-lac nous a dit qu'il avait deux chats nommés Sushi et Sashimi ! », raconte Dominique.
                  <br /><br />
                  Près de dix ans plus tard, Avocado continue d'être le lieu de rendez-vous des gens d'affaires locaux, des familles et même des étrangers qui ont envie de sushis.
                  <br /><br />
                  Avocado sert des sushis traditionnels et des créations qui allient tradition, créativité et produits locaux du Québec, dont nos fameux sushis desserts. Du vin, de la bière et du saké sont également proposés pour accompagner le repas. Il est recommandé de réserver à l'avance.
                </>
              ) : (
                <>
                  "There were many vacant spaces, but we knew we had found the perfect location when the owner of 270 Lakeshore Road told us he had two cats named Sushi and Sashimi!" says Dominique.
                  <br /><br />
                  Almost a decade later, Avocado continues to be the place to be for local businesspeople, families and even out of towners who have a craving for all things sushi.
                  <br /><br />
                  Avocado serves traditional sushi and creations that combine tradition, creativity and local Quebec products, including our famous dessert sushi. Wine, beer and sake are also offered to accompany the meal. Reservations are recommended in advance.
                </>
              )}
            </AboutText>
            
            <Triptych img1={data.img3.childImageSharp.fluid} img2={data.img4.childImageSharp.fluid} img3={data.img5.childImageSharp.fluid} />
          </StyledContainer>
        </Layout>
      )}
    />
  )
}

const StyledContainer = styled(Container)`
  margin-top: 5%;
  padding-top: 100px; /* Add this line to push content below navbar */
  
  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 120px; /* Slightly more padding on mobile if needed */
  }
`

const AboutText = styled.p`
  ${props => props.theme.font_size.small};
`

export default SecondPage