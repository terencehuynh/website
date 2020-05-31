import React from 'react'
import PropTypes from 'prop-types'
import { generateWritingItems, HeadingLevel } from '../Blog/Common'
import SectionHeading from '../Core/SectionHeading'
import LinkButton from '../LinkButton'

const WritingList = ({ title, titleAs, edges, showLinkButton }) => {
  return (
    <>
      {title && <SectionHeading text={title} as={titleAs} />}
      {edges.map(
        generateWritingItems({
          headingLevel: HeadingLevel.MEDIUM,
          headingAs: 'h4',
        })
      )}
      {showLinkButton && <LinkButton text="More Writings" to="/writings" />}
    </>
  )
}

WritingList.propTypes = {
  title: PropTypes.string,
  titleAs: PropTypes.string,
  edges: PropTypes.array,
  showLinkButton: PropTypes.bool,
}

WritingList.defaultProps = {
  showLinkButton: false,
}

export default WritingList
