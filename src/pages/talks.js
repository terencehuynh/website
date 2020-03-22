import React from 'react'
import { Container, Grid, Box, Set, space, styled, theme } from 'fannypack'

import Layout from '../components/Layout'
import PageBlock from '../components/Core/PageBlock'
import PageHeader from '../components/Core/PageHeader'
import Card from '../components/Core/Card'
import Image from '../components/TalkImage'

import data from '../data/talks.json'

const Listings = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${space(3, 'major')}rem;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const CardContents = styled(Box)`
  flex: 1;
`

const MediaListingSet = styled(Set)`
  margin-top: 12px;
`

const MediaListing = ({ media }) => {
  if (!media || Object.keys(media).length < 1) return null
  return (
    <MediaListingSet>
      {media.video && (
        <Card.Button href={media.video} text="Watch" iconBefore="solid-video" />
      )}
      {media.slides && (
        <Card.Button
          href={media.slides}
          text="Slides"
          iconBefore="brand-speaker-deck"
        />
      )}
    </MediaListingSet>
  )
}

const renderTalks = (event, index) => {
  return (
    <Card.Card>
      <Card.ImageBox>
        <Image filename={event.image} alt={event.title} />
        {event.imageCredit && (
          <Card.ImageCredit>Image Credit: {event.imageCredit}</Card.ImageCredit>
        )}
      </Card.ImageBox>
      <CardContents>
        <Card.Title as="h5"> {event.title}</Card.Title>
        <Card.Metadata>
          {event.date}
          {event.conference ? ` · ${event.conference}` : ''}
        </Card.Metadata>
        <Card.Description>{event.description}</Card.Description>
      </CardContents>
      <MediaListing media={event.media} />
    </Card.Card>
  )
}

const TalksPage = () => (
  <Layout pageTitle="Talks">
    <PageHeader icon="solid-laptop-code" heading="Talks" />
    <PageBlock>
      <Listings>{data.map(renderTalks)}</Listings>
    </PageBlock>
  </Layout>
)

export default TalksPage
