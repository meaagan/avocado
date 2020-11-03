import React from "react"
import { Link } from "gatsby"

import Layout from "@components/layout"
import SEO from "@components/seo"
import About from './homepage/About'
import Header from './homepage/Header'
import News from './homepage/News'
import Oceanwise from './homepage/Oceanwise'
import Press from './homepage/Press'
import Instagram from './homepage/Instagram'
import Menu from './homepage/Menu'

const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    <Header />
    {/* <News /> */}
    <About />
    <Menu />
    <Oceanwise />
    {/* <Press /> */}
    <Instagram />
  </Layout>
)

export default IndexPage;
