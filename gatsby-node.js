const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const POST_SLUG_PREFIX = '/post'

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fields: { format: { eq: "post" } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    // If it contains a link and source, it's a writing reference and not a
    // blog post to render
    if (node.frontmatter.link && node.frontmatter.source) {
      createNodeField({ name: 'format', node, value: 'link' })
      return
    }

    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `${POST_SLUG_PREFIX}${value}`,
    })
    createNodeField({ name: 'format', node, value: 'post' })
  }
}
