import React from "react"
import { graphql } from "gatsby"
// Components
import {Layout, SEO, Hero, BlogPostCard} from "components"


const IndexPage = ({data}) => {
  const posts = data.allMarkdownRemark.edges
  console.log(data);
  return(
    <Layout>
      <SEO title="Home" />
      <Hero />
      <main>
        {posts.map(({ node }, i) =>{
          const title = node.frontmatter.title;
          return(
            <BlogPostCard 
              key={i}
              slug="/"
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
export const indexQuery = graphql`
  query blogListQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
