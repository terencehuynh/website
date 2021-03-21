import React from 'react'
import { graphql } from 'gatsby'
import { Columns, Column } from 'bumbag'

import Layout from '../components/Layout'
import PageBlock from '../components/Core/PageBlock'
import PageHeader from '../components/Core/PageHeader'
import SectionHeading from '../components/Core/SectionHeading'
import WritingList from '../components/Writing/WritingList'
import BlogCoffee from '../components/Blog/BlogCoffee'

const WritingPage = ({
  data: {
    writings: { edges },
  },
}) => {
  return (
    <Layout pageTitle="Writing">
      <PageHeader heading="Writing" />
      <PageBlock>
        <Columns>
          <Column spread={7}>
            <WritingList title="Portfolio" titleAs="h3" edges={edges} />
          </Column>
          <Column spread={4} spreadOffset={1}>
            <BlogCoffee text="Love what I write? Consider giving a tip..." />
          </Column>
        </Columns>
      </PageBlock>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    writings: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(writing)/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            link
            source
            date(formatString: "MMMM D, YYYY")
            title
          }
        }
      }
    }
  }
`

export default WritingPage
