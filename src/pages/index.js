import * as React from "react"
import { Link, graphql } from "gatsby"
import BlogLayout from "../components/blog-layout"
import * as blogStyles from "../blog.module.css"

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <BlogLayout headerTitle={siteTitle}>      
    </BlogLayout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`