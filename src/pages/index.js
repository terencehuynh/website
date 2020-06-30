import React from 'react'
import PropTypes from 'prop-types'
import { Columns, Column } from 'fannypack'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageBlock from '../components/Core/PageBlock'
import HomepageHero from '../components/Homepage/Hero'
import WritingList from '../components/Writing/WritingList'
import BlogList from '../components/Blog/BlogList'

const IndexPage = ({ data: { writings, blogs } }) => (
  <Layout>
    <HomepageHero />
    <PageBlock>
      <Columns>
        <Column spread={7}>
          <BlogList title="Latest Blog Posts" edges={blogs.edges} />
        </Column>
        <Column spread={4} spreadOffset={1}>
          <WritingList
            title="Latest Writings"
            showLinkButton={true}
            edges={writings.edges}
          />
        </Column>
      </Columns>
    </PageBlock>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.shape({
    writings: PropTypes.shape({
      edges: PropTypes.array,
    }),
    blogs: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query {
    writings: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(writing)/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            link
            source
            date(formatString: "MMMM Do, YYYY")
            title
          }
        }
      }
    }
    blogs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(format: PLAIN, pruneLength: 200, truncate: false)
          frontmatter {
            date(formatString: "MMMM Do, YYYY")
            title
            summary
          }
        }
      }
    }
  }
`

export default IndexPage
