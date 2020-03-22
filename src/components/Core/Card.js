import React from 'react'
import {
  Card as _Card,
  Button,
  Heading,
  Paragraph,
  styled,
  space,
  theme,
} from 'fannypack'

import { SerifFonts } from '../../constants'

const Card = styled(_Card.Card)`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props =>
    props.hasMarginBottom ? space(2, 'major') : '0'}rem
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

const CardButton = ({ href, text, ...props }) => (
  <Button as="a" palette="primary" href={href} {...props}>
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

const CardImageCredit = styled(Paragraph)`
  font-weight: 300;
  font-size: 0.75rem;
  color: #90a4ae;
  margin: 12px 24px 0;
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

const CardMetadata = styled(Paragraph)`
  font-size: 0.875rem;
  line-height: 1.15;
  font-weight: 400;
  letter-spacing; -1px;
  margin: 0 0 24px;
`

export default {
  Card,
  Title: CardTitle,
  Description: CardDescription,
  ImageBox: CardImageBox,
  ImageCredit: CardImageCredit,
  Button: CardButton,
  Metadata: CardMetadata,
}
