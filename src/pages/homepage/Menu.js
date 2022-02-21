import React from 'react';
import { Container } from '@components/global'
import { useStaticQuery, graphql } from 'gatsby'
import MenuTabs from './components/Tabs'

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
          <p><a href={data.file.publicURL} target="_blank">Click here to see the full menu</a></p>
          <MenuTabs />
      </Container>
    );
}
export default Menu