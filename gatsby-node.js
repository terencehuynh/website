const { createFilePath } = require('gatsby-source-filesystem')
const BlogScripts = require('./gatsby/blog-scripts')

const POST_SLUG = '/blog'

exports.createPages = async ({ graphql, actions }) => {
  await BlogScripts.createBlogPosts({ graphql, actions })
  await BlogScripts.createBlogPages({ graphql, actions })
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
    // Else, it is a blog post and add the associated metadata
    const value = createFilePath({ node, getNode })
    createNodeField({ name: 'slug', node, value: `${POST_SLUG}${value}` })
    createNodeField({ name: 'format', node, value: 'post' })
  }
}
