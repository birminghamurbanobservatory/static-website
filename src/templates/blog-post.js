import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext
}) {

  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const {next, prev} = pageContext;

  return (
    <Layout>
      <div className="blog-post-container container my-2">
        <div className="blog-post">
          <h1 className="text-primary text-center">{frontmatter.title}</h1>
          <p className="text-center">(Posted: {frontmatter.date})</p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

        <div className="text-center my-2">
          {/* Add prev link if prev is truthy */}
          { prev &&
            <Link to={prev.frontmatter.path} className="text-link mx-4">
              Newer
            </Link>
          }       

          {/* Add next link if next is truthy */}
          { next &&
            <Link to={next.frontmatter.path} className="text-link mx-4">
              Older
            </Link>
          }
        </div>

      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`