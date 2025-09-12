import PropTypes from "prop-types"
// React import removed - not needed with React 17+
import { ThemeProvider } from "styled-components"

import "./layout.css"

import Footer from "@components/footer/Footer"
import Navbar from "@components/navbar/Navbar"
import GlobalStyles from "@styles/GlobalStyles.js"
import theme from "@styles/theme.js"

import FirebaseCMS from "./cms/FirebaseCMS"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FirebaseCMS />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
