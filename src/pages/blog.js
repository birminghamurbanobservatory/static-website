import React from "react"
import { Link, graphql } from "gatsby"
import BlogPostLink from "../components/blog-post-link"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },  
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <BlogPostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="container my-2">
        <h1 className="text-primary text-center">Our Blog Posts</h1>
        <div className="flex flex-wrap">{Posts}</ div>
        <p>Go back to the <Link to="/" className="text-link">homepage</Link></p>
      </div>
      
    </Layout>
  )

}
export default BlogPage


export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }  
          }
        }
      }
    }
  }
`
