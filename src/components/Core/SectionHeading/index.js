import React from 'react'
import PropTypes from 'prop-types'
import { Heading } from './styled'

const SectionHeading = ({ text, as = 'h2' }) => {
  return (
    <Heading as={as}>
      <span>{text}</span>
    </Heading>
  )
}

SectionHeading.propTypes = {
  text: PropTypes.string,
  as: PropTypes.string,
}

export default SectionHeading
