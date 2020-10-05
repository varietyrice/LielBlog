/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import {ThemeProvider} from "styled-components"
// Hooks
import { useMetaDataQuery } from 'hooks/useMetaDataQuery'
// Components
import Header from '../Header'
// Styles
import { GlobalStyles, lightTheme, darkTheme } from "styles/GlobalStyles"


const Layout = ({ children }) => {
  const data = useMetaDataQuery();
  console.log(data);
  return(
    <ThemeProvider theme={darkTheme}>
    <GlobalStyles />
    <Header />
    {children}
  </ThemeProvider>
    )
  }

export default Layout
