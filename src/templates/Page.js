import React from 'react'
import { graphql } from 'gatsby'
// Components
import { Layout, Image, SEO } from 'components'

const Page = ({data}) => {
    const page = data.markdownRemark;
    return (
        <Layout>
            <SEO title={page.frontmatter.title} />
            <Image fluid={page.frontmatter.image.childImageSharp.fluid} />
            <main>
                <h2>{page.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: page.html }} />
                {/* 
                    This means that if in React if you have to set HTML programmatically or from an external source, 
                    you would have to use dangerouslySetInnerHTML instead of traditional innerHTML in Javascript.

                    In simple words, using dangerouslySetInnerHTML, you can set HTML directly from React
                */}
            </main>
        </Layout>
    )
}

export default Page

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
