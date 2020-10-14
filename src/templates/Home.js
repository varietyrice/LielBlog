import React from "react"
import { graphql } from "gatsby"
// Components
import {Layout, SEO, Hero, BlogPostCard, PageNavigation} from "components"


const IndexPage = ({ data, pageContext }) => { //pageContext is a default prop, available on all the pages
  const posts = data.allMarkdownRemark.edges
  console.log(data);
  return(
    <Layout>
      <SEO title="Home" />
      <Hero />
      <main>
        <PageNavigation
            currentPage={pageContext.currentPage}
            numPages={pageContext.numPages}
        />
        {posts.map(({ node }, i) =>{
          const title = node.frontmatter.title || node.fields.slug
          return(
            <BlogPostCard 
              key={node.fields.slug}
              slug={node.fields.slug}
              title={title}
              date={node.frontmatter.date}
              readingTime={node.fields.readingTime.text}
              excerpt={node.excerpt}
              image={node.frontmatter.image.childImageSharp.fluid}
            />
          )
        })}
      </main>
    </Layout>
  )
}
  

export default IndexPage

// Created a PageQuery using GraphQL to extract the blogposts as it's a dynamic query involving many-
//- variables to extract the blogpost data

// Conveting the StaticQuery to a PageQuery, to use the variables, provided to the page context, which
//- are available to be used in the PageQuery, to filter out the published posts, for displaying
export const indexQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      filter: { frontmatter: { type: { eq: "post" }, published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date
            title
            image {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
