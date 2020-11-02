import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components';

import { useStaticQuery, graphql } from "gatsby"

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

import Navbar from '@components/navbar/Navbar'
import Footer from '@components/footer/Footer'
// import Header from "./header"
// import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar />
          {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
            <main>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
