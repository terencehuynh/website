import React from 'react'
import { Box } from 'fannypack'

import Layout from '../components/Layout'
import PageBlock from '../components/Core/PageBlock'
import PageHeader from '../components/Core/PageHeader'
import Card from '../components/Card'
import Grid from '../components/Grid'
import Image from '../components/TalkImage'

import data from '../data/talks.json'

const renderTalks = (event, index) => {
  return (
    <Card.Card key={index}>
      <Card.ImageBox>
        <Image filename={event.image} alt={event.title} />
        {event.imageCredit && (
          <Card.ImageCredit>Image Credit: {event.imageCredit}</Card.ImageCredit>
        )}
      </Card.ImageBox>
      <Box flex="1">
        <Card.Title as="h5"> {event.title}</Card.Title>
        <Card.Metadata>
          {event.date}
          {event.conference ? ` · ${event.conference}` : ''}
        </Card.Metadata>
        <Card.Description>{event.description}</Card.Description>
      </Box>
      <Card.MediaListing media={event.media} />
    </Card.Card>
  )
}

const TalksPage = () => (
  <Layout pageTitle="Talks">
    <PageHeader icon="solid-laptop-code" heading="Talks" />
    <PageBlock>
      <Grid>{data.map(renderTalks)}</Grid>
    </PageBlock>
  </Layout>
)

export default TalksPage
