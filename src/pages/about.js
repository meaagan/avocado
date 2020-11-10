import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Triptych from "../components/Triptych"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Container } from '@components/global'
import './about.css'
import Img from 'gatsby-image'

const SecondPage = () => (
  <StaticQuery
    query={graphql`
      query {
        img1: file(
          sourceInstanceName: { eq: "images" }
          name: { eq: "nigiri" }
        ) {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        img2: file(
            sourceInstanceName: { eq: "images" }
            name: { eq: "sushis" }
          ) {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          img3: file(
            sourceInstanceName: { eq: "images" }
            name: { eq: "tartar" }
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
              <h1>A Propos</h1>
              <AboutText>Tout a commencé avec un vieux rêve d’entrepreneur en herbe, aux temps de l’école secondaire. Un vieux rêve partagé par deux amies d’enfance qui est maintenant devenu réalité: au cœur du village de Pointe-Claire, les deux complices ont lancé un chaleureux bistro spécialisé dans la création originale de sushis et de tartares. Sylvie Longtin, copropriétaire et chef sushi, et Dominique St-Laurent, copropriétaire et résidente du village de Pointe-Claire, ont aujourd’hui le plaisir de vous faire découvrir Avocado Sushi du Village.</AboutText>
            </Section>
          </div>
          <div style={{display:"flex", alignItems:'center'}}>
            <Section>
              <AboutText>
                Sylvie Longtin. Sylvie, chef sushi à l’auberge Willow Place Inn a charmé pendant 12 années sa clientèle fidèle du village de Hudson avec la fraîcheur et la créativité de ses sushis. Son rêve d’enfance était de devenir chef et d’opérer son propre restaurant. Elle est reconnue pour sa contagieuse spontanéité et sa grande originalité dans la confection de ses sushis et de ses tartares, offrant quotidiennement de nouvelles créations incorporant des ingrédients locaux et saisonniers. Ses clients apprécient particulièrement ses assaisonnements, dont sa fameuse vinaigrette au sésame et sa sauce teriyaki, maintenant disponibles en boutique.
                <br /><br />Dominique St-Laurent. Dominique a grandi à Pointe-Claire et caressait le rêve d’ouvrir son propre café depuis l’âge de 12 ans. Après avoir vécu en Irlande, dans le village de Westmount et sur le Plateau Mont-Royal, Dominique est revenu vivre dans l’Ouest-de-l’Île. « Vivre dans une maison au cœur du village de Pointe-Claire, c’est le charme du confort urbain combiné à la vie de chalet sur le bord du Lac Saint-Louis », se confie-t-elle. « Mon but était de m’établir dans un quartier tranquille où il m’était possible de promener mon chien, attraper un café latte au passage, faire l’épicerie à pied, et trouver cadeaux et jouets originaux dans des petites boutiques ayant pignon sur rue. Le seul ingrédient manquant était un comptoir à sushi… et heureusement je connaissais le meilleur sushi chef! ».
              </AboutText>
            </Section>
            <Image><Img fluid={data.img2.childImageSharp.fluid} /></Image>
          </div>
          <Triptych img1={data.img1.childImageSharp.fluid} img2={data.img2.childImageSharp.fluid} img3={data.img3.childImageSharp.fluid} />
          <AboutText>Sylvie, la chef, s’appropria rapidement sa nouvelle cuisine, et l’équipe expérimentée du Willow contribua à faire du bistro un succès instantané. Il aurait été impossible d’imposer un succès si rapide - et surtout, de le maintenir - sans la complicité des employés qui ont été extraordinairement dédiés à offrir un service à la clientèle courtois et chaleureux, et sans une cuisine d’une fraîcheur et d’une qualité irréprochables. Les sushis de Sylvie relèvent tout simplement de la magie culinaire, mais l’enchantement provient aussi des baguettes du savoir- faire et du service à la clientèle, manipulées par les doigts de fée de Chantal, Danielle, Cathy, Tess et Charlie. Nous sommes fiers d’appartenir à cette équipe gagnante!</AboutText>
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
