import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { Icon } from 'bumbag'
import { generateStyledLink } from './styled'

const LinkButton = ({ text, to, activeClassName, invert, ...other }) => {
  const internal = /^\/(?!\/)/.test(to)
  // Use Gatsby Link for internal links, and <a> for others
  const component = internal ? GatsbyLink : 'a'
  const StyledLink = generateStyledLink(component)
  const props = { invert, ...other }

  if (internal) {
    Object.assign(props, { to, activeClassName })
  } else {
    Object.assign(props, { href: to })
  }

  return (
    <StyledLink {...props}>
      {text} <Icon icon="solid-angle-right" />
    </StyledLink>
  )
}

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  activeClassName: PropTypes.string,
  color: PropTypes.string,
  invert: PropTypes.bool,
}

LinkButton.defaultProps = {
  activeClassName: 'active',
  invert: false,
  color: palette('primary'),
}

export default LinkButton
