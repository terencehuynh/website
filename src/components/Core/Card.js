import React from 'react'
import {
  Card as _Card,
  Button,
  Heading,
  Paragraph,
  styled,
  theme,
} from 'fannypack'

import { SerifFonts } from '../../constants'

const Card = styled(_Card.Card)`
  display: flex;
  flex-direction: column;
  border-radius: 0;

  a[type='button'] {
    margin-bottom: 4px;
    font-size: 0.875rem;
  }

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    padding: 16px;
  }
`

const CardTitle = styled(Heading)`
  font-size: 1.3125rem;
  line-height: 1.15;
  font-weight: 600;
  margin: 0 0 12px;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    font-size: 1rem;
  }
`

const CardButton = ({ href, text }) => (
  <Button as="a" href={href}>
    {text}
  </Button>
)

const CardImageBox = styled.div`
  margin: -24px -24px 20px;
  border-radius: 4px 4px 0 0;
  width: auto;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    margin: -16px -16px 16px;
  }
`

const CardDescription = styled(Paragraph)`
  line-height: 2;
  font-size: 1rem;
  font-family: ${SerifFonts};
  font-weight: 300;
  flex: 1;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    font-size: 0.875rem;
  }
`

export default {
  Card,
  Title: CardTitle,
  Description: CardDescription,
  ImageBox: CardImageBox,
  Button: CardButton,
}
