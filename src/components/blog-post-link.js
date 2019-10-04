import React from "react"
import { Link } from "gatsby"
const BlogPostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path} className="text-blue-600 underline">
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)
export default BlogPostLink