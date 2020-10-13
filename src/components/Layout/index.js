/**
 * Layout component that queries for data
 * with Gatsby"s useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from "react"
import {ThemeProvider} from "styled-components"
// Hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"
// Context
import { ModeContext } from "context/ModeProvider"
// Components
import Header from "components/Header"
// Styles
import { GlobalStyles, lightTheme, darkTheme } from "styles/GlobalStyles"


const Layout = ({ children }) => {
  const data = useMetaDataQuery();
  const [ darkMode ] = useContext(ModeContext);
  return(
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header siteTitle={data.title} />
      {children}
    </ThemeProvider>
    )
  }

export default Layout
