import React from 'react'
import { styled, space } from 'fannypack'

import LinkButton from '../LinkButton'

const ArticleCoffee = styled.section`
  background: #004fc9;
  color: white;
  border-radius: 8px;
  max-width: 680px;
  margin: ${space(3, 'major')}rem auto 0;
  padding: ${space(4, 'major')}rem;
  text-align: center;

  h6 {
    margin: 0 0 ${space(1, 'major')}rem;
    font-size: 1.125rem;
    color: white;
  }

  p {
    margin: 0;
  }
`

const BlogCoffee = () => {
  return (
    <ArticleCoffee>
      <h6>Like what you have read? Consider buying a coffee...</h6>
      <LinkButton
        text="Buy me a coffee"
        to="https://www.buymeacoffee.com/terencehuynh"
        invert={true}
      />
    </ArticleCoffee>
  )
}

export default BlogCoffee
