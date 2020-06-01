import React from 'react'
import PropTypes from 'prop-types'
import { styled, space, palette, css } from 'fannypack'

import LinkButton from '../LinkButton'

const ArticleCoffee = styled.section`
  background: ${palette('primary')};
  color: white;
  border-radius: 8px;
  max-width: 680px;
  padding: ${space(4, 'major')}rem;
  text-align: center;

  h6 {
    margin: 0 0 ${space(2, 'major')}rem;
    font-size: 1.125rem;
    color: white;
  }

  p {
    margin: 0;
  }

  ${(props) =>
    props.invert &&
    css`
      background: white;
      border: 1px solid ${palette('white900')};

      h6 {
        color: ${palette('text')};
      }
    `}
`

const BlogCoffee = ({ invert }) => {
  return (
    <ArticleCoffee invert={invert}>
      <h6>Like what you have read? Consider buying a coffee...</h6>
      <LinkButton
        text="Buy me a coffee"
        to="https://www.buymeacoffee.com/terencehuynh"
        invert={!invert}
      />
    </ArticleCoffee>
  )
}

BlogCoffee.propTypes = {
  invert: PropTypes.bool,
}

BlogCoffee.defaultProps = {
  invert: false,
}

export default BlogCoffee
