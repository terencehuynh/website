import React from 'react'
import {
  Grid,
  Card as _Card,
  Heading,
  Paragraph,
  Button,
  styled,
} from 'fannypack'
import { theme } from 'styled-tools'

import { SerifFonts } from '../../constants'

const Columns = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 24px;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    display: block;
  }
`

const Card = styled(_Card.Card)`
  display: flex;
  flex-direction: column;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    margin-bottom: 10px;
  }
`

const CardTitle = styled(Heading)`
  font-size: 1.3125rem;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing; -1px;
  margin: 0 0 12px;
`

const CardDescription = styled(Paragraph)`
  line-height: 2;
  font-size: 1rem;
  font-family: ${SerifFonts};
  font-weight: 300;
  flex: 1;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 0.875rem;
  }
`

const WritingFeatured = () => (
  <Columns>
    <Card>
      <CardTitle as="h5">Localz Engineering</CardTitle>
      <CardDescription>
        I am one of the lead maintainers of Localz Engineering, our Medium blog
        written by the product and development teams based in Melbourne.
      </CardDescription>
      <Button as="a" href="https://medium.com/localz-engineering/">
        Read More
      </Button>
    </Card>
    <Card>
      <CardTitle as="h5">TechGeek</CardTitle>
      <CardDescription>
        You can see most of my technology, gaming and geek culture stories and
        product reviews on TechGeek (which I also maintain).
      </CardDescription>
      <Button as="a" href="http://techgeek.com.au">
        Visit TechGeek
      </Button>
    </Card>
  </Columns>
)

export default WritingFeatured
