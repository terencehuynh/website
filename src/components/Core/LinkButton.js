import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Icon } from 'fannypack'

const LinkButton = ({ text, to, activeClassName, ...other }) => {
  const internal = /^\/(?!\/)/.test(to)
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        className="line-button"
        activeClassName={activeClassName}
        {...other}
      >
        {text}
        <Icon icon="solid-angle-right" />
      </GatsbyLink>
    )
  }

  return (
    <a href={to} className="line-button" {...other}>
      {text}
      <Icon icon="solid-angle-right" />
    </a>
  )
}

export default LinkButton
