import React from "react"

import Layout from "@components/Layout.fr"
import SEO from "@components/seo"
import About from './homepage/french/About.fr'
import Header from './homepage/Header'
import News from './homepage/french/News.fr'
import Oceanwise from './homepage/french/Oceanwise.fr'
import Menu from './homepage/french/Menu.fr'
import ImageBreak from './homepage/ImageBreak'

import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';

const IndexPage = () => {
  return(
    <Layout>
      <ThemeProvider theme={theme}>
      <SEO title="Accueil" />
      <Header />
      {/* <News /> */}
      <About />
      <ImageBreak />
      <Menu />
      <Oceanwise />
      </ThemeProvider>
    </Layout>
  )
}

export default IndexPage;
