import React from 'react';
import { Container } from '@components/global'
import { useStaticQuery, graphql } from 'gatsby'
import Table from '../components/Table'
import Hosomaki from '../components/Hosomaki'
import Maki2 from '../components/Maki2'

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      file(extension: {eq: "pdf"}) {
        publicURL
      }
    }
  `)
    return (
      <Container>
          <h1>Menu</h1>
          <p><a href={data.file.publicURL} target="_blank">Cliquez ici pour télécharger le menu complet</a></p>
          <div class="gallery">
          <Maki2 /><Table /><Hosomaki />
        </div>
      </Container>
    );
}

export default Menu