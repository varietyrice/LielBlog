import React from "react"
// import { Link } from "gatsby"

import {Layout, SEO, Hero, BlogPostCard} from "components"


const IndexPage = () => 
  <Layout>
    <SEO title="Home" />
    <Hero />
    <main>
      <BlogPostCard />
    </main>
  </Layout>

export default IndexPage
