import React from 'react'
import {
  Card as _Card,
  Button as _Button,
  Heading,
  Paragraph,
  styled,
  space,
  theme,
} from 'fannypack'

import { SerifFonts } from '../../constants'

export const Card = styled(_Card.Card)`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props =>
    props.hasMarginBottom ? space(2, 'major') : '0'}rem
  border-radius: 0;

  a[type='button'] {
    margin-bottom: 4px;
    font-size: 0.875rem;
  }
`

export const Title = styled(Heading)`
  font-size: 1.3125rem;
  line-height: 1.15;
  font-weight: 600;
  margin: 0 0 ${space(2, 'major')}rem;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 1.3125rem;
  }
`

export const Button = ({ href, text, ...props }) => (
  <_Button as="a" palette="primary" href={href} {...props}>
    {text}
  </_Button>
)

export const ImageBox = styled.div`
  margin: -24px -24px 20px;
  border-radius: 4px 4px 0 0;
  width: auto;
`

export const ImageCredit = styled(Paragraph)`
  font-weight: 300;
  font-size: 0.75rem;
  color: #90a4ae;
  margin: 12px 24px 0;
`

export const Description = styled(Paragraph)`
  line-height: 2;
  font-size: 1rem;
  font-family: ${SerifFonts};
  font-weight: 300;
  flex: 1;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 0.875rem;
  }
`

export const Metadata = styled(Paragraph)`
  font-size: 0.875rem;
  line-height: 1.15;
  font-weight: 400;
  letter-spacing; -1px;
  margin: -8px 0 24px;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 0.875rem;
  }
`
