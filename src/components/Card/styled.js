import React from 'react'
import {
  Card as _Card,
  Button as _Button,
  Heading,
  Paragraph,
  styled,
  space,
} from 'bumbag'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 4px 0px,
    rgba(0, 0, 0, 0.02) 0px 0px 2px 1px;
  padding: 24px;

  a[type='button'] {
    margin-bottom: 4px;
    font-size: 0.875rem;
  }
`

export const Title = styled.div`
  font-size: 1.3125rem;
  line-height: 1.15;
  font-weight: 600;
  margin: 0 0 ${space(2, 'major')}rem;
`

export const Button = ({ href, text, ...props }) => (
  <_Button use="a" palette="primary" href={href} size="small" {...props}>
    {text}
  </_Button>
)

export const ImageBox = styled.div`
  margin: -24px -24px 20px;
  border-radius: 4px 4px 0 0;
  width: auto;
  overflow: hidden;
`

export const ImageCredit = styled.p`
  font-weight: 300;
  font-size: 0.75rem;
  color: #90a4ae;
  margin: 12px 24px 0;
`

export const Description = styled.p`
  line-height: 2;
  font-size: 0.875rem;
  font-family: var(--serif-font);
  font-weight: 300;
  flex: 1;
  margin: 0 0 24px;
`

export const Metadata = styled.p`
  font-size: 0.875rem;
  line-height: 1.15;
  font-weight: 400;
  letter-spacing; -1px;
  margin: -8px 0 24px;
`
