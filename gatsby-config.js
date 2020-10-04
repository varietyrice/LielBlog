module.exports = {
  siteMetadata: {
    title: `Gatsby Tamil Nadu Explorers Blog`,
    description: `A simple super fast blog for Tamil Nadu Explorers, where we will be posting some less seen and ignored beauties of & in Tamil Nadu`,
    author: `Guhaprasaanth Nandagopal`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`, //Can also use '' but `` are usually Gatbsy standard, as it also allows  using JS expression
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,// The plugin that converts the markdown files into web pages
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
          // ...
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}