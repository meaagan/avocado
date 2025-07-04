import React from "react"
import Layout from "@components/Layout"
import SEO from "@components/seo"
import About from './homepage/About'
import Header from './homepage/Header'
import Contact from './homepage/Contact'
import Oceanwise from './homepage/Oceanwise'
import Menu from './homepage/Menu'
import ImageBreak from './homepage/ImageBreak'
import News from './homepage/News'
import { ThemeProvider } from 'styled-components'
import theme from '@styles/theme'
import { useContent } from '../hooks/useContent'

const IndexPage = ({ pageContext }) => {
  const { content, language } = useContent('homepage')
  
  return (
   <Layout>
      <ThemeProvider theme={theme}>
      <SEO title="Home" />
      <section id="home">
        <Header />
      </section>
      <section id="news">
        <News />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <ImageBreak />
      </section>
      <section id="oceanwise">
        <Oceanwise />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="contact">
        <Contact />
      </section>
      </ThemeProvider>
    </Layout>
  )
}

export default IndexPage