/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

/** Intercept node creation
*/
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode })
    console.log(slug)
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}


/** Intercept page creation
*/
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark (
          sort: { fields: [frontmatter___date], order: ASC }
          filter: { frontmatter: { published: { eq: true } } }
        ) {
          totalCount
          edges {
            node {
              fields {
                slug
              }
              html
            	timeToRead
              frontmatter {
                title
                date
                tags
              }
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges
      posts.forEach(({ node }, index) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
            prev: index == 0 ? null : posts[index - 1].node,
            next: index == (posts.length - 1) ? null : posts[index + 1].node,
          },
        })
      })
      resolve()
    })
  })
}
