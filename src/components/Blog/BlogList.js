import React from 'react'
import PropTypes from 'prop-types'
import { generateBlogItems, HeadingLevel } from '../Blog/Common'
import SectionHeading from '../Core/SectionHeading'

const BlogList = ({ title, titleAs, edges }) => {
  return (
    <>
      {title && <SectionHeading text={title} as={titleAs} />}
      {edges.map(
        generateBlogItems({
          headingLevel: HeadingLevel.LARGE,
          headingAs: 'h3',
          showPostLink: true,
        })
      )}
    </>
  )
}

BlogList.propTypes = {
  title: PropTypes.string,
  titleAs: PropTypes.string,
  edges: PropTypes.array,
  showLinkButton: PropTypes.bool,
}

BlogList.defaultProps = {
  showLinkButton: false,
}

export default BlogList
