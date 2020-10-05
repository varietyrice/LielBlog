import React from "react"
import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
// Hooks
import { useSiteConfigQuery } from 'hooks/useSiteConfigQuery'

const Header = ({ siteTitle = `` }) => {
  const siteConfig = useSiteConfigQuery();

  return(
    <div>
      <Link to="/">
        <img src={siteConfig.logo.publicURL} alt={siteTitle} />
      </Link>  
    </div>
  )
}

export default Header
