import React from "react"
import Layout from "../components/Layout.fr"
import SEO from "../components/seo"
import Triptych from "../components/Triptych"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Container } from '@components/global'

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
        <SEO title="À Propos" />
        <StyledContainer>
              <h1>À Propos</h1>
              <AboutText>
                Tout a commencé à l’école secondaire, avec deux amies d'enfance rêvant qu'un jour, ils ouvriraient leur propre petit restaurant au cœur du village historique de Pointe-Claire.<br /><br/>
                Et c'est ainsi, par un 5 octobre 2012 ensoleillé, que Sylvie Longtin, une chef sushi chevronnée qui exercait son métier à l'emblématique Willows Inn de Hudson pendant 12 ans, et Dominique St-Laurent, une femme d'affaires chevronnée de Pointe-Claire, ont ouvert pour la première fois Avocado Sushi du Village en tant que copropriétaires. Un rêve devenu réalité pour l'une des équipes de femmes les plus prospères de l'Ouest-de-l'Île.<br /><br />
                Et il ne s'agissait pas de femmes comme les autres. Sylvie, une résidente de Sainte-Anne-de-Bellevue, a apporté créativité, fraîcheur et style à Avocado, offrant certains des plats de sushi les plus délicieux de l'île de Montréal. Connue pour sa spontanéité contagieuse et son originalité incorporant des ingrédients locaux et de saison, ses clients apprécient particulièrement ses assaisonnements, dont sa célèbre vinaigrette au sésame et sa sauce teriyaki.
              </AboutText>
              <Triptych img1={data.img1.childImageSharp.fluid} img2={data.img2.childImageSharp.fluid} img3={data.img9.childImageSharp.fluid} />
              <AboutText>
                Dominique a grandi à Pointe-Claire et rêvait d'ouvrir son propre bistro depuis l'âge de 12 ans. Après avoir vécu en Irlande, à Westmount et sur le Plateau Mont-Royal, Dominique est revenue dans l'Ouest-de-l'Île.<br /><br />
                « Vivre dans une maison au cœur du village de Pointe-Claire, c’est le charme du confort urbain combiné à la vie de chalet sur le bord du Lac Saint-Louis », se confie-t-elle. « Mon but était de m’établir dans un quartier tranquille où il m’était possible de promener mon chien, prendre un café latte au passage, faire l’épicerie à pied, et trouver cadeaux et jouets originaux dans des petites boutiques ayant pignon sur rue. Le seul ingrédient manquant était un comptoir à sushi… et heureusement je connaissais la meilleure sushi chef! ». <br /><br />
                Il a fallu beaucoup de travail et de planification pour donner vie à ce rêve. Une série de discussions légères sur l'idée de déraciner Sylvie de Hudson à Pointe-Claire pour lui apporter ses irrésistibles sushis a conduit à la rédaction d'un plan d'affaires, à l'analyse des règlements municipaux et à la recherche d'un emplacement.
              </AboutText>
              <Triptych img1={data.img6.childImageSharp.fluid} img2={data.img7.childImageSharp.fluid} img3={data.img8.childImageSharp.fluid} />
          <AboutText>
            « Il y avait de nombreux espaces vacants, mais nous avons su que nous avions trouvé l'emplacement idéal lorsque le propriétaire du 270 Chemin Bord-du-lac nous a dit qu'il avait deux chats nommés Sushi et Sashimi ! », raconte Dominique. Quelques mois plus tard, le bail était signé et Avocado devenait une réalité.<br /><br />
            Près de dix ans plus tard, Avocado continue d'être le lieu de rendez-vous des gens d'affaires locaux, des familles et même des étrangers qui ont envie de sushis (l'acteur hollywoodien Ben Stiller s'y est arrêté un soir alors qu'il était à Montréal pour un tournage). Certaines des soirées martini les plus élégantes ont eu lieu à l'Avocado au fil des ans, attirant régulièrement des foules de 5@7.
            <br /><br />
            Avocado sert des sushis traditionnels et des créations qui allient tradition, créativité et produits locaux du Québec, dont notre fameux sushi dessert. Du vin, de la bière et du saké sont également proposés pour accompagner le repas. Il est recommandé de réserver à l'avance.
          </AboutText>
          <Triptych img1={data.img3.childImageSharp.fluid} img2={data.img4.childImageSharp.fluid} img3={data.img5.childImageSharp.fluid} />

        </StyledContainer>
      </Layout>
    )}
  />
)

const StyledContainer = styled(Container)`
  margin-top: 5%;
`
const AboutText = styled.p`
  ${props => props.theme.font_size.small};
`

const StyledDiv = styled.div`
  display:'flex';
  alignItems:'center';
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 90%;
    margin: 0 auto;
  }
  `

const Section = styled.div`
  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 10%;
    width: 90%;
    margin: 0 auto;
  }
`

export default SecondPage
