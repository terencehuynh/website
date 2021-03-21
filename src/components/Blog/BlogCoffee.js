import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'bumbag/Icon'
import { styled, css } from 'bumbag/styled'
import { space, palette } from 'bumbag/utils/theme'

import LinkButton from '../LinkButton'

const ArticleCoffee = styled.section`
  background: ${palette('heroBg')};
  color: white;
  border-radius: 8px;
  max-width: 680px;
  padding: ${space(4, 'major')}rem;
  text-align: center;

  h6 {
    margin: ${space(2, 'major')}rem 0;
    font-size: 1.125rem;
    color: white;
  }

  p {
    margin: 0;
  }

  > span svg {
    font-size: 2rem;
    margin-left: 4px;
  }

  ${({ invert, ...props }) =>
    !!invert &&
    css`
      background: white;
      border: 1px solid ${palette('white900')(props)};

      h6 {
        color: ${palette('text')(props)};
      }

      > span svg {
        color: ${palette('primary')(props)};
      }
    `}
`

const BlogCoffee = ({ text, invert }) => {
  return (
    <ArticleCoffee invert={invert}>
      <span>
        <Icon icon="solid-mug-hot" />
        <Icon icon="solid-heart" />
      </span>
      <h6>{text}</h6>
      <LinkButton
        text="Buy me a coffee"
        to="https://www.buymeacoffee.com/terencehuynh"
        invert={!invert}
        palette={invert ? 'primary' : 'heroBg'}
      />
    </ArticleCoffee>
  )
}

BlogCoffee.propTypes = {
  invert: PropTypes.bool,
  text: PropTypes.string,
}

BlogCoffee.defaultProps = {
  invert: false,
  text: 'Like what you have read? Consider buying me a coffee...',
}

export default BlogCoffee
