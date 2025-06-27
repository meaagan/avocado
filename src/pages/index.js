// src/pages/index.js
import React from "react"
import Layout from "@components/Layout"
import SEO from "@components/seo"
import About from './homepage/About'
import Header from './homepage/Header'
import News from './homepage/News'
import Oceanwise from './homepage/Oceanwise'
import Menu from './homepage/Menu'
import ImageBreak from './homepage/ImageBreak'
import { ThemeProvider } from 'styled-components'
import theme from '@styles/theme'
import { useContent } from '../hooks/useContent'

const IndexPage = ({ pageContext }) => {
  const { content, language } = useContent()
  
  return (
    <Layout pageContext={pageContext}>
      <ThemeProvider theme={theme}>
        <SEO title={language === 'fr' ? 'Accueil' : 'Home'} />
        <Header />
        <News />
        <About />
        <ImageBreak />
        <Oceanwise />
        <Menu />
      </ThemeProvider>
    </Layout>
  )
}

export default IndexPage