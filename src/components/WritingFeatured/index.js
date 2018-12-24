import React from 'react'
import {
  Columns,
  Column,
  Card,
  Heading,
  Paragraph,
  Button,
  styled,
} from 'fannypack'
import { theme } from 'styled-tools'

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
  font-family: 'Merriweather', sans-serif;
  font-weight: 300;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 0.875rem;
  }
`

const WritingFeatured = () => (
  <Columns>
    <Column>
      <Card.Card>
        <CardTitle as="h5">Localz Engineering</CardTitle>
        <CardDescription>
          I am one of the lead maintainers of Localz Engineering, our Medium
          blog written by the product and development teams based in Melbourne.
        </CardDescription>
        <Button as="a" href="https://medium.com/localz-engineering/">
          Visit Localz Engineering
        </Button>
      </Card.Card>
    </Column>
    <Column>
      <Card.Card>
        <CardTitle as="h5">TechGeek</CardTitle>
        <CardDescription>
          You can see most of my technology, gaming and geek culture stories and
          product reviews on TechGeek (which I also maintain).
        </CardDescription>
        <Button as="a" href="http://techgeek.com.au">
          Visit TechGeek
        </Button>
      </Card.Card>
    </Column>
  </Columns>
)

export default WritingFeatured
