const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

// Configure the Node server to add the slug to the markdown files, to enable querying the data using GraphQL
// Create Slug for posts | onCreateNode - avaliable in NodeAPI in Gatsby, it willbe exe during build

// First create the slug for posts and pages
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
        // create the actual path first, before creating node
    const slug = createFilePath({
      node,
      getNode,
      basePath: `content`,// will look inside contents folder and create filepath for every markdown files
    })
    // Create the node and insert the slug field
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
// createPages -> create pages for posts, dynamically || async -> for fetching data for pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const content = await graphql(`
    {
      posts: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "post" } } }
      ) {
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
  // Do nothing if there is any error in data fetch
  if (content.error) return
  // Collect all the data
  const allPosts = content.data.posts.edges
  const allPages = content.data.pages.edges

  // Loop through all the posts and pages, to create separate pages 
  allPosts.forEach(({ node }) => {
    if (node.frontmatter.published) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/Post.js`),
        context: { // Sending data to the page context
          // Data passed in here, is available in page query as variables
          slug: node.fields.slug,
        },
      })
    }
  })

  // Create the individual pages
  allPages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/Page.js`),
      context: {
       // Data passed in here, is available in page query as variables
        slug: node.fields.slug,
      },
    })
    
  })
  
  // Create the Archive Pages
  const postsPerPage = 5;
  const numPages = Math.ceil(allPosts.length / postsPerPage);
  Array.from({ length: numPages }) //Creating an empty array as per the available number of posts
    .forEach((_,i)=>{ // _ => 1st value won't be used
      createPage({
        path: i === 0 ? `/` : `/${i+1}` ,
        component: path.resolve(`./src/templates/Home.js`),
        context: {
          limit: postsPerPage, // Pagination
          skip: i * postsPerPage, // For informing GraphQL query that how many posts to skip
          numPages, // Number of pages after pagination
          currentPage: i + 1, // i starts at 0 => Home page
        }
      })
    })
}


// For absolute imports
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
