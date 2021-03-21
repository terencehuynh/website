/* eslint-disable react/display-name */
import React from 'react'
import BlogItem from './BlogItem'

export const HeadingLevel = {
  LARGE: 'LARGE',
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
}

export const generateWritingItems = ({ headingAs, headingLevel }) => (edge) => {
  const {
    node: {
      id,
      frontmatter: { title, link, date, source },
    },
  } = edge
  return (
    <BlogItem
      key={id}
      title={title}
      headingAs={headingAs}
      headingLevel={headingLevel}
      link={link}
      metadata={`${date} · ${source}`}
    />
  )
}

export const generateBlogItems = ({
  headingAs,
  headingLevel,
  showPostLink,
}) => (edge) => {
  const {
    node: {
      id,
      excerpt,
      fields: { slug },
      frontmatter: { title, summary, date },
    },
  } = edge
  return (
    <BlogItem
      key={id}
      title={title}
      headingAs={headingAs}
      headingLevel={headingLevel}
      link={slug}
      html={summary || excerpt}
      metadata={`${date}`}
      showPostLink={showPostLink}
    />
  )
}
