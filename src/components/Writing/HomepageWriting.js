import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { HeadingLevel } from '../Blog/BlogItem'
import SectionHeading from '../Core/SectionHeading'
import Link from '../Core/Link'
import { generateWritings } from './Common'

const WritingList = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
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
  `)

  return (
    <>
      <SectionHeading text="Recent Writing" />
      {edges.map(
        generateWritings({
          headingLevel: HeadingLevel.MEDIUM,
          headingAs: 'h4',
        })
      )}
      <Link text="More Writings" to="/writing/" />
    </>
  )
}

export default WritingList
