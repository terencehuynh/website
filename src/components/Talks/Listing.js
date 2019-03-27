import React from 'react'
import { Box, Card, Heading, Paragraph, Button, Set, styled } from 'fannypack'
import { theme } from 'styled-tools'

import { SerifFonts } from '../../constants'
import Image from '../Image'

const Event = styled(Card.Card)`
  margin-bottom: 24px;
`

const EventTitle = styled(Heading)`
  font-size: 1.5rem;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing; -1px;
  margin: 8px 0 8px;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 1.3125rem;
  }
`

const EventMetadata = styled(Paragraph)`
  font-size: 1rem;
  line-height: 1.15;
  font-weight: 400;
  letter-spacing; -1px;
  margin: 0 0 24px;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 0.875rem;
  }
`

const EventDescription = styled(Paragraph)`
  line-height: 2;
  font-size: 1rem;
  font-family: ${SerifFonts};
  font-weight: 300;
  margin: 12px 0 0;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 0.875rem;
  }
`

const ImageBox = styled(Box)`
  width: 45%;
  margin-right: 36px;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`

const CardContents = styled(Box)`
  flex: 1;
`

const ImageCredit = styled(Paragraph)`
  font-weight: 300;
  font-size: 0.8125rem;
  color: #90a4ae;
  margin-top: 12px;
`

const MediaButton = styled(Button)`
  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 0.875rem;
  }
`

const MediaListing = ({ media }) => {
  if (!media || Object.keys(media).length < 1) return null
  return (
    <Set>
      {media.video && (
        <MediaButton use="a" href={media.video} iconBefore="solid-video">
          Watch
        </MediaButton>
      )}
      {media.slides && (
        <MediaButton
          use="a"
          href={media.slides}
          iconBefore="brand-speaker-deck"
        >
          Slides
        </MediaButton>
      )}
    </Set>
  )
}

const TalksListing = ({ data }) => (
  <Box>
    {data.map((event, index) => (
      <Event
        key={index}
        a11yDescriptionId="description"
        a11yTitleId="talkTitle"
      >
        <ImageBox>
          <Image filename={event.image} alt={event.title} />
          {event.imageCredit && (
            <ImageCredit>Image Credit: {event.imageCredit}</ImageCredit>
          )}
        </ImageBox>
        <CardContents>
          <EventTitle as="h5" id="talkTitle">
            {event.title}
          </EventTitle>
          <EventMetadata>
            {event.date}
            {event.conference ? ` · ${event.conference}` : ''}
          </EventMetadata>
          <EventDescription id="description">
            {event.description}
          </EventDescription>
          <MediaListing media={event.media} />
        </CardContents>
      </Event>
    ))}
  </Box>
)

export default TalksListing
