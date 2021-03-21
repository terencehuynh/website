import React from 'react'
import PropTypes from 'prop-types'
import { Heading } from './styled'

const SectionHeading = ({ text, as = 'h2' }) => {
  const SectionHeading = Heading.withComponent(as)
  return (
    <SectionHeading>
      <span>{text}</span>
    </SectionHeading>
  )
}

SectionHeading.propTypes = {
  text: PropTypes.string,
  as: PropTypes.string,
}

export default SectionHeading
