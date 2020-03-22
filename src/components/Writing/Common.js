import React from 'react'
import BlogItem from '../Blog/BlogItem'

export const generateWritings = ({ headingAs, headingLevel }) => edge => {
  const {
    node: {
      id,
      html,
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
