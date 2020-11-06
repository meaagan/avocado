import React from "react"

import Layout from "@components/layout"
import SEO from "@components/seo"
import About from './homepage/About'
import Header from './homepage/Header'
import News from './homepage/News'
import Oceanwise from './homepage/Oceanwise'
import Instagram from './homepage/Instagram'
import Menu from './homepage/Menu'
import ImageBreak from './homepage/ImageBreak'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    {/* <News /> */}
    <About />
    <ImageBreak />
    <Menu />
    <Oceanwise />
    <Instagram />
  </Layout>
)

export default IndexPage;
