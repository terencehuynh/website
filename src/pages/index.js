import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageBlock from '../components/Core/PageBlock'
import HomepageHero from '../components/Homepage/Hero'
import WritingList from '../components/Writing/WritingList'

const IndexPage = ({ data: { writings } }) => (
  <Layout>
    <HomepageHero />
    <PageBlock>
      <WritingList
        title="Latest Writings"
        showLinkButton={true}
        edges={writings.edges}
      />
    </PageBlock>
  </Layout>
)

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
            date(formatString: "DD MMMM YYYY")
            title
          }
        }
      }
    }
  }
`

export default IndexPage
