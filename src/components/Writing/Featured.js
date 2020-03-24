import React from 'react'
import Card from '../Card'
import Grid from '../Grid'

const WritingFeatured = () => (
  <Grid columns={1} marginBottom="major-2">
    <Card.Card>
      <Card.Title as="h5">Localz Engineering</Card.Title>
      <Card.Description>
        I am one of the lead maintainers of Localz Engineering, our Medium blog
        written by the product and development teams based in Melbourne.
      </Card.Description>
      <Card.Button
        href="https://medium.com/localz-engineering/"
        text="Read More"
      />
    </Card.Card>
    <Card.Card>
      <Card.Title as="h5">TechGeek</Card.Title>
      <Card.Description>
        You can see most of my technology, gaming and geek culture stories and
        product reviews on TechGeek (which I also maintain).
      </Card.Description>
      <Card.Button href="http://techgeek.com.au" text="Visit TechGeek" />
    </Card.Card>
  </Grid>
)

export default WritingFeatured
