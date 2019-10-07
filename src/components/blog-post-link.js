import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'
const BlogPostLink = ({ post }) => (
  <div className="w-full md:w-1/2 p-2">
    <Link to={post.frontmatter.path} className="border border-gray-400 rounded p-4 h-full block hover:bg-teal-500">
      <h2 className="text-primary font-bold">{post.frontmatter.title}</h2>
      <p className="text-sm italic mb-3">({post.frontmatter.date})</p>
      { post.frontmatter.featuredImage &&
        <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
      }
      { !post.frontmatter.featuredImage &&
        <p className="text-gray-600">{post.excerpt}...</p>
      }
    </Link>
  </div>
)
export default BlogPostLink