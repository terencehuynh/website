import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { HeadingLevel } from '../Blog/BlogItem'
import { generateWritings } from './Common'

const WritingList = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(writing)/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
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
      {edges.map(
        generateWritings({
          headingLevel: HeadingLevel.MEDIUM,
          headingAs: 'h4',
        })
      )}
    </>
  )
}

export default WritingList
