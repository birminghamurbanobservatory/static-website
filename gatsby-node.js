/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {

  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const blogPosts = result.data.allMarkdownRemark.edges;
  blogPosts.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        prev: index === 0 ? null : blogPosts[index - 1].node,
        next: index === (blogPosts.length - 1) ? null : blogPosts[index + 1].node
      }, // additional data can be passed via context
    })
  })

}

