import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { Icon } from 'fannypack'

const LinkButton = ({ text, to, activeClassName, invert, ...other }) => {
  const internal = /^\/(?!\/)/.test(to)
  const className = invert ? 'line-button line-button__invert' : 'line-button'
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        className={className}
        activeClassName={activeClassName}
        {...other}
      >
        {text}
        <Icon icon="solid-angle-right" />
      </GatsbyLink>
    )
  }

  return (
    <a href={to} className={className} {...other}>
      {text}
      <Icon icon="solid-angle-right" />
    </a>
  )
}

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  activeClassName: PropTypes.string,
  invert: PropTypes.bool,
}

LinkButton.defaultProps = {
  activeClassName: 'active',
  invert: false,
}

export default LinkButton
