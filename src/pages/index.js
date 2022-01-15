import React from "react"

import Layout from "@components/Layout"
import SEO from "@components/seo"
import About from './homepage/About'
import Header from './homepage/Header'
import News from './homepage/News'
import Oceanwise from './homepage/Oceanwise'
import Menu from './homepage/Menu'
import ImageBreak from './homepage/ImageBreak'

import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';

const IndexPage = () => {
  return(
    <Layout>
      <ThemeProvider theme={theme}>
      <SEO title="Home" />
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
