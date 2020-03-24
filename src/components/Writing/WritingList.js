import React from 'react'
import { generateItems, HeadingLevel } from '../Blog/Common'
import SectionHeading from '../Core/SectionHeading'
import LinkButton from '../Core/LinkButton'

const WritingList = ({ title, titleAs, edges, showLinkButton = false }) => {
  return (
    <>
      {title && <SectionHeading text={title} as={titleAs} />}
      {edges.map(
        generateItems({
          headingLevel: HeadingLevel.MEDIUM,
          headingAs: 'h4',
        })
      )}
      {showLinkButton && <LinkButton text="More Writings" to="/writing/" />}
    </>
  )
}

export default WritingList
