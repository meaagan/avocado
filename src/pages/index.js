// React import removed - not needed with React 17+
import { ThemeProvider } from "styled-components"

import Layout from "@components/Layout"
import SEO from "@components/seo"
import theme from "@styles/theme"

import About from "../components/homepage/About"
import Contact from "../components/homepage/Contact"
import Header from "../components/homepage/Header"
import ImageBreak from "../components/homepage/ImageBreak"
import Menu from "../components/homepage/Menu"
import News from "../components/homepage/News"
import Oceanwise from "../components/homepage/Oceanwise"
import { useContent } from "../hooks/useContent"

const IndexPage = ({ pageContext }) => {
  const { content, language } = useContent("homepage")

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
