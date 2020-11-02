import React from "react"
import { Link } from "gatsby"

import Layout from "@components/layout"
import SEO from "@components/seo"
import About from './homepage/About'
import Header from './homepage/Header'
import News from './homepage/News'
import Oceanwise from './homepage/Oceanwise'
import Update from './homepage/Update'
import Instagram from './homepage/Instagram'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <News />
    <About />
    <Oceanwise />
    <Update />
    <Instagram />
  </Layout>
)

export default IndexPage
