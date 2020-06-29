import React from 'react'
import BlogItem from './BlogItem'

export const HeadingLevel = {
  LARGE: 'LARGE',
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
}

export const getHeadingLevel = ({ headingLevel }) => {
  if (headingLevel === HeadingLevel.MEDIUM) return '1.5rem'
  return '2rem'
}

export const getMobileHeadingLevel = ({ headingLevel }) => {
  if (headingLevel === HeadingLevel.MEDIUM) return '1.3125rem'
  return '1.75rem'
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
      frontmatter: { title, date },
    },
  } = edge
  return (
    <BlogItem
      key={id}
      title={title}
      headingAs={headingAs}
      headingLevel={headingLevel}
      link={slug}
      html={excerpt}
      metadata={`${date}`}
      showPostLink={showPostLink}
    />
  )
}
