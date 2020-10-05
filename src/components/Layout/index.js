/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import {ThemeProvider} from "styled-components"
import { GlobalStyles, lightTheme, darkTheme } from "styles/GlobalStyles"


const Layout = ({ children }) => 
  <ThemeProvider>
    <GlobalStyles />
    Layout component
    {children}
  </ThemeProvider>

export default Layout
