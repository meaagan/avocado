import React from "react"
import Layout from "@components/Layout"
import SEO from "@components/seo"
import About from '../components/homepage/About'
import Header from '../components/homepage/Header'
import Contact from '../components/homepage/Contact'
import Oceanwise from '../components/homepage/Oceanwise'
import Menu from '../components/homepage/Menu'
import ImageBreak from '../components/homepage/ImageBreak'
import News from '../components/homepage/News'
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