import React from 'react'
import { graphql } from 'gatsby'
// Components
import { Layout, Image, SEO } from 'components'

const Post = ({data}) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <Image fluid={post.frontmatter.image.childImageSharp.fluid} />
            <main>
                <h2>{post.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                {/* 
                    This means that if in React if you have to set HTML programmatically or from an external source, 
                    you would have to use dangerouslySetInnerHTML instead of traditional innerHTML in Javascript.

                    In simple words, using dangerouslySetInnerHTML, you can set HTML directly from React
                */}
            </main>
        </Layout>
    )
}

export default Post

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        image {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

