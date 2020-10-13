/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require("gatsby-source-filesystem");
const { graphql } = require( 'gatsby' );

// Configure the Node server to add the slug to the markdown files, to enable querying the data using GraphQL
// Create Slug for posts | onCreateNode - avaliable in NodeAPI in Gatsby, it willbe exe during build
exports.onCreateNode = ({ node, getNode, actions }) =>{
  const { createNodeField } = actions;
  if(node.internal.type === `MarkdownRemark`){
    // create the actual path first, before creting node
    const slug = createFilePath({
      node,
      getNode,
      basePath: `content` // will look inside contents folder and create filepath for every markdown files
    })
    // Create the node and insert the slug field
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

// createPages -> create pages for posts, dynamically || async -> for fetching data for pages
exports.createPages = async ({ graphql, actions }) =>{
  const { createPage } = actions;
  const content = await graphql(`
    {
      posts: allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}}}) {
        edges {
          node {
            frontmatter {
              published
            }
            fields {
              slug
            }
          }
        }
      }
      pages: allMarkdownRemark(filter: {frontmatter: {type: {eq: "page"}}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(content)
}
 
// For Absolute Imports
exports.onCreateWebpackConfig = ({  actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}