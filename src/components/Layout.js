import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components';

import './layout.css'

import theme from '@styles/theme.js';
import GlobalStyles from '@styles/GlobalStyles.js';

import Navbar from '@components/navbar/Navbar'
import Footer from '@components/footer/Footer'
import FirebaseCMS from './cms/FirebaseCMS'

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
