import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

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
          { frontmatter.featuredImage &&
            <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
          }
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

          <Link to="/blog" className="text-link mx-4">
            All
          </Link>

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
`