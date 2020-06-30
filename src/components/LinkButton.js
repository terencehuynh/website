import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { Icon, styled, palette, css } from 'fannypack'

const generateStyledLink = (component) => styled(component)`
  text-decoration: none;
  color: ${(props) => props.color};
  transition: all 0.08s ease-in-out;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
  border: 1px solid ${(props) => props.color};
  padding: 5px 7px;
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;

  svg {
    margin-left: 4px;
    transition: all 0.08s ease-in-out;
  }

  &:hover {
    background-color: ${(props) => props.color};
    color: white;

    svg {
      margin-left: 10px;
    }
  }

  ${(props) =>
    props.invert &&
    css`
      color: white;
      border-color: white;

      &:hover {
        color: ${(props) => props.color};
        background-color: white;
      }
    `}
`

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
