import React from "react"
// import { Link } from "gatsby"

import {Layout, SEO, Hero, BlogPostCard} from "components"
import { graphql } from "gatsby"


const IndexPage = ({data}) => {
  console.log(data);
  return(
    <Layout>
      <SEO title="Home" />
      <Hero />
      <main>
        <BlogPostCard />
      </main>
    </Layout>
  )
}
  

export default IndexPage

// Created a PageQuery using GraphQL to extract the blogposts as it's a dynamic query involving many-
//- variables to extract the blogpost data
export const indexPageData = graphql`
  query BlogListQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          type: {eq: "post"}
        }
      }, 
        sort: {
          fields: frontmatter___date, 
          order: DESC
        }) {
      edges {
        node {
          fields {
            readingTime {
              text
            }
          }
          frontmatter {
            date
            title
            image{
              childImageSharp{
                fluid(maxWidth: 200, maxHeight: 200){
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